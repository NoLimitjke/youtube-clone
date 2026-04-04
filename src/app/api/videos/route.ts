import { NextRequest, NextResponse } from 'next/server';

type OEmbedVideoInfo = {
  title: string;
  author_name: string;
  author_url: string;
  type: string;
  height: number;
  width: number;
  version: string;
  provider_name: string;
  provider_url: string;
  thumbnail_height: number;
  thumbnail_width: number;
  thumbnail_url: string;
  html: string;
};

type Video = {
  id: string;
  categoryId: string;
  userId: string;
};

const videosData = new Map<string, Video>([
  ['vJJfmcFm1IM', { userId: '0', id: 'vJJfmcFm1IM', categoryId: 'games' }],
  ['USE_V2gpAjw', { userId: '0', id: 'USE_V2gpAjw', categoryId: 'music' }],
  ['ofMHKu_bKvA', { userId: '0', id: 'ofMHKu_bKvA', categoryId: 'programming' }],
  ['6f7YhAVPI1Y', { userId: '0', id: '6f7YhAVPI1Y', categoryId: 'education' }],
  ['WU7KeAw5F6Y', { userId: '0', id: 'WU7KeAw5F6Y', categoryId: 'sports' }],
  ['W_WScRvk58c', { userId: '0', id: 'W_WScRvk58c', categoryId: 'humor' }],
  ['8fSdJpru2dM', { userId: '0', id: '8fSdJpru2dM', categoryId: 'technology' }],
  ['BcQTpRQyGlQ', { userId: '0', id: 'BcQTpRQyGlQ', categoryId: 'movies' }],
]);

export async function GET(req: NextRequest) {
  const urlObject = new URL(req.url);
  const videoIdParam = urlObject.searchParams.get('videoId');
  const categoryIdParam = urlObject.searchParams.get('categoryId');
  const userIdParam = urlObject.searchParams.get('userId');

  if (videoIdParam) {
    try {
      const rawResult = await fetch(
        `https://youtube.com/oembed?url=https://www.youtube.com/watch?v=${videoIdParam}&format=json`,
      );

      const videoInfo = (await rawResult.json()) as OEmbedVideoInfo;
      const authorUrl = videoInfo.author_url.split('/').at(-1);
      const result = {
        videoId: videoIdParam,
        title: videoInfo.title,
        authorName: videoInfo.author_name,
        authorUrl,
      };

      return NextResponse.json({ success: true, received: result });
    } catch (error) {
      console.error(error);
      return NextResponse.json({ success: false, received: null }, { status: 500 });
    }
  }

  try {
    const categories = Array.from(new Set([...videosData].map((data) => data[1].categoryId)));
    const promises = [...videosData]
      .filter((data) => (categoryIdParam ? data[1].categoryId === categoryIdParam : true))
      .filter((data) => (userIdParam ? data[1].userId === userIdParam : true))
      .map(async (data) => {
        const videoId = data[1].id;
        const categoryId = data[1].categoryId;
        const rawResult = await fetch(
          `https://youtube.com/oembed?url=https://www.youtube.com/watch?v=${videoId}&format=json`,
        );

        const videoInfo = (await rawResult.json()) as OEmbedVideoInfo;

        const authorUrl = videoInfo.author_url.split('/').at(-1);

        return {
          videoId,
          categoryId,
          title: videoInfo.title,
          authorName: videoInfo.author_name,
          authorUrl,
        };
      });

    const result = await Promise.all(promises);

    return NextResponse.json({
      success: true,
      received: Array.from(result),
      categories,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        received: [],
      },
      { status: 500 },
    );
  }
}

export async function POST(req: NextRequest) {
  const data = await req.json();
  if (videosData.has(data.videoId)) {
    return NextResponse.json(
      { success: false, error: 'Видео уже было добавлено.' },
      { status: 400 },
    );
  }
  videosData.set(data.videoId, {
    userId: data.userId,
    id: data.videoId,
    categoryId: data.categoryId,
  });

  return NextResponse.json({
    success: true,
    received: data,
  });
}
