import {
  View,
  Text,
  Image,
  PressableProps,
  ImageSourcePropType,
  Pressable,
} from "react-native";
import React from "react";
import { Icons } from "@/constants";

interface ultType extends PressableProps {
  imageactive: ImageSourcePropType;
  imageinactive: ImageSourcePropType;
}
const TailorButton = ({
  imageactive,
  imageinactive,
  accessibilityState,
  onPress,
}: ultType) => {
  const isActive = accessibilityState?.selected;
  return (
    <Pressable onPress={onPress} className=" items-center ">
      <Image
        tintColor={isActive ? "#F46800" : "#727272"}
        resizeMode="contain"
        className=" mb-2 h-7 w-7"
        source={isActive ? imageactive : imageinactive}
      />
      <View
        className={
          isActive ? `h-[2px] w-8 rounded-full bg-orange-700` : " hidden"
        }
      ></View>
    </Pressable>
  );
};

export default TailorButton;

// F46800
