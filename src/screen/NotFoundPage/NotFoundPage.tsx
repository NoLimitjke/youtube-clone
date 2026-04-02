import React from 'react';

import notFoundImage from './404.svg';
import s from './NotFoundPage.module.css';
import Image from 'next/image';
import Link from 'next/link';

export const NotFoundPage = () => {
  return (
    <div className={s.container}>
      <Image src={notFoundImage} alt="404" width={256} height={256} className={s.images} />
      <p>Эта страница недоступна.</p>
      <p>Может, поискать что-то другое?</p>

      <Link href="/" className={s.link}>
        <Image src={'/logo.svg'} alt="logo" width={150} height={120} />
      </Link>
    </div>
  );
};
