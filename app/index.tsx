import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Icons } from "@/constants";
import { Redirect } from "expo-router";
const index = () => {
  return <Redirect href={"/(welcome)/home"} />;
};

export default index;

const styles = StyleSheet.create({});
