import * as React from 'react';
import {NavigationMenuComponent, ScreenContainerComponent} from '../Components';
import {FoodImage} from '../Assets/Images';
import {
  Header,
  SelectButton,
  SelectButtonText,
  SubHeaderText,
  ImageContainer,
  HeaderContainer,
} from '../Assets/Style';
import {
  FoodMeatCentricIcon,
  FoodMixDietIcon,
  FoodVeganIcon,
  FoodVegetarianIcon,
} from '../Assets/Icons';
import {SCREENS} from '../Constants';

export const FoodScreen = () => {
  return (
    <ScreenContainerComponent>
      <NavigationMenuComponent
        BackwardScreen={SCREENS.FLIGHT_HOUR_SCREEN}
        ForwardScreen={SCREENS.LIVING_SCREEN}
      />
      <ImageContainer>
        <FoodImage />
      </ImageContainer>
      <HeaderContainer>
        <Header>Ernährung</Header>
        <SubHeaderText>Wie ernährst du dich überwiegend?</SubHeaderText>
      </HeaderContainer>
      <SelectButton>
        <FoodVeganIcon />
        <SelectButtonText>Vegan</SelectButtonText>
      </SelectButton>
      <SelectButton>
        <FoodVegetarianIcon />
        <SelectButtonText>Vegetarisch</SelectButtonText>
      </SelectButton>
      <SelectButton>
        <FoodMixDietIcon />
        <SelectButtonText>Mischkost</SelectButtonText>
      </SelectButton>
      <SelectButton>
        <FoodMeatCentricIcon />
        <SelectButtonText>Fleischlastig</SelectButtonText>
      </SelectButton>
    </ScreenContainerComponent>
  );
};
