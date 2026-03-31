import React from 'react';

import notFoundImage from './404.png';
import Image from 'next/image';

export const NotFoundPage = () => {
  return (
    <div>
      <Image src={notFoundImage} alt="404" width={500} height={200} />
    </div>
  );
};
