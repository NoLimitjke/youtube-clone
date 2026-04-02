export type YouTubeParseResult = {
  videoId: string | null;
  type: 'video' | 'shorts' | 'embed' | 'unknown';
  originalUrl: URL;
  normalizedUrl: URL | null;
};

export function parseYouTubeUrl(url: URL): YouTubeParseResult {
  let videoId: string | null = null;
  let type: YouTubeParseResult['type'] = 'unknown';

  // youtube.com/watch?v=VIDEO_ID
  if (url.hostname.includes('youtube.com')) {
    if (url.pathname === '/watch') {
      videoId = url.searchParams.get('v');
      type = 'video';
    }

    // youtube.com/shorts/VIDEO_ID
    else if (url.pathname.startsWith('/shorts/')) {
      videoId = url.pathname.split('/')[2];
      type = 'shorts';
    }

    // youtube.com/embed/VIDEO_ID
    else if (url.pathname.startsWith('/embed/')) {
      videoId = url.pathname.split('/')[2];
      type = 'embed';
    }
  }

  // youtu.be/VIDEO_ID
  if (url.hostname === 'youtu.be') {
    videoId = url.pathname.slice(1);
    type = 'video';
  }

  return {
    videoId,
    type,
    originalUrl: url,
    normalizedUrl: videoId ? new URL(`https://www.youtube.com/watch?v=${videoId}`) : null,
  };
}
