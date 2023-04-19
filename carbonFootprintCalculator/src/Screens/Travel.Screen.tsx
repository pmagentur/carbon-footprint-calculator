import * as React from 'react';
import {NavigationMenuComponent, ScreenContainerComponent} from '../Components';
import {TravelImage} from '../Assets/Images';
import {
  Header,
  HeaderContainer,
  ImageContainer,
  SelectButton,
  SelectButtonText,
  SubHeaderText,
} from '../Assets/Style';
import {
  TravelEuropeIcon,
  TravelGermanyIcon,
  TravelTranscontinentalIcon,
} from '../Assets/Icons';
import {SCREENS} from '../Constants';

export const TravelScreen = () => {
  return (
    <ScreenContainerComponent>
      <NavigationMenuComponent
        BackwardScreen={SCREENS.MOBILITY_SCREEN}
        ForwardScreen={SCREENS.FLIGHT_HOUR_SCREEN}
      />
      <ImageContainer>
        <TravelImage />
      </ImageContainer>
      <HeaderContainer>
        <Header>Reisen</Header>
        <SubHeaderText>Wo liegt dein nächstes Reiseziel?</SubHeaderText>
      </HeaderContainer>
      <SelectButton>
        <TravelGermanyIcon />
        <SelectButtonText>Deutschland</SelectButtonText>
      </SelectButton>
      <SelectButton>
        <TravelEuropeIcon />
        <SelectButtonText>Europa</SelectButtonText>
      </SelectButton>
      <SelectButton>
        <TravelTranscontinentalIcon />
        <SelectButtonText>Amerika, Australien, Asien, Afrika</SelectButtonText>
      </SelectButton>
    </ScreenContainerComponent>
  );
};
