import React from 'react';
import { Metadata } from 'next';
import HomeScreen from '@/src/screen/HomePage/HomeScreen';
import { GetAllVideosDTO } from '@/src/shared/types/typesFromBackend';
import { VIDEO_CATEGORIES } from '@/src/shared/constants/videoCategories';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const data = await params;
  const categoryId = data.categoryId;

  const foundCategory = VIDEO_CATEGORIES.find((category) => category.id === categoryId);

  if (!foundCategory) {
    return {
      title: 'Категория не найдена',
    };
  }
  return {
    title: `Видео в категории: ${foundCategory.title}`,
  };
}

interface CategoryPageProps {
  params: Promise<{ categoryId: string }>;
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const data = await params;
  const categoryId = data.categoryId;

  const foundCategory = VIDEO_CATEGORIES.find((category) => category.id === categoryId);
  if (!foundCategory) {
    return notFound();
  }
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

    const response = await fetch(`${baseUrl}/api/videos?categoryId=${categoryId}`);

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const result = (await response.json()) as GetAllVideosDTO;

    const finalCategories = VIDEO_CATEGORIES.filter(({ id }) => result.categories.includes(id));

    return (
      <HomeScreen received={result.received} categoryId={categoryId} categories={finalCategories} />
    );
  } catch (err) {
    console.error(err);
    return <div>Что-то пошло не так.</div>;
  }
}
