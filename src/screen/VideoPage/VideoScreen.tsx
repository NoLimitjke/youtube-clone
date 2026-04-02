import React from 'react';
import s from './VideoScreen.module.css';
import Link from 'next/link';

interface VideoScreenProps {
  videoId: string;
}

export default function VideoScreen({ videoId }: VideoScreenProps) {
  return (
    <div className={s.container}>
      <iframe
        className={s.iframe}
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />

      <b className={s.videoTitle}>Название ролика</b>

      <div className={s.videoInfoContainer}>
        <Link href="/" className={s.channelImage}>
          <div className={s.hiddenText}>Название канала</div>
        </Link>

        <div className={s.videoInfo}>
          <Link className={s.chanelNameLink} href="">
            Название канала
          </Link>
        </div>
      </div>
    </div>
  );
}
