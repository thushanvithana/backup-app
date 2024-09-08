import { View, Text } from "react-native";
import React from "react";
import { Path, Svg } from "react-native-svg";

const ForwardArrow = ({
  fill = "white"
}: {
  fill?: string;
}) => {
  return (
    <View>
      <Svg
        width="20"
        height="16"
        viewBox="0 0 20 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M19.0459 8.79593L12.2959 15.5459C12.0846 15.7573 11.7979 15.876 11.4991 15.876C11.2002 15.876 10.9135 15.7573 10.7022 15.5459C10.4908 15.3346 10.3721 15.0479 10.3721 14.7491C10.3721 14.4502 10.4908 14.1635 10.7022 13.9522L15.5312 9.125H1.75C1.45163 9.125 1.16548 9.00647 0.954505 8.79549C0.743526 8.58451 0.625 8.29837 0.625 8C0.625 7.70163 0.743526 7.41548 0.954505 7.2045C1.16548 6.99352 1.45163 6.875 1.75 6.875H15.5312L10.7041 2.045C10.4927 1.83365 10.374 1.54701 10.374 1.24812C10.374 0.949235 10.4927 0.662591 10.7041 0.451246C10.9154 0.239902 11.2021 0.12117 11.5009 0.12117C11.7998 0.12117 12.0865 0.239902 12.2978 0.451246L19.0478 7.20125C19.1527 7.3059 19.2359 7.43025 19.2926 7.56715C19.3493 7.70405 19.3784 7.8508 19.3782 7.99898C19.3781 8.14716 19.3486 8.29384 19.2916 8.43061C19.2346 8.56737 19.1511 8.69152 19.0459 8.79593Z"
          fill={fill}
        />
      </Svg>
    </View>
  );
};

export default ForwardArrow;