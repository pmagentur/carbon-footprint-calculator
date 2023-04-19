import React from 'react';
import {View} from 'react-native';
import Svg, {G, Path, Rect} from 'react-native-svg';
import {COLORS} from '../../../Constants';
import {IconProps} from '../IconProps';

export const FlightHoursTwoToFourIcon = ({width, height, color}: IconProps) => {
  return (
    <View>
      <Svg width={width ?? 48} height={height ?? 48} viewBox="0 0 48 48">
        <G transform="translate(-4915 -918)">
          <Rect
            width={width ?? 48}
            height={height ?? 48}
            fill={COLORS.WHITE}
            data-name="Rectangle 7699"
            opacity="0.004"
            rx="24"
            transform="translate(4915 918)"
          />
          <G
            fill={color ?? COLORS.CFP_BLACK}
            data-name="Group 34"
            transform="translate(4926 929)">
            <Path
              d="M0 213.13a12.5 12.5 0 0112.73-12.285 12.62 12.62 0 01-.173 25.238A12.641 12.641 0 010 213.13m12.812-10.705a11.045 11.045 0 1010.836 11.115 11.03 11.03 0 00-10.836-11.115"
              data-name="Path 60632"
              transform="translate(0 -200.845)"
            />
            <Path
              d="M74.8 235.16v-3.258a2.6 2.6 0 01.077-.643.713.713 0 01.759-.508.684.684 0 01.693.582 2.37 2.37 0 01.037.431v5.845c0 .187.046.246.239.245 1.409-.008 2.817-.006 4.226 0a2.726 2.726 0 01.451.04.685.685 0 01.608.693.725.725 0 01-.511.757 1.647 1.647 0 01-.464.077q-2.567.008-5.134 0c-.652 0-.926-.255-.963-.905-.021-.361-.021-.723-.023-1.085v-2.271z"
              data-name="Path 60633"
              transform="translate(-62.97 -226.023)"
            />
          </G>
        </G>
      </Svg>
    </View>
  );
};
