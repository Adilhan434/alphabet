import "@/app/global.css";
import { ICONS } from "@/consonants.js";
import { Link } from "expo-router";
import { Image, Text, View } from "react-native";

const Header = () => {
  return (
    <View
      style={{
        width: "100%",
        height: 90,
        backgroundColor: "#6366F1",
        paddingHorizontal: 8,
        paddingVertical: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Link href="/settings">
        <Image source={ICONS.burgermenu} style={{ width: 28, height: 28 }} />
      </Link>
      <Text style={{ fontWeight: "bold", fontSize: 19, color: "white" }}>
        АРАБ АЛФАВИТИ
      </Text>
      <View style={{ width: 28, height: 28 }} />
    </View>
  );
};

export default Header;
