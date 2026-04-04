'use client';
import React from 'react';
import s from '../../HomePage/HomeScreen.module.css';
import { GetAllVideosDTO } from '@/src/shared/types/typesFromBackend';
import Link from 'next/link';
import Image from 'next/image';
import { VideosList } from '@/src/widgets/VideosList/ui/VideosList/VideosList';

interface MyVideoScreenProps {
  received: GetAllVideosDTO['received'];
}

export default function MyVideoScreen({ received }: MyVideoScreenProps) {
  return (
    <div className={s.container}>
      <VideosList received={received} />
    </div>
  );
}
