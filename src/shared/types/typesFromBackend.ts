export type VideoDTO = {
  videoId: string;
  categoryId: string;
  title: string;
  authorName: string;
  authorUrl: string;
};

export type GetAllVideosDTO = {
  success: boolean;
  received: VideoDTO[];
  categories: string[];
};

export type GetOneVideoDTO = {
  success: boolean;
  received: VideoDTO | null;
};
