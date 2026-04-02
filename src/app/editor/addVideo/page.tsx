import React from 'react';
import { Metadata } from 'next';
import AddVideoScreen from '@/src/screen/AddVideoPage/AddVideoScreen';

export const metadata: Metadata = {
  title: 'Добавить видео',
};

export default function addVideoPage() {
  return <AddVideoScreen />;
}
