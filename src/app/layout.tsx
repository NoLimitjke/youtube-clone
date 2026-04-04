import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { BaseLayout } from '@/src/widgets/BaseLayout';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'YoutubeClone – Your Personal Video Platform',
  description:
    'Watch, upload, and share videos on YoutubeClone. Discover trending content, explore categories, and create your own playlists.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <BaseLayout>{children}</BaseLayout>
      </body>
    </html>
  );
}
