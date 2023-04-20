import * as React from 'react';
import {
  NavigationMenuComponent,
  ScreenContainerComponent,
  SelectButtonComponent,
} from '../Components';
import {ElectricityImage} from '../Assets/Images';
import {
  Header,
  HeaderContainer,
  ImageContainer,
  SubHeaderText,
} from '../Assets/Style';
import {SCREENS} from '../Constants';
import {ElectricityGreenIcon, ElectricityMixIcon} from '../Assets/Icons';

export const ElectricityScreen = () => {
  return (
    <ScreenContainerComponent>
      <NavigationMenuComponent
        backwardNavigation={SCREENS.LIVING_SCREEN}
        forwardNavigation={SCREENS.RESULT_SCREEN}
      />
      <ImageContainer>
        <ElectricityImage />
      </ImageContainer>
      <HeaderContainer>
        <Header>Elektrizität</Header>
        <SubHeaderText>Welche Art von Strom verwendest du?</SubHeaderText>
      </HeaderContainer>
      <SelectButtonComponent
        text={'Strommix'}
        navScreen={SCREENS.RESULT_SCREEN}>
        <ElectricityMixIcon />
      </SelectButtonComponent>
      <SelectButtonComponent
        text={'Ökostrom'}
        navScreen={SCREENS.RESULT_SCREEN}>
        <ElectricityGreenIcon />
      </SelectButtonComponent>
    </ScreenContainerComponent>
  );
};
