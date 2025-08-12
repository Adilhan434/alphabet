import Cards from "@/components/ForHome/Cards";
import Header from "@/components/ForHome/Header";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "./global.css";

const Index = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <Header />
      <ScrollView style={{ flex: 1 }}>
        <View className="w-full h-[40px] "/>
        <Cards />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Index;
