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
import {RemoveItemFromStorage, STORAGE_KEYS, StoreData} from '../Storage';
import {STORAGE_VALUES_FLIGHT_HOURS} from '../Storage/StorageValues.Enum';

export const FlightHourScreen = () => {
  return (
    <ScreenContainerComponent>
      <NavigationMenuComponent
      />
      <ImageContainer>
        <FlightHoursImage />
      </ImageContainer>
      <HeaderContainer>
        <Header>Flugstunden</Header>
        <SubHeaderText>Wie viele Stunden bist du im Flugzeug?</SubHeaderText>
      </HeaderContainer>
      <SelectButtonComponent
        text={'Weniger als 2 Stunden'}>
        <FlightHoursLessThanTwoIcon />
      </SelectButtonComponent>
      <SelectButtonComponent
        text={'2-4 Stunden'}>
        <FlightHoursTwoToFourIcon />
      </SelectButtonComponent>
      <SelectButtonComponent
        text={'4-8 Stunden'}>
        <FlightHoursFourToEightIcon />
      </SelectButtonComponent>
      <SelectButtonComponent
        text={'Mehr als 8 Stunden'}>
        <FlightHoursMoreThanEightIcon />
      </SelectButtonComponent>
    </ScreenContainerComponent>
  );
};
