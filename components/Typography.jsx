import React from "react";
import { Text as RNText } from "react-native";

export const Typography = props => {
  return (
    <RNText
      style={{
        color: props.color ?? "black",
        fontSize: props.fontSize ?? 10
      }}
    >
      {props.children}
    </RNText>
  );
};

// Typography.propTypes = {
//   color: PropTypes.string,
//   fontSize: PropTypes.number.isRequired,
//   children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired
// }
