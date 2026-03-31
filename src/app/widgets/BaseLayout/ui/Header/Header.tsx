import React from 'react';
import s from './Header.module.css';
import Image from 'next/image';

import logo from './logo.png';
import Link from 'next/link';
export const Header = () => {
  return (
    <header className={s.header}>
      <Link href="/">
        <Image src={logo} alt="logo" className={s.logo} />
      </Link>
    </header>
  );
};
