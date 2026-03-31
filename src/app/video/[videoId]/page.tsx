import React from 'react';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Видео: ...',
};

interface VideoPageProps {
  params: Promise<{ videoId: string }>;
}

export default async function VideoPage({ params }: VideoPageProps) {
  const data = await params;
  const videoId = data.videoId;

  return <div>videoPage: {videoId}</div>;
}
