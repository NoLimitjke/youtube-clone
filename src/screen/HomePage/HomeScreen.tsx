'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import s from './HomeScreen.module.css';

export default function HomeScreen() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [data, setData] = React.useState<string[] | null>(null);
  React.useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('/api/videos');

        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }

        const result = await response.json();
        setData(result.received);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div>Загрузка...</div>;
  }
  return (
    <div className={s.container}>
      {data && data.length > 0 ? (
        // Убрали лишний <div> здесь
        data.map((videoId) => (
          <div className={s.videoBlock} key={videoId}>
            <Link href={`/video/${videoId}`} className={s.videoPrev}>
              <Image
                src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                alt="Название видео"
                fill
                className={s.videoImg}
              />
            </Link>
            <div className={s.videoInfoContainer}>
              <Link href="/" className={s.channelImage}>
                <div className={s.hiddenText}>Название канала</div>
              </Link>
              <div className={s.videoInfo}>
                <Link className={s.videoTitle} href={`/video/${videoId}`}>
                  Название ролика
                </Link>
                <Link className={s.chanelNameLink} href="">
                  Название канала
                </Link>
              </div>
            </div>
            <Link href={`/video/${videoId}`} className={s.link} />
          </div>
        ))
      ) : (
        <div>Нет видео</div>
      )}
    </div>
  );
}
