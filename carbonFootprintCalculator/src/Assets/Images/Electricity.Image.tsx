import React from 'react';
import {View} from 'react-native';
import Svg, {Defs, G, LinearGradient, Path, Stop} from 'react-native-svg';
import {ImageProps} from './ImageProps';
import {COLORS} from '../../Constants';

export const ElectricityImage = ({width, height}: ImageProps) => {
  return (
    <View>
      <Svg
        width={width ?? 393}
        height={height ?? 227}
        viewBox="0 0 393 227">
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
        <G transform="translate(0 -112)">
          <G data-name="Group 57" transform="translate(90.028 145)">
            <Path
              fill="url(#linear-gradient)"
              d="M3334.489 393.628s-44.356-.56-54.667 14.2 10.449 45.655 10.449 45.655 19.456 20.194 38.295 3.014 26.961-38.681 19.434-55.197-13.515-7.675-13.515-7.675"
              data-name="Path 60656"
              transform="translate(-3265.277 -302.264)"
            />
            <Path
              fill={COLORS.CFP_BLACK}
              d="M3268.8 225.5a72.939 72.939 0 0110.324-5.063 56.459 56.459 0 0115.321-3.937 40.781 40.781 0 0113.079.467c.743.174 1.543-.076 2.246.332a16.415 16.415 0 014.92 1.782c1.536.858 2.82.961 4.1-.313 7.244-4.423 14.3-9.141 21.375-13.821 6.907-4.568 13.778-9.191 20.49-14.043 8.713-6.3 17.51-12.482 25.315-19.947 2.775-2.654 4.283-6.028 5.775-9.369a132.668 132.668 0 004.731-12.841c2.279-6.96 4.213-14.019 6.3-21.033a4.535 4.535 0 00.07-1c.684-.589 1.5-.294 2.262-.335a29.331 29.331 0 01-1.217 4.989c-1.337 4.62-2.634 9.253-4.078 13.839-1.251 3.971-2.64 7.9-4.044 11.821a60.476 60.476 0 01-5.436 11.535c-2.295 3.7-5.776 6.294-9.04 9.074-4.4 3.745-9.012 7.2-13.66 10.623-6.439 4.739-13.03 9.26-19.673 13.7q-13.563 9.074-27.159 18.1a4.136 4.136 0 00-2.039 1 3.176 3.176 0 01-4.052.191 21.326 21.326 0 00-5.9-2.183c-4.591-1.054-9.243-.7-13.881-.645a14.169 14.169 0 00-3.447.415c-6.786 1.8-13.595 3.561-19.673 7.288-3.8 2.33-7.677 4.531-10.916 7.68-1.047 1.018-.555 1.6.232 2.23a2.785 2.785 0 001.879.512c1.957-.042 3.919.052 5.874-.031a5.707 5.707 0 013.551 1.108c2.8 1.872 4.586 4.648 6.4 7.332a59.873 59.873 0 019.056 21.043 27.138 27.138 0 01-.245 13.59c-.151.516-.778 1.116-.111 1.68s1.26-.069 1.795-.3a42.456 42.456 0 008.217-4.866 145.47 145.47 0 0012.728-9.922 47.237 47.237 0 005.539-5.264 33.739 33.739 0 005.466-9.831c2.279-6.667 2.175-13.487 1.386-20.339a2.731 2.731 0 011-2.75c.43-.354.852-.716 1.278-1.075a1.007 1.007 0 00.318-.1q8.458-6.535 16.908-13.078c10.837-8.381 21.338-17.2 32.653-24.959 2.95-2.023 5.817-4.168 8.734-6.24a27.81 27.81 0 0010.513-13.557c.561-1.577 1.258-3.1 1.861-4.665a356.3 356.3 0 0012.693-37.93l1.949-.05a18.557 18.557 0 01-1.153 4.833c-3.15 10.888-6.86 21.59-10.961 32.154-1.686 4.342-3.2 8.785-5.671 12.767-2.625 4.224-6.546 7.184-10.559 9.914-13.172 8.959-25.593 18.9-38.1 28.74-4.731 3.723-9.408 7.519-14.21 11.147-1.454 1.1-3.134 1.9-4.393 3.271-1.373.241-1.088 1.473-.9 2.122a17.2 17.2 0 01.243 4.814c.053 3.444.3 6.924-.326 10.319-1.722 9.3-7 16.347-14.219 22.2-3.17 2.569-6.322 5.169-9.58 7.615-3.7 2.776-7.437 5.551-11.917 7.039-1.033.343-2.008.61-2.938-.241-.95-.87-.69-1.878-.433-2.925a32.122 32.122 0 001.15-6.484 37.333 37.333 0 00-1.937-12.027 63.364 63.364 0 00-10.427-19.746 8.611 8.611 0 00-10.039-2.937 18.948 18.948 0 002.016.952c3.4 1.136 5.84 3.461 8.009 6.207a45.9 45.9 0 016.763 12.6 50.391 50.391 0 013.627 17.848c0 .785-.506 1.442-.274 2.264.932 3.3-.927 5.795-4.257 5.779-.278 0-.556.029-.834.044-.7-.736-1.963-.662-2.449-1.7a37.938 37.938 0 01-7.26-9.927.8.8 0 00-1.22-.4c-.659.346-1.513.435-1.9 1.218-1.116.018-1.864.833-2.754 1.316-2.195 1.19-4.3 2.546-6.519 3.691a5.547 5.547 0 01-7.731-2.109c-1.141-2-.655-3.989 1.949-5.534 2.642-1.567 5.407-2.934 8.158-4.309.458-.229.747-.651 1.227-.8 1.228-.606 2.447-1.236 3.691-1.81.675-.311 1.288-.766.92-1.5-.618-1.226-.67-2.747-1.844-3.675a.728.728 0 00-.635.08c-1.426.925-3.186 1.172-4.537 2.242-2.594 1.085-5.173 2.214-7.791 3.24-1.528.6-3.012 1.313-4.816.861a4.449 4.449 0 01-3.437-3.346c-.441-1.641.649-3.132 2.533-4.206a62.162 62.162 0 017.7-3.905 9.411 9.411 0 002.176-1.358c2.021-.2 3.619-1.515 5.494-2.112.562-.179.6-.763.482-1.285-.284-1.277-.584-2.551-.882-3.825a37.869 37.869 0 01-1.433-10.59c.029-.539-.12-1.1.37-1.558 1.244-1.152 2.372-2.451 3.715-3.468 2.041-1.546 4.225-2.9 6.348-4.34m-11.352 33.884c1.646-.725 3.3-1.434 4.929-2.192.263-.122.843-.126.562-.768-.5-1.149-.936-2.328-1.427-3.483-.133-.311-.187-.763-.8-.449-1.648.844-3.471 1.311-5.057 2.3a59.288 59.288 0 00-10.627 5.36 1.523 1.523 0 00-.595 2.177c.652 1 1.711 1.829 2.955 1.345a107.044 107.044 0 0010.062-4.289m4.889 8.129c-3.371 1.775-6.755 3.526-10.105 5.339a2.1 2.1 0 00-1.081 2.929 3.277 3.277 0 004.391 1.419c3.31-1.735 6.573-3.561 9.855-5.35.682-.351 1.354-.723 2.05-1.046.536-.249.812-.625.586-1.181-.554-1.365-1.157-2.711-1.741-4.064-1.078.519-2.157 1.035-3.234 1.559-.246.12-.481.263-.721.4m2.788-18.211c1.938 0 2.787.257 3.316 1.005a4.814 4.814 0 01-.754 5.919c-.71.571-1.924.924-2.029 1.728s.652 1.69 1.014 2.548a4.865 4.865 0 01.367 1.089c.111.7.351 1.012 1.1.632a8.646 8.646 0 014.258-.484 3.662 3.662 0 013.3 4.391c-.457 2.411-2.18 3.6-4.044 4.716-.506.3-.765.563-.442 1.189a32.05 32.05 0 007.513 9.84c1.688 1.445 3.2.821 3.863-1.3.8-2.569.07-5.113-.146-7.592a47.833 47.833 0 00-3.967-15.241c-2.148-4.843-4.456-9.621-8.386-13.39-2.271-2.177-5.457-2.606-7.915-4.4-.319-.232-.8-.633-1.215-.307-.437.344-.25.927-.15 1.4.419 1.983.864 3.96 1.3 5.94.5 2.3.5 2.3 3.024 2.3m6.444 14.06c-1.02.278-1.981.505-2.916.811a.584.584 0 00-.373.911c.542 1.2 1.024 2.423 1.5 3.65.2.509.429.724.959.4a8.654 8.654 0 002.667-2.193 2.418 2.418 0 00.06-2.513c-.356-.922-1.323-.635-1.894-1.07m-8.389-11.9c.3.828.554 1.67.9 2.475.876 2.059 1.271 2.091 2.654.274a1.222 1.222 0 00.1-.13 2.287 2.287 0 00.056-2.366 1.7 1.7 0 00-2.072-.609 12.99 12.99 0 01-1.64.356"
              data-name="Path 60671"
              transform="translate(-3242.205 -126.333)"
            />
          </G>
        </G>
      </Svg>
    </View>
  );
};