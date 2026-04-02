import React from 'react';

import s from './BaseLayout.module.css';
import { Header } from '../Header';
import { LeftMenu } from '../LeftMenu';

export const BaseLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={s.container}>
      <Header profileId="123" />
      <LeftMenu />
      {children}
    </div>
  );
};
