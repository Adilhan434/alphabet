import Cards from "@/components/ForHome/Cards";
import Header from "@/components/ForHome/Header";
import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "./global.css";

const Index = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <Header />
      <Cards listHeader={<View className="w-full h-[40px]" />} />
    </SafeAreaView>
  );
};

export default Index;
