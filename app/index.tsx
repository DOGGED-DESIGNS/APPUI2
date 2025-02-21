import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Icons } from "@/constants";
const index = () => {
  return (
    <SafeAreaView className=" justify-center items-center  flex-1  bg-slate-50 ">
      <View className=" mt-12     ">
        <View>
          <Image source={Icons.menu} resizeMode="contain" />
        </View>
        <View className=" ml-auto gap-2">
          <Image source={Icons.notification} resizeMode="contain" />
          <Image source={Icons.location} resizeMode="contain" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({});
