import React from 'react';

import { Metadata } from 'next';
import VideoScreen from '@/src/screen/VideoPage/VideoScreen';
import { GetOneVideoDTO } from '@/src/shared/types/typesFromBackend';

export async function generateMetadata({ params }: VideoPageProps): Promise<Metadata> {
  const data = await params;
  const videoId = data.videoId;

  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

    const response = await fetch(`${baseUrl}/api/videos?videoId=${videoId}`);

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const result = (await response.json()) as GetOneVideoDTO;

    return {
      title: `${result.received?.title}`,
    };
  } catch (error) {
    return {
      title: `Неизвестное видео`,
    };
  }
}

interface VideoPageProps {
  params: Promise<{ videoId: string }>;
}

export default async function VideoPage({ params }: VideoPageProps) {
  const data = await params;
  const videoId = data.videoId;
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

    const response = await fetch(`${baseUrl}/api/videos?videoId=${videoId}`);

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const result = (await response.json()) as GetOneVideoDTO;

    return <VideoScreen received={result.received} />;
  } catch (err) {
    console.error(err);
    return <div>Что-то пошло не так.</div>;
  }
}
