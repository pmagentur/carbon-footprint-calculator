import * as React from 'react';
import {NavigationMenuComponent, ScreenContainerComponent} from '../Components';
import {TravelImage} from '../Assets/Images';
import {
  Header,
  HeaderContainer,
  ImageContainer,
  SubHeaderText,
} from '../Assets/Style';
import {
  TravelEuropeIcon,
  TravelGermanyIcon,
  TravelTranscontinentalIcon,
} from '../Assets/Icons';
import {SCREENS} from '../Constants';
import {SelectButtonComponent} from '../Components';

export const TravelScreen = () => {
  return (
    <ScreenContainerComponent>
      <NavigationMenuComponent
        backwardNavigation={SCREENS.MOBILITY_SCREEN}
        forwardNavigation={SCREENS.FLIGHT_HOUR_SCREEN}
      />
      <ImageContainer>
        <TravelImage />
      </ImageContainer>
      <HeaderContainer>
        <Header>Reisen</Header>
        <SubHeaderText>Wo liegt dein nächstes Reiseziel?</SubHeaderText>
      </HeaderContainer>
      <SelectButtonComponent
        text={'Deutschland'}
        navScreen={SCREENS.FLIGHT_HOUR_SCREEN}>
        <TravelGermanyIcon />
      </SelectButtonComponent>
      <SelectButtonComponent text={'Europa'} navScreen={SCREENS.FLIGHT_HOUR_SCREEN}>
        <TravelEuropeIcon />
      </SelectButtonComponent>
      <SelectButtonComponent
        text={'Amerika, Australien, Asien, Afrika'}
        navScreen={SCREENS.FLIGHT_HOUR_SCREEN}>
        <TravelTranscontinentalIcon />
      </SelectButtonComponent>
    </ScreenContainerComponent>
  );
};
