import { useTheme } from "@/app/ThemeContext";
import { Feather, Ionicons, MaterialIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  Share,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  lightBg: {
    backgroundColor: "#ffffff",
  },
  darkBg: {
    backgroundColor: "#1a1a1a",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#e5e5e5",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  placeholder: {
    width: 24,
  },
  content: {
    padding: 16,
  },
  settingItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#e5e5e5",
  },
  settingLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginRight: 12,
  },
  settingText: {
    fontSize: 16,
  },
  lightText: {
    color: "#000000",
  },
  darkText: {
    color: "#ffffff",
  },
});

const Settings = () => {
  const { theme, setTheme } = useTheme();
  const isDarkMode = theme === "dark";
  const router = useRouter();
  const [localDark, setLocalDark] = useState(isDarkMode);

  useEffect(() => {
    (async () => {
      const value = await AsyncStorage.getItem("darkMode");
      if (value !== null) {
        setLocalDark(JSON.parse(value));
        setTheme(JSON.parse(value) ? "dark" : "light");
      }
    })();
  }, [setTheme]);

  const handleShare = async () => {
    try {
      await Share.share({
        message:
          "Араб алфавитин үйрөнүү үчүн эң мыкты колдонмо! Жүктөп алыңыз:",
      });
    } catch (error) {
      console.error("Бөлүшүүдө ката:", error);
    }
  };

  const handleFeedback = () => {
    alert("Пикир калтыруу: info@yourapp.com");
  };

  const handleSuggestions = () => {
    alert("Сунуштар жана эскертүүлөр: info@yourapp.com");
  };

  return (
    <SafeAreaView
      style={[styles.container, localDark ? styles.darkBg : styles.lightBg]}
    >
      <StatusBar
        barStyle={localDark ? "light-content" : "dark-content"}
        backgroundColor={localDark ? "#1a1a1a" : "#fff"}
      />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons
            name="arrow-back"
            size={28}
            color={localDark ? "#fff" : "#222"}
          />
        </TouchableOpacity>
        <Text
          style={[
            styles.headerText,
            localDark ? styles.darkText : styles.lightText,
          ]}
        >
          Орнотуулар
        </Text>
        <View style={styles.placeholder} />
      </View>

      <View style={styles.content}>
        <TouchableOpacity style={styles.settingItem} onPress={handleShare}>
          <View style={styles.settingLeft}>
            <Feather
              name="share-2"
              size={24}
              color="#222"
              style={styles.icon}
            />
            <Text style={[styles.settingText, styles.lightText]}>Сунуштоо</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingItem} onPress={handleFeedback}>
          <View style={styles.settingLeft}>
            <MaterialIcons
              name="feedback"
              size={24}
              color="#222"
              style={styles.icon}
            />
            <Text style={[styles.settingText, styles.lightText]}>
              Пикир калтыруу
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.settingItem}
          onPress={handleSuggestions}
        >
          <View style={styles.settingLeft}>
            <Ionicons
              name="chatbubble-ellipses-outline"
              size={24}
              color="#222"
              style={styles.icon}
            />
            <Text style={[styles.settingText, styles.lightText]}>
              Сунуштар жана эскертүүлөр
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Settings;
