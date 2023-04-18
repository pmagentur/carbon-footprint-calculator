import React from 'react';
import {View} from 'react-native';
import Svg, {G, Path} from 'react-native-svg';
import {COLORS} from '../../../Constants';
import {IconProps} from '../IconProps';

export const FlightHoursLessThanTwoIcon = ({
  width,
  height,
  color,
}: IconProps) => {
  return (
    <View>
      <Svg width={width ?? 48} height={height ?? 48} viewBox="0 0 48 48">
        <G transform="translate(-32 -471)">
          <G data-name="Group 37" transform="translate(-4883 -375)">
            <G
              fill={color ?? COLORS.CFP_BLACK}
              data-name="Group 36"
              transform="translate(4926 857)">
              <Path
                d="M453.592 203.088a12.615 12.615 0 1112.553 12.954 12.642 12.642 0 01-12.553-12.954m12.588-10.715a11.048 11.048 0 1011.06 11.057 11.03 11.03 0 00-11.061-11.058"
                data-name="Path 60634"
                transform="translate(-453.588 -190.803)"
              />
              <Path
                d="M504.891 253.231v3.339a2.036 2.036 0 01-.029.353.711.711 0 01-.8.618.693.693 0 01-.7-.672c-.03-.407-.04-.815-.041-1.224q-.007-2.637 0-5.275a.408.408 0 00-.206-.384q-2.012-1.36-4.015-2.733a.945.945 0 01-.482-.665.74.74 0 01.984-.8 2.35 2.35 0 01.52.276q1.637 1.086 3.267 2.182.508.34 1.019.677a1.013 1.013 0 01.489.927c-.013 1.126 0 2.252 0 3.378z"
                data-name="Path 60635"
                transform="translate(-491.495 -237.061)"
              />
            </G>
          </G>
        </G>
      </Svg>
    </View>
  );
};
