import * as React from 'react';
import {NavigationMenuComponent, ScreenContainerComponent, SelectButtonComponent} from '../Components';
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
        backwardNavigation={SCREENS.TRAVEL_SCREEN}
        forwardNavigation={SCREENS.FOOD_SCREEN}
      />
      <ImageContainer>
        <FlightHoursImage />
      </ImageContainer>
      <HeaderContainer>
        <Header>Flugstunden</Header>
        <SubHeaderText>Wie viele Stunden bist du im Flugzeug?</SubHeaderText>
      </HeaderContainer>
      <SelectButtonComponent
        text={'Weniger als 2 Stunden'}
        navScreen={SCREENS.FOOD_SCREEN}>
        <FlightHoursLessThanTwoIcon />
      </SelectButtonComponent>
      <SelectButtonComponent
        text={'2-4 Stunden'}
        navScreen={SCREENS.FOOD_SCREEN}>
        <FlightHoursTwoToFourIcon />
      </SelectButtonComponent>
      <SelectButtonComponent
        text={'4-8 Stunden'}
        navScreen={SCREENS.FOOD_SCREEN}>
        <FlightHoursFourToEightIcon />
      </SelectButtonComponent>
      <SelectButtonComponent
        text={'Mehr als 8 Stunden'}
        navScreen={SCREENS.FOOD_SCREEN}>
        <FlightHoursMoreThanEightIcon />
      </SelectButtonComponent>
    </ScreenContainerComponent>
  );
};
