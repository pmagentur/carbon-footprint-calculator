import React from 'react';
import {View} from 'react-native';
import Svg, {G, Path} from 'react-native-svg';
import {COLORS} from '../../../Constants';
import {IconProps} from '../IconProps';

export const FlightHoursFourToEightIcon = ({
  width,
  height,
  color,
}: IconProps) => {
  return (
    <View>
      <Svg width={width ?? 48} height={height ?? 48} viewBox="0 0 48 48">
        <G transform="translate(-4915 -990)">
          <G
            fill={color ?? COLORS.CFP_BLACK}
            data-name="Group 35"
            transform="translate(4926 1001)">
            <Path
              d="M187.593 200.607a12.615 12.615 0 1112.549 12.978 12.64 12.64 0 01-12.549-12.978m12.941 11.387a11.039 11.039 0 10-11.359-10.379 11.081 11.081 0 0011.359 10.379"
              data-name="Path 60636"
              transform="translate(-187.589 -188.347)"
            />
            <Path
              d="M247.294 222.607v3.417a1.046 1.046 0 01-.182.612q-1.5 2.217-2.988 4.437a2.176 2.176 0 01-.27.339.715.715 0 01-.907.1.729.729 0 01-.318-.856 3.294 3.294 0 01.342-.64c.872-1.324 1.754-2.641 2.621-3.968a.89.89 0 00.119-.462c.009-2.041 0-4.082.012-6.123a2.9 2.9 0 01.079-.7.71.71 0 01.761-.5.684.684 0 01.69.586 2.251 2.251 0 01.036.411v3.358"
              data-name="Path 60637"
              transform="translate(-233.896 -213.523)"
            />
          </G>
        </G>
      </Svg>
    </View>
  );
};
