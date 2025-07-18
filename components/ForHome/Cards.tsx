import { FlatList, View } from 'react-native';
import LessonCard from './LessonCard';
import { path } from '@/lessonRelated.js';
import { Link } from 'expo-router';

const Cards = () => {

  const renderItem = ({ item }: any) => {
    const [key, value] = Object.entries(item)[0];
    return (
      <Link href={`/lesson/${key}/1`}>
        <LessonCard letter={`${value}`} />
      </Link>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={path}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
        className="px-1 pt-[6vh]" // Tailwind от NativeWind
        // Ensure FlatList takes full available space
      />
    </View>
  );
};

export default Cards;