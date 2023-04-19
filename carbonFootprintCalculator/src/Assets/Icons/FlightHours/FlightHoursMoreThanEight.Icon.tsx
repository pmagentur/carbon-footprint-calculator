import React from 'react';
import {View} from 'react-native';
import Svg, {G, Path} from 'react-native-svg';
import {COLORS} from '../../../Constants';
import {IconProps} from '../IconProps';

export const FlightHoursMoreThanEightIcon = ({width, height, color}: IconProps) => {
  return (
    <View>
      <Svg width={width ?? 48} height={height ?? 48} viewBox="0 0 48 48">
        <G transform="translate(-4915 -1062)">
          <G
            fill={color ?? COLORS.CFP_BLACK}
            data-name="Group 33"
            transform="translate(4926 1073)">
            <Path
              d="M14.73 12.335a12.617 12.617 0 0125.231.346 12.617 12.617 0 11-25.231-.346m12.646 11.337A11.047 11.047 0 1016.292 12.7a11.059 11.059 0 0011.084 10.972"
              data-name="Path 60630"
              transform="translate(-14.727 -.001)"
            />
            <Path
              d="M89.546 34.254v-3.2a2.493 2.493 0 01.082-.642.72.72 0 01.773-.489.677.677 0 01.675.579 2.356 2.356 0 01.037.431c0 2.041.006 4.083 0 6.124a.509.509 0 00.265.478q2 1.329 3.98 2.676a.81.81 0 01.428.966.722.722 0 01-.93.5 1.106 1.106 0 01-.285-.132c-1.507-1-3.009-2.01-4.519-3a1.119 1.119 0 01-.5-1.046c.008-1.08 0-2.16 0-3.239z"
              data-name="Path 60631"
              transform="translate(-77.718 -25.191)"
            />
          </G>
        </G>
      </Svg>
    </View>
  );
};
