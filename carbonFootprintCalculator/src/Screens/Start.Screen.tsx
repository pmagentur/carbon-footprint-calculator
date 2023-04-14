import * as React from 'react';
import {ScreenContainer} from '../Components';
import {Text, TouchableOpacity, View} from 'react-native';
import styled from 'styled-components';
import {COLORS, FONTS, FONT_SIZES, SCREENS} from '../Constants';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../Navigation';

const CIRCLE_DIAMETER: number = 200;

export const StartScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <ScreenContainer>
      <StartButtonContainer>
        <StartButton
          onPress={() => navigation.navigate(SCREENS.MOBILITY_SCREEN)}>
          <StartButtonText>Start</StartButtonText>
        </StartButton>
      </StartButtonContainer>
      <Header>Berechne jetzt deinen CO2 Fußabdruck!</Header>
    </ScreenContainer>
  );
};

const StartButtonContainer = styled(View)`
  margin-top: 241px;
  margin-bottom: 32px;
  display: flex;
  align-items: center;
`;

const StartButton = styled(TouchableOpacity)`
  width: ${CIRCLE_DIAMETER}px;
  height: ${CIRCLE_DIAMETER}px;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 100px;
  background-color: ${COLORS.CFP_GREEN1};
`;

const StartButtonText = styled(Text)`
  font-family: ${FONTS.REGULAR};
  color: ${COLORS.CFP_BLACK};
  font-size: ${FONT_SIZES.L}px;
`;

const Header = styled(Text)`
  font-family: ${FONTS.BOLD};
  color: ${COLORS.CFP_BLACK};
  font-size: ${FONT_SIZES.XL}px;
  text-align: center;
  margin-left: 10px;
  margin-right: 10px;
`;
