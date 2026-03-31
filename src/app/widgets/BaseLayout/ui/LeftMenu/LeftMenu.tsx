import s from './LeftMenu.module.css';
import Link from 'next/link';

export const LeftMenu = () => {
  return (
    <aside className={s.LeftMenu}>
      <nav className={s.nav}>
        <Link href="/editor/addVideo">Добавить видео</Link>
        <Link href="/profile/123">Профиль</Link>
        <Link href="/categoryId">Категории</Link>
      </nav>
    </aside>
  );
};
