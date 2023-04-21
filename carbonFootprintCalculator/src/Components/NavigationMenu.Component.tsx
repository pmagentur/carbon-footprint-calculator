import * as React from 'react';
import {SCREENS} from '../Constants';
import {
  BackwardArrowIconContainer,
  BackwardNavigationButton,
  ForwardArrowIconContainer,
  ForwardNavigationButton,
  NavigationButtonText,
  NavigationContainer,
} from '../Assets/Style';
import {ArrowIcon} from '../Assets/Icons';
import {RootStackParamList} from '../Navigation';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type NavigationMenuProps = {
  backwardNavigation?: SCREENS;
  forwardNavigation?: SCREENS;
  backwardHandler?: () => void;
  forwardHandler?: () => void;
  backwardText?: string;
  forwardText?: string;
};
export const NavigationMenuComponent = ({
  backwardNavigation = SCREENS.NONE,
  forwardNavigation = SCREENS.START_SCREEN,
  backwardHandler = () => {},
  forwardHandler = () => {},
  backwardText = 'Zurück',
  forwardText = 'Überspringen',
}: NavigationMenuProps) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const hasBackwardButton = backwardNavigation !== SCREENS.NONE;

  return (
    <NavigationContainer hasBackwardButton={hasBackwardButton}>
      {hasBackwardButton && (
        <BackwardNavigationButton
          onPress={() => {
            backwardHandler();
            navigation.navigate(backwardNavigation ?? SCREENS.START_SCREEN);
          }}>
          <BackwardArrowIconContainer>
            <ArrowIcon />
          </BackwardArrowIconContainer>
          <NavigationButtonText>{backwardText}</NavigationButtonText>
        </BackwardNavigationButton>
      )}
      <ForwardNavigationButton
        onPress={() => {
          forwardHandler();
          navigation.navigate(forwardNavigation);
        }}>
        <NavigationButtonText>{forwardText}</NavigationButtonText>
        <ForwardArrowIconContainer>
          <ArrowIcon />
        </ForwardArrowIconContainer>
      </ForwardNavigationButton>
    </NavigationContainer>
  );
};
