import MyVideoScreen from '@/src/screen/MyVideoPage/MyVideoScreen/MyVideoScreen';
import { GetAllVideosDTO } from '@/src/shared/types/typesFromBackend';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Мои видео',
};

export default async function MyVideosPage() {
  const userId = '12345';

  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

    const response = await fetch(`${baseUrl}/api/videos?userId=${userId}`);

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const result = (await response.json()) as GetAllVideosDTO;

    return <MyVideoScreen received={result.received} />;
  } catch (err) {
    console.error(err);
    return <div>Что-то пошло не так.</div>;
  }
}
