import React from 'react';
import s from './VideosList.module.css';
import { GetAllVideosDTO } from '@/src/shared/types/typesFromBackend';
import Link from 'next/link';
import Image from 'next/image';

interface VideosListProps {
  received: GetAllVideosDTO['received'];
}
export const VideosList = ({ received }: VideosListProps) => {
  if (received.length <= 0) {
    return <div className={s.noVideos}>Нет видео</div>;
  }
  return (
    <div className={s.videoGrid}>
      {received.map((videoInfo) => (
        <div className={s.videoBlock} key={videoInfo.videoId}>
          <Link href={`/video/${videoInfo.videoId}`} className={s.videoPrev}>
            <Image
              unoptimized
              src={`https://img.youtube.com/vi/${videoInfo.videoId}/hqdefault.jpg`}
              alt="Название видео"
              fill
              className={s.videoImg}
            />
          </Link>
          <div className={s.videoInfoContainer}>
            <Link href={`/profile/${videoInfo.authorUrl}`} className={s.channelImage}>
              <div className={s.hiddenText}>{videoInfo.authorName}</div>
            </Link>
            <div className={s.videoInfo}>
              <Link className={s.videoTitle} href={`/video/${videoInfo.videoId}`}>
                {videoInfo.title}
              </Link>
              <Link className={s.chanelNameLink} href={`/profile/${videoInfo.authorUrl}`}>
                {videoInfo.authorName}
              </Link>
            </div>
          </div>
          <Link href={`/video/${videoInfo.videoId}`} className={s.link} />
        </div>
      ))}
    </div>
  );
};
