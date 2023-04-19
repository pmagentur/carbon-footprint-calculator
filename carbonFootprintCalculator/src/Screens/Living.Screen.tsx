import * as React from 'react';
import {NavigationMenuComponent, ScreenContainerComponent} from '../Components';
import {LivingImage} from '../Assets/Images';
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
  LivingMoreThanFourIcon,
  LivingOnlyMeIcon,
  LivingTwoToFourIcon,
} from '../Assets/Icons';

export const LivingScreen = () => {
  return (
    <ScreenContainerComponent>
      <NavigationMenuComponent
        BackwardScreen={SCREENS.FOOD_SCREEN}
        ForwardScreen={SCREENS.ELECTRICITY_SCREEN}
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
      <SelectButton>
        <LivingOnlyMeIcon />
        <SelectButtonText>Nur ich</SelectButtonText>
      </SelectButton>
      <SelectButton>
        <LivingTwoToFourIcon />
        <SelectButtonText>2-4 Personen</SelectButtonText>
      </SelectButton>
      <SelectButton>
        <LivingMoreThanFourIcon />
        <SelectButtonText>Mehr als 4 Personen</SelectButtonText>
      </SelectButton>
    </ScreenContainerComponent>
  );
};
