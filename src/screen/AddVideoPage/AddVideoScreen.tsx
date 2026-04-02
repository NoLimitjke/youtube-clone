'use client';
import React from 'react';
import { parseYouTubeUrl } from '@/src/shared/libs';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import s from './AddVideoScreen.module.css';

interface Inputs {
  videoUrl: string;
}

const schema = z.object({
  videoUrl: z
    .string()
    .min(5, { message: 'Поле не должно быть меньше 5 символов' })
    .refine((url) => {
      try {
        new URL(url);
        return true;
      } catch (error) {
        return false;
      }
    }, 'Поле должно быть ссылкой'),
});

export default function AddVideoScreen() {
  const [videoId, setVideoID] = React.useState<string>();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
  });

  const onSubmitHandler = async (data: Inputs) => {
    const url = new URL(data.videoUrl);
    const result = parseYouTubeUrl(url);
    if (!result.videoId) return;
    console.log(result.videoId);
    setVideoID(result.videoId);

    await fetch('/api/videos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ videoId: result.videoId }),
    });

    const dataFromServer = await fetch('/api/videos', { method: 'GET' });
    const responce = await dataFromServer.json();
  };

  return (
    <div className={s.container}>
      <form onSubmit={handleSubmit(onSubmitHandler)} className={s.form}>
        <label className={s.label}>
          <input
            className={s.input}
            type="text"
            placeholder="Вставьте ссылку на видео"
            {...register('videoUrl')}
          />
          {errors && <p className={s.error}>{errors.videoUrl?.message}</p>}
        </label>
        <button className={s.submitButton} type="submit">
          Загрузить
        </button>
      </form>

      {videoId && (
        <iframe
          className={s.iframe}
          width="700"
          height="350"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      )}
    </div>
  );
}
