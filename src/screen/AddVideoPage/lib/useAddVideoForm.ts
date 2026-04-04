import { parseYouTubeUrl } from '@/src/shared/libs';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import z from 'zod';

interface Inputs {
  videoUrl: string;
  videoCategory: string;
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
  videoCategory: z.string(),
});

export const useAddVideoForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
  });
  const [videoId, setVideoID] = React.useState<string>();

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
      //TODO: Доделать USERID
      body: JSON.stringify({
        userId: '12345',
        videoId: result.videoId,
        categoryId: data.videoCategory,
      }),
    });

    reset();
  };

  return {
    register,
    errors,
    videoId,
    onSubmit: handleSubmit(onSubmitHandler),
  };
};
