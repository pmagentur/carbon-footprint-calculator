import React from 'react';
import {View} from 'react-native';
import Svg, {ClipPath, Defs, G, Path} from 'react-native-svg';
import {IconProps} from './IconProps';

export const ArrowIcon = ({width, height}: IconProps) => {
  return (
    <View>
      <Svg width={width ?? 16} height={height ?? 16} viewBox="0 0 16 16">
        <Defs>
          <ClipPath id="clip-path">
            <Path
              fill="none"
              d="M0 0H16V13.701H0z"
              data-name="Rectangle 7711"
            />
          </ClipPath>
        </Defs>
        <G transform="translate(-365 -707)">
          <G data-name="Group 60" transform="translate(365 708)">
            <G clipPath="url(#clip-path)" data-name="Group 59">
              <Path
                d="M14 7.426H.755a1.665 1.665 0 01-.3-.028.546.546 0 01.008-1.079 2.244 2.244 0 01.37-.03h13.198c-.041-.051-.059-.077-.081-.1-.737-.733-1.478-1.462-2.21-2.2q-1.4-1.417-2.8-2.848a2.278 2.278 0 01-.272-.327A.473.473 0 018.76.18a.5.5 0 01.634-.109 1.348 1.348 0 01.242.2q3.013 3.006 6.023 6.016a1.907 1.907 0 01.238.285.454.454 0 01-.024.606c-.209.24-.44.462-.666.687q-1.593 1.593-3.189 3.184-1.205 1.2-2.415 2.4a2.081 2.081 0 01-.083.079.54.54 0 11-.76-.767q.929-.963 1.871-1.912 1.65-1.668 3.306-3.331c.016-.016.028-.037.068-.088"
                data-name="Path 60673"
                transform="translate(-.001)"
              />
            </G>
          </G>
        </G>
      </Svg>
    </View>
  );
};
