import React from "react";
import { View } from "react-native";

export const Divider = props => {
  return (
    <View
      style={{
        alignSelf: "stretch",
        borderWidth: props.borderWidth ?? 0.5,
        marginHorizontal: props.marginHorizontal ?? 24,
        borderColor: props.borderColor ?? "gray"
      }}
    />
  );
};
