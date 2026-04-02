import React from 'react';
import s from './Header.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { Plus } from 'lucide-react';

interface HeaderProps {
  profileId: string;
}

export const Header = ({ profileId }: HeaderProps) => {
  return (
    <header className={s.header}>
      <Link href="/">
        <Image src={'/logo.svg'} alt="logo" width={120} height={90} />
      </Link>

      <div className={s.rightPart}>
        <Link href={`/editor/addVideo`} className={s.createVideo}>
          <Plus className={s.PlusIcon} />
          Создать
        </Link>

        <Link href={`/profile/${profileId}`} className={s.yourProfileLink}>
          <div className={s.hiddenText}>Перейти в свой профиль</div>
        </Link>
      </div>
    </header>
  );
};
