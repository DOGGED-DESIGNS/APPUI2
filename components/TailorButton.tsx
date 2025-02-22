import {
  View,
  Text,
  Image,
  PressableProps,
  ImageSourcePropType,
} from "react-native";
import React from "react";
import { Icons } from "@/constants";

interface ultType extends PressableProps {
  image: ImageSourcePropType;
}
const TailorButton = ({ image, accessibilityState }: ultType) => {
  const isActive = accessibilityState?.selected;
  return (
    <View className=" items-center space-y-2">
      <Image resizeMode="contain" className="h-7 w-7" source={Icons.location} />
      <Text> Location</Text>
    </View>
  );
};

export default TailorButton;
