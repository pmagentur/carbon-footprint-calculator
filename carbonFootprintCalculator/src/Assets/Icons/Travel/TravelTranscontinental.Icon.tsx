import React from 'react';
import {View} from 'react-native';
import Svg, {G, Path} from 'react-native-svg';
import {COLORS} from '../../../Constants';
import {IconProps} from '../IconProps';

export const TravelTranscontinentalIcon = ({width, height, color}: IconProps) => {
  return (
    <View>
      <Svg width={width ?? 48} height={height ?? 48} viewBox="0 0 48 48">
        <G transform="translate(-4435 -1049)">
          <Path
            fill={color ?? COLORS.CFP_BLACK}
            d="M783.818 758.274a13.106 13.106 0 11-13.106-13.089 13.054 13.054 0 0113.106 13.089m-24.4-1.612c-.624 2.229.045 6.7 3.088 9.672a11.149 11.149 0 0012.133 2.756c3.961-1.367 6.291-4.308 7.334-8.393-.758-.183-1.472-.351-2.183-.528a2.392 2.392 0 01-1.825-1.489c-.349-.947-.705-1.895-.987-2.863a2.347 2.347 0 011.3-2.872c.528-.255 1.086-.445 1.627-.673a4.23 4.23 0 00.418-.234 11.038 11.038 0 00-4.5-4.032 10.7 10.7 0 00-4.357-1.163c-.142-.005-.284.01-.427.016a2.153 2.153 0 00.118.407 2.585 2.585 0 01-.1 2.9c-.279.385-.63.718-.941 1.08-.339.395-.336.545-.01.961.287.366.6.717.849 1.1a1.685 1.685 0 01-.009 1.9 1.6 1.6 0 01-1.721.775 13.629 13.629 0 01-1.494-.415.453.453 0 00-.643.436c-.029.333.181.5.435.628.671.339 1.333.7 2.023.994a3.439 3.439 0 001.142.266c.723.041 1.45.017 2.175.01a3.312 3.312 0 012.253.827 3.714 3.714 0 01.991 4.428 3.036 3.036 0 01-1.536 1.583 2.341 2.341 0 00-1.321 1.525 11.361 11.361 0 01-.421 1.241 2.266 2.266 0 01-2.262 1.44 2.3 2.3 0 01-2.122-1.591 6.454 6.454 0 01-.167-1.618 1.225 1.225 0 00-.611-1.163 2.413 2.413 0 01-.519-.458 2.5 2.5 0 01-.506-1.848 2.025 2.025 0 00-1.495-2.187q-1.166-.388-2.342-.743a4.777 4.777 0 01-2.828-1.755c-.188-.279-.35-.575-.562-.926m12.267 2.845v-.042a8.229 8.229 0 01-1.595-.017 10.9 10.9 0 01-3.868-1.813 2.1 2.1 0 011.9-3.651c.38.113.751.254 1.132.363a1 1 0 00.341-.027 1.014 1.014 0 00-.1-.359c-.249-.325-.537-.621-.785-.948a1.894 1.894 0 01-.129-2.357 16.7 16.7 0 011.044-1.31.972.972 0 00.137-1.277 9.761 9.761 0 00-.566-.95.483.483 0 00-.385-.183 12.007 12.007 0 00-4.361 1.689 11.488 11.488 0 00-4.289 5.1.808.808 0 00-.013.57c.256.633.552 1.25.835 1.871a2.485 2.485 0 001.581 1.392c.716.226 1.442.423 2.146.681a10.006 10.006 0 012.132.911 3.28 3.28 0 011.376 3.036 1.244 1.244 0 00.544 1.273 2.352 2.352 0 011.11 2.193 7.559 7.559 0 00.021.984.758.758 0 001.265.5 1.676 1.676 0 00.339-.639c.17-.446.288-.913.475-1.35a4.271 4.271 0 011.9-1.857c.942-.58 1.069-1.249.859-2.392a1.87 1.87 0 00-1.861-1.39c-.4-.015-.793 0-1.19 0m10.567-.918c-.014-.245-.029-.491-.041-.737a11.434 11.434 0 00-.887-4.019c-.1-.238-.211-.32-.462-.212-.59.252-1.191.478-1.779.733a.815.815 0 00-.51 1.131c.253.779.524 1.551.785 2.328a1.143 1.143 0 00.9.807q.76.166 1.518.346c.465.111.488.1.481-.378"
            data-name="Path 60629"
            transform="translate(3688.394 314.815)"
          />
        </G>
      </Svg>
    </View>
  );
};
