import { Metadata } from 'next';
import { NotFoundPage } from '../screen/NotFoundPage';

export const metadata: Metadata = {
  title: 'Страница не найдена',
};

export default function NotFound() {
  return <NotFoundPage />;
}
