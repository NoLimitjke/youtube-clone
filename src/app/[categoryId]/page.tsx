import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Видео в категории: ...',
};

interface CategoryPageProps {
  params: Promise<{ categoryId: string }>;
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const data = await params;
  const categoryId = data.categoryId;

  return <div>ProfilePage: {categoryId}</div>;
}
