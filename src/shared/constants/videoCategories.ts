type Category = {
  id: string;
  title: string;
};

export const DEFAULT_CATEGORY: Category = { id: 'all', title: 'Все' };

export const VIDEO_CATEGORIES: Category[] = [
  { id: 'music', title: 'Музыка' },
  { id: 'games', title: 'Игры' },
  { id: 'movies', title: 'Фильмы' },
  { id: 'news', title: 'Новости' },
  { id: 'sports', title: 'Спорт' },
  { id: 'education', title: 'Образование' },
  { id: 'science-tech', title: 'Наука и технологии' },
  { id: 'programming', title: 'Программирование' },
  { id: 'travel', title: 'Путешествия' },
  { id: 'cooking', title: 'Кулинария' },
  { id: 'humor', title: 'Юмор' },
  { id: 'bloggers', title: 'Блогеры' },
  { id: 'podcasts', title: 'Подкасты' },
  { id: 'cars', title: 'Автомобили' },
  { id: 'animals', title: 'Животные' },
  { id: 'fashion', title: 'Мода и стиль' },
  { id: 'beauty', title: 'Красота' },
  { id: 'finance', title: 'Финансы' },
  { id: 'investing', title: 'Инвестиции' },
  { id: 'marketing', title: 'Маркетинг' },
  { id: 'business', title: 'Бизнес' },
  { id: 'diy', title: 'DIY и хендмейд' },
  { id: 'fitness', title: 'Здоровье и фитнес' },
  { id: 'history', title: 'История' },
  { id: 'animation', title: 'Анимация' },
  { id: 'reviews', title: 'Кинообзоры' },
  { id: 'trailers', title: 'Трейлеры' },
  { id: 'trending', title: 'Тренды' },
  { id: 'live', title: 'Live' },
];
