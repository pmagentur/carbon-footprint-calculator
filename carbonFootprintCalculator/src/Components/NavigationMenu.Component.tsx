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
  BackwardScreen: SCREENS;
  ForwardScreen: SCREENS;
};
export const NavigationMenuComponent = ({
  BackwardScreen = SCREENS.NONE,
  ForwardScreen,
}: NavigationMenuProps) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const hasBackwardButton = BackwardScreen !== SCREENS.NONE;

  return (
    <NavigationContainer hasBackwardButton={hasBackwardButton}>
      {hasBackwardButton && (
        <BackwardNavigationButton
          onPress={() =>
            navigation.navigate(BackwardScreen ?? SCREENS.START_SCREEN)
          }>
          <BackwardArrowIconContainer>
            <ArrowIcon />
          </BackwardArrowIconContainer>
          <NavigationButtonText>Zurück</NavigationButtonText>
        </BackwardNavigationButton>
      )}
      <ForwardNavigationButton
        onPress={() => navigation.navigate(ForwardScreen)}>
        <NavigationButtonText>Überspringen</NavigationButtonText>
        <ForwardArrowIconContainer>
          <ArrowIcon />
        </ForwardArrowIconContainer>
      </ForwardNavigationButton>
    </NavigationContainer>
  );
};
