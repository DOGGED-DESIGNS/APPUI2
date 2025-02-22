import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

const _layout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen name="home" options={{ headerShown: false }} />
      </Stack>
      <StatusBar
        // Background color of the status bar
        style="dark" // Text color: "light" (white) or "dark" (black)
      />
    </>
  );
};

export default _layout;
