import * as React from 'react';
import {NavigationMenuComponent, ScreenContainerComponent} from '../Components';
import {ElectricityImage} from '../Assets/Images';
import {
  Header,
  HeaderContainer,
  ImageContainer,
  SelectButton,
  SelectButtonText,
  SubHeaderText,
} from '../Assets/Style';
import {SCREENS} from '../Constants';
import {
  ElectricityGreenIcon,
  ElectricityMixIcon,
  LivingMoreThanFourIcon,
} from '../Assets/Icons';

export const ElectricityScreen = () => {
  return (
    <ScreenContainerComponent>
      <NavigationMenuComponent
        BackwardScreen={SCREENS.LIVING_SCREEN}
        ForwardScreen={SCREENS.RESULT_SCREEN}
      />
      <ImageContainer>
        <ElectricityImage />
      </ImageContainer>
      <HeaderContainer>
        <Header>Elektrizität</Header>
        <SubHeaderText>Welche Art von Strom verwendest du?</SubHeaderText>
      </HeaderContainer>
      <SelectButton>
        <ElectricityMixIcon />
        <SelectButtonText>Strommix</SelectButtonText>
      </SelectButton>
      <SelectButton>
        <ElectricityGreenIcon />
        <SelectButtonText>Ökostrom</SelectButtonText>
      </SelectButton>
    </ScreenContainerComponent>
  );
};
