'use client';
import cn from 'classnames';
import Link from 'next/link';
import React from 'react';
import s from './HomeScreen.module.css';
import { GetAllVideosDTO } from '@/src/shared/types/typesFromBackend';
import { DEFAULT_CATEGORY, VIDEO_CATEGORIES } from '@/src/shared/constants/videoCategories';
import { VideosList } from '@/src/widgets/VideosList/ui/VideosList/VideosList';

type HomeScreenProps = {
  received: GetAllVideosDTO['received'];
  categories?: typeof VIDEO_CATEGORIES;
  categoryId?: string;
};

export default function HomeScreen({ received, categories, categoryId }: HomeScreenProps) {
  return (
    <div className={s.container}>
      <div className={s.categoriesContainer}>
        <Link
          href="/"
          className={cn(s.categoryLink, {
            [s.activeCategoryLink]: !categoryId,
          })}>
          {DEFAULT_CATEGORY.title}
        </Link>
        {categories &&
          categories.length > 0 &&
          categories.map((cat) => (
            <Link
              href={`/${cat.id}`}
              key={cat.id}
              className={cn(s.categoryLink, {
                [s.activeCategoryLink]: cat.id === categoryId,
              })}>
              {cat.title}
            </Link>
          ))}
      </div>

      <VideosList received={received} />
    </div>
  );
}
