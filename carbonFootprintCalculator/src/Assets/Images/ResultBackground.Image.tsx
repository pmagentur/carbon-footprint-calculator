import React from 'react';
import {View} from 'react-native';
import Svg, {Defs, G, Path, LinearGradient, Stop} from 'react-native-svg';
import {ImageProps} from './ImageProps';
import {COLORS} from '../../Constants';

export const ResultBackgroundImage = ({width, height}: ImageProps) => {
  return (
    <View>
      <Svg
        width={width ?? 337.368}
        height={height ?? 240.575}
        viewBox="0 0 237.368 240.575">
        <Defs>
          <LinearGradient
            id="linear-gradient"
            x1="0.5"
            x2="0.5"
            y2="1"
            gradientUnits="objectBoundingBox">
            <Stop offset="0" stopColor={COLORS.CFP_GREEN1} />
            <Stop offset="1" stopColor={COLORS.CFP_GREEN2} />
          </LinearGradient>
        </Defs>
        <G transform="translate(-76.273 -146.095)">
          <Path
            fill="url(#linear-gradient)"
            d="M3426.4 397.4s-115.208-1.455-141.988 36.874 27.139 118.582 27.139 118.582 50.534 52.449 99.464 7.828 70.029-100.461 50.488-143.351-35.1-19.934-35.1-19.934"
            data-name="Path 60656"
            transform="translate(-3176.468 -215.517)"
          />
          <Path
            fill="none"
            stroke="#191d21"
            strokeWidth="3"
            d="M295.267 296.102S266.487 183.06 221.98 166.92s-108.845 57.63-108.845 57.63-38.04 63.168 18.423 99.318 116.603 42.14 153.419 11.786 10.29-39.552 10.29-39.552"
            data-name="Path 60674"
          />
        </G>
      </Svg>
    </View>
  );
};
