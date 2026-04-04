'use client';
import React from 'react';
import s from './VideoScreen.module.css';
import Link from 'next/link';
import { GetOneVideoDTO, VideoDTO } from '@/src/shared/types/typesFromBackend';

interface VideoScreenProps {
  received: GetOneVideoDTO['received'];
}

export default function VideoScreen({ received }: VideoScreenProps) {
  if (!received) {
    return <div>error</div>;
  }
  return (
    <div className={s.container}>
      <iframe
        className={s.iframe}
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${received.videoId}?autoplay=1`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />

      <b className={s.videoTitle}>{received.title}</b>

      <div className={s.videoInfoContainer}>
        <Link href={`/profile/${received.authorUrl}`} className={s.channelImage}>
          <div className={s.hiddenText}>{received.authorName}</div>
        </Link>

        <div className={s.videoInfo}>
          <Link className={s.chanelNameLink} href={`/profile/${received.authorUrl}`}>
            {received.authorName}
          </Link>
        </div>
      </div>
    </div>
  );
}
