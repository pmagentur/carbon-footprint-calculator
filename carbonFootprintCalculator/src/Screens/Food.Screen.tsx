import * as React from 'react';
import {
  NavigationMenuComponent,
  ScreenContainerComponent,
  SelectButtonComponent,
} from '../Components';
import {FoodImage} from '../Assets/Images';
import {
  Header,
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
        backwardNavigation={SCREENS.FLIGHT_HOUR_SCREEN}
        forwardNavigation={SCREENS.LIVING_SCREEN}
      />
      <ImageContainer>
        <FoodImage />
      </ImageContainer>
      <HeaderContainer>
        <Header>Ernährung</Header>
        <SubHeaderText>Wie ernährst du dich überwiegend?</SubHeaderText>
      </HeaderContainer>
      <SelectButtonComponent text={'Vegan'} navScreen={SCREENS.LIVING_SCREEN}>
        <FoodVeganIcon />
      </SelectButtonComponent>
      <SelectButtonComponent
        text={'Vegetarisch'}
        navScreen={SCREENS.LIVING_SCREEN}>
        <FoodVegetarianIcon />
      </SelectButtonComponent>
      <SelectButtonComponent
        text={'Mischkost'}
        navScreen={SCREENS.LIVING_SCREEN}>
        <FoodMixDietIcon />
      </SelectButtonComponent>
      <SelectButtonComponent
        text={'Fleischlastig'}
        navScreen={SCREENS.LIVING_SCREEN}>
        <FoodMeatCentricIcon />
      </SelectButtonComponent>
    </ScreenContainerComponent>
  );
};
