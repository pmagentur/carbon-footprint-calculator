import * as React from 'react';
import {
  NavigationMenuComponent,
  ScreenContainerComponent,
  SelectButtonComponent,
} from '../Components';
import {LivingImage} from '../Assets/Images';
import {
  Header,
  HeaderContainer,
  ImageContainer,
  SubHeaderText,
} from '../Assets/Style';
import {SCREENS} from '../Constants';
import {
  LivingMoreThanFourIcon,
  LivingOnlyMeIcon,
  LivingTwoToFourIcon,
} from '../Assets/Icons';

export const LivingScreen = () => {
  return (
    <ScreenContainerComponent>
      <NavigationMenuComponent
        backwardNavigation={SCREENS.FOOD_SCREEN}
        forwardNavigation={SCREENS.ELECTRICITY_SCREEN}
      />
      <ImageContainer>
        <LivingImage />
      </ImageContainer>
      <HeaderContainer>
        <Header>Wohnen</Header>
        <SubHeaderText>
          Wie viele Personen leben in deinem Haushalt?
        </SubHeaderText>
      </HeaderContainer>
      <SelectButtonComponent
        text={'Nur ich'}
        navScreen={SCREENS.ELECTRICITY_SCREEN}>
        <LivingOnlyMeIcon />
      </SelectButtonComponent>
      <SelectButtonComponent
        text={'2-4 Personen'}
        navScreen={SCREENS.ELECTRICITY_SCREEN}>
        <LivingTwoToFourIcon />
      </SelectButtonComponent>
      <SelectButtonComponent
        text={'Mehr als 4 Personen'}
        navScreen={SCREENS.ELECTRICITY_SCREEN}>
        <LivingMoreThanFourIcon />
      </SelectButtonComponent>
    </ScreenContainerComponent>
  );
};
