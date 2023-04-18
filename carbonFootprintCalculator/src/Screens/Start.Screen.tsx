import * as React from 'react';
import {ScreenContainer} from '../Components';
import {SCREENS} from '../Constants';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../Navigation';
import {
  StartHeader,
  StartButton,
  StartButtonContainer,
  StartButtonText,
} from '../Assets/Style';

const START_BUTTON_DIAMETER: number = 200;

export const StartScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <ScreenContainer>
      <StartButtonContainer>
        <StartButton
          diameter={START_BUTTON_DIAMETER}
          onPress={() => navigation.navigate(SCREENS.MOBILITY_SCREEN)}>
          <StartButtonText>Start</StartButtonText>
        </StartButton>
      </StartButtonContainer>
      <StartHeader>Berechne jetzt deinen CO2 Fußabdruck!</StartHeader>
    </ScreenContainer>
  );
};
