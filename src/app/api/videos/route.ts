import { NextRequest, NextResponse } from 'next/server';

const videosData = new Set([
  'vJJfmcFm1IM',
  'USE_V2gpAjw',
  'ofMHKu_bKvA',
  '9Yl3b_1Q-Z4',
  '6f7YhAVPI1Y',
  'WU7KeAw5F6Y',
  'W_WScRvk58c',
  '8fSdJpru2dM',
  'qZ5c-9M2i6E',
  'BcQTpRQyGlQ',
]);

export async function GET() {
  videosData.add('vJJfmcFm1IM');
  videosData.add('USE_V2gpAjw');
  videosData.add('ofMHKu_bKvA');
  videosData.add('9Yl3b_1Q-Z4');
  videosData.add('6f7YhAVPI1Y');
  videosData.add('WU7KeAw5F6Y');
  videosData.add('W_WScRvk58c');
  videosData.add('8fSdJpru2dM');
  videosData.add('qZ5c-9M2i6E');
  videosData.add('BcQTpRQyGlQ');
  return NextResponse.json({
    success: true,
    received: Array.from(videosData),
  });
}

export async function POST(req: NextRequest) {
  const data = await req.json();
  if (videosData.has(data.videoId)) {
    return NextResponse.json(
      { success: false, error: 'Видео уже было добавлено.' },
      { status: 400 },
    );
  }
  videosData.add(data.videoId);

  return NextResponse.json({
    success: true,
    received: data,
  });
}
