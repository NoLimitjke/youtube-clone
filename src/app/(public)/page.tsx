import HomeScreen from '../../screen/HomePage/HomeScreen';
import { VIDEO_CATEGORIES } from '../../shared/constants/videoCategories';
import { GetAllVideosDTO } from '../../shared/types/typesFromBackend';

export default async function Home() {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

    const response = await fetch(`${baseUrl}/api/videos`);

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const result = (await response.json()) as GetAllVideosDTO;

    const finalCategories = VIDEO_CATEGORIES.filter(({ id }) => result.categories.includes(id));

    return <HomeScreen received={result.received} categories={finalCategories} />;
  } catch (err) {
    console.error(err);
    return <div>Что-то пошло не так.</div>;
  }
}
