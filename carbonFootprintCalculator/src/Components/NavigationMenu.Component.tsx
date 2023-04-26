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
  backwardHandler?: () => Promise<void>;
  forwardHandler?: () => Promise<void>;
  backwardText?: string;
  forwardText?: string;
};
export const NavigationMenuComponent = ({
  backwardNavigation = SCREENS.NONE,
  forwardNavigation = SCREENS.NONE,
  backwardHandler = async () => {},
  forwardHandler = async () => {},
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
            backwardHandler().then(() => {
              navigation.navigate(backwardNavigation ?? SCREENS.START_SCREEN);
            });
          }}>
          <BackwardArrowIconContainer>
            <ArrowIcon />
          </BackwardArrowIconContainer>
          <NavigationButtonText>{backwardText}</NavigationButtonText>
        </BackwardNavigationButton>
      )}
      <ForwardNavigationButton
        onPress={() => {
          forwardHandler().then(() => {
            navigation.navigate(forwardNavigation);
          });
        }}>
        <NavigationButtonText>{forwardText}</NavigationButtonText>
        <ForwardArrowIconContainer>
          <ArrowIcon />
        </ForwardArrowIconContainer>
      </ForwardNavigationButton>
    </NavigationContainer>
  );
};
