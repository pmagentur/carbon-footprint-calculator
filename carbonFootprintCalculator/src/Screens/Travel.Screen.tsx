import * as React from 'react';
import {
  NavigationMenuComponent,
  ScreenContainerComponent,
  SelectButtonComponent,
} from '../Components';
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
import {STORAGE_VALUES_TRAVEL} from '../Storage/StorageValues.Enum';
import {RemoveItemFromStorage, STORAGE_KEYS, StoreData} from '../Storage';

export const TravelScreen = () => {
  return (
    <ScreenContainerComponent>
      <NavigationMenuComponent
        backwardNavigation={SCREENS.MOBILITY_SCREEN}
        backwardHandler={async () =>
          RemoveItemFromStorage(STORAGE_KEYS.MOBILITY)
        }
        forwardNavigation={SCREENS.FLIGHT_HOUR_SCREEN}
        forwardHandler={async () =>
          StoreData(STORAGE_KEYS.TRAVEL, STORAGE_VALUES_TRAVEL.NONE)
        }
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
        navScreen={SCREENS.FLIGHT_HOUR_SCREEN}
        onClick={() =>
          StoreData(STORAGE_KEYS.TRAVEL, STORAGE_VALUES_TRAVEL.GERMANY)
        }>
        <TravelGermanyIcon />
      </SelectButtonComponent>
      <SelectButtonComponent
        text={'Europa'}
        navScreen={SCREENS.FLIGHT_HOUR_SCREEN}
        onClick={() =>
          StoreData(STORAGE_KEYS.TRAVEL, STORAGE_VALUES_TRAVEL.EUROPE)
        }>
        <TravelEuropeIcon />
      </SelectButtonComponent>
      <SelectButtonComponent
        text={'Amerika, Australien, Asien, Afrika'}
        navScreen={SCREENS.FLIGHT_HOUR_SCREEN}
        onClick={() =>
          StoreData(STORAGE_KEYS.TRAVEL, STORAGE_VALUES_TRAVEL.TRANSCONTINENTAL)
        }>
        <TravelTranscontinentalIcon />
      </SelectButtonComponent>
    </ScreenContainerComponent>
  );
};
