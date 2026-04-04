import { CircleUser, Home, ListVideo, Upload } from 'lucide-react';
import s from './LeftMenu.module.css';
import Link from 'next/link';

export const LeftMenu = () => {
  return (
    <aside className={s.LeftMenu}>
      <nav className={s.nav}>
        <Link href="/" className={s.link}>
          <Home size={24} aria-hidden="true" color="white" />
          Главная
        </Link>
        <Link href="/profile/123" className={s.link}>
          <CircleUser size={24} aria-hidden="true" color="white" />
          Профиль
        </Link>

        <div className={s.divider} />

        <Link href="/editor/addVideo" className={s.link}>
          <Upload size={24} aria-hidden="true" color="white" />
          Добавить видео
        </Link>
        <Link href="/myVideos" className={s.link}>
          <ListVideo size={24} aria-hidden="true" color="white" />
          Ваши видео
        </Link>
      </nav>
    </aside>
  );
};
