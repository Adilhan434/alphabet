import "@/app/global.css";
import { ICONS } from "@/consonants.js";
import { Link, useRouter } from "expo-router";

import { Image, Text, View, Pressable } from "react-native";

const HeaderForLesson = ({ header }: { header: string }) => {
  const router = useRouter();

  const stopCurrentMediaAndGoHome = async () => {
    try {
      if (global.activeAudio) {
        try {
          await global.activeAudio.stopAsync();
        } catch {} // ignore
        try {
          await global.activeAudio.unloadAsync();
        } catch {} // ignore
        global.activeAudio = null;
      }

      if (global.activeVideoPlayer) {
        try {
          await global.activeVideoPlayer.pause();
        } catch (e) {
          console.error("Ошибка при паузе видео-плеера:", e);
        }
        global.activeVideoPlayer = null;
      }
    } catch (err) {
      console.error("Ошибка при остановке медиа перед переходом в меню:", err);
    } finally {
      router.push("/");
    }
  };

  return (
    <View className="w-full bg-primary h-[13vh] px-4 py-3 items-end justify-between flex-row">
      <Pressable onPress={stopCurrentMediaAndGoHome}>
        <Image
          source={ICONS.backtomenu}
          style={{ width: 40, height: 40 }} // Вместо className
        />
      </Pressable>

      <View className="flex-row gap-5 justify-center items-center">
        <Text className="font-extrabold text-[32px] leading-[41px] text-text">
          {header}
        </Text>
        <Text className="text-text font-noto font-normal text-[20px] leading-[27px]">
          тамгасы
        </Text>
      </View>

      <View style={{ width: 28, height: 28 }} />
    </View>
  );
};

export default HeaderForLesson;
