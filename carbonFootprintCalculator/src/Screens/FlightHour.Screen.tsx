import * as React from 'react';
import {
  NavigationMenuComponent,
  ScreenContainerComponent,
  SelectButtonComponent,
} from '../Components';
import {FlightHoursImage} from '../Assets/Images';
import {
  Header,
  HeaderContainer,
  ImageContainer,
  SubHeaderText,
} from '../Assets/Style';
import {
  FlightHoursFourToEightIcon,
  FlightHoursMoreThanEightIcon,
  FlightHoursTwoToFourIcon,
} from '../Assets/Icons';
import {SCREENS} from '../Constants';
import {FlightHoursLessThanTwoIcon} from '../Assets/Icons/FlightHours/FlightHoursLessThanTwo.Icon';
import {RemoveItem, STORAGE_KEYS, StoreData} from '../Storage';
import {STORAGE_VALUES_FLIGHT_HOURS} from '../Storage/StorageValues.Enum';

export const FlightHourScreen = () => {
  return (
    <ScreenContainerComponent>
      <NavigationMenuComponent
        backwardNavigation={SCREENS.TRAVEL_SCREEN}
        backwardHandler={() => RemoveItem(STORAGE_KEYS.TRAVEL)}
        forwardNavigation={SCREENS.FOOD_SCREEN}
        forwardHandler={() =>
          StoreData(STORAGE_KEYS.FLIGHT_HOURS, STORAGE_VALUES_FLIGHT_HOURS.NONE)
        }
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
        navScreen={SCREENS.FOOD_SCREEN}
        onClick={() =>
          StoreData(
            STORAGE_KEYS.FLIGHT_HOURS,
            STORAGE_VALUES_FLIGHT_HOURS.LESS_THAN_TWO,
          )
        }>
        <FlightHoursLessThanTwoIcon />
      </SelectButtonComponent>
      <SelectButtonComponent
        text={'2-4 Stunden'}
        navScreen={SCREENS.FOOD_SCREEN}
        onClick={() =>
          StoreData(
            STORAGE_KEYS.FLIGHT_HOURS,
            STORAGE_VALUES_FLIGHT_HOURS.TWO_TO_FOUR,
          )
        }>
        <FlightHoursTwoToFourIcon />
      </SelectButtonComponent>
      <SelectButtonComponent
        text={'4-8 Stunden'}
        navScreen={SCREENS.FOOD_SCREEN}
        onClick={() =>
          StoreData(
            STORAGE_KEYS.FLIGHT_HOURS,
            STORAGE_VALUES_FLIGHT_HOURS.FOUR_TO_EIGHT,
          )
        }>
        <FlightHoursFourToEightIcon />
      </SelectButtonComponent>
      <SelectButtonComponent
        text={'Mehr als 8 Stunden'}
        navScreen={SCREENS.FOOD_SCREEN}
        onClick={() =>
          StoreData(
            STORAGE_KEYS.FLIGHT_HOURS,
            STORAGE_VALUES_FLIGHT_HOURS.MORE_THAN_EIGHT,
          )
        }>
        <FlightHoursMoreThanEightIcon />
      </SelectButtonComponent>
    </ScreenContainerComponent>
  );
};
