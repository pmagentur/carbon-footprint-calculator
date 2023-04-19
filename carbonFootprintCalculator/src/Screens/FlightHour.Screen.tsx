import * as React from 'react';
import {NavigationMenuComponent, ScreenContainerComponent} from '../Components';
import {FlightHoursImage} from '../Assets/Images';
import {
  Header,
  SelectButton,
  SelectButtonText,
  SubHeaderText,
  ImageContainer,
  HeaderContainer,
} from '../Assets/Style';
import {
  FlightHoursFourToEightIcon,
  FlightHoursMoreThanEightIcon,
  FlightHoursTwoToFourIcon,
} from '../Assets/Icons';
import {SCREENS} from '../Constants';
import {FlightHoursLessThanTwoIcon} from '../Assets/Icons/FlightHours/FlightHoursLessThanTwo.Icon';

export const FlightHourScreen = () => {
  return (
    <ScreenContainerComponent>
      <NavigationMenuComponent
        BackwardScreen={SCREENS.TRAVEL_SCREEN}
        ForwardScreen={SCREENS.FOOD_SCREEN}
      />
      <ImageContainer>
        <FlightHoursImage />
      </ImageContainer>
      <HeaderContainer>
        <Header>Flugstunden</Header>
        <SubHeaderText>Wie viele Stunden bist du im Flugzeug?</SubHeaderText>
      </HeaderContainer>
      <SelectButton>
        <FlightHoursLessThanTwoIcon />
        <SelectButtonText>Weniger als 2 Stunden</SelectButtonText>
      </SelectButton>
      <SelectButton>
        <FlightHoursTwoToFourIcon />
        <SelectButtonText>2-4 Stunden</SelectButtonText>
      </SelectButton>
      <SelectButton>
        <FlightHoursFourToEightIcon />
        <SelectButtonText>4-8 Stunden</SelectButtonText>
      </SelectButton>
      <SelectButton>
        <FlightHoursMoreThanEightIcon />
        <SelectButtonText>Mehr als 8 Stunden</SelectButtonText>
      </SelectButton>
    </ScreenContainerComponent>
  );
};
