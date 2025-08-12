import { path } from "@/lessonRelated.js";
import { Link } from "expo-router";
import { FlatList, View } from "react-native";
import LessonCard from "./LessonCard";

const Cards = ({ listHeader }: { listHeader?: React.ReactElement }) => {
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
        className="px-1 "
        ListHeaderComponent={listHeader}
      />
    </View>
  );
};

export default Cards;
