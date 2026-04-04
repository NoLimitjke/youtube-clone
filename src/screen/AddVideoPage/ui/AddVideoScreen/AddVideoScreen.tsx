'use client';
import React from 'react';
import s from './AddVideoScreen.module.css';
import { useAddVideoForm } from '../../lib/useAddVideoForm';
import { VIDEO_CATEGORIES } from '@/src/shared/constants/videoCategories';

export default function AddVideoScreen() {
  const { onSubmit, register, errors, videoId } = useAddVideoForm();
  return (
    <div className={s.container}>
      <form onSubmit={onSubmit} className={s.form}>
        <select {...register('videoCategory')} className={s.select}>
          {VIDEO_CATEGORIES.map((data) => (
            <option value={data.id} key={data.id}>
              {data.title}
            </option>
          ))}
        </select>

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
