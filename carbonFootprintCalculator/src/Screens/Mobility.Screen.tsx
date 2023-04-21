import * as React from 'react';
import {
  NavigationMenuComponent,
  ScreenContainerComponent,
  SelectButtonComponent,
} from '../Components';
import {MobilityImage} from '../Assets/Images';
import {
  Header,
  HeaderContainer,
  ImageContainer,
  SubHeaderText,
} from '../Assets/Style';
import {
  MobilityBikeIcon,
  MobilityCarIcon,
  MobilityOnFootIcon,
  MobilityPublicTransportIcon,
} from '../Assets/Icons';
import {SCREENS} from '../Constants';
import {STORAGE_KEYS, StoreData} from '../Storage';
import {STORAGE_VALUES_MOBILITY} from '../Storage/StorageValues.Enum';

export const MobilityScreen = () => {
  return (
    <ScreenContainerComponent>
      <NavigationMenuComponent
        forwardNavigation={SCREENS.TRAVEL_SCREEN}
        forwardHandler={() =>
          StoreData(STORAGE_KEYS.MOBILITY, STORAGE_VALUES_MOBILITY.NONE)
        }
      />
      <ImageContainer>
        <MobilityImage />
      </ImageContainer>
      <HeaderContainer>
        <Header>Mobilität</Header>
        <SubHeaderText>Wie bewegst du dich im Alltag fort?</SubHeaderText>
      </HeaderContainer>
      <SelectButtonComponent
        text={'Auto'}
        navScreen={SCREENS.TRAVEL_SCREEN}
        onClick={() =>
          StoreData(STORAGE_KEYS.MOBILITY, STORAGE_VALUES_MOBILITY.CAR)
        }>
        <MobilityCarIcon />
      </SelectButtonComponent>
      <SelectButtonComponent
        text={'Öffentliche Verkehrsmittel'}
        navScreen={SCREENS.TRAVEL_SCREEN}
        onClick={() =>
          StoreData(
            STORAGE_KEYS.MOBILITY,
            STORAGE_VALUES_MOBILITY.PUBLIC_TRANSPORT,
          )
        }>
        <MobilityPublicTransportIcon />
      </SelectButtonComponent>
      <SelectButtonComponent
        text={'Fahrrad'}
        navScreen={SCREENS.TRAVEL_SCREEN}
        onClick={() =>
          StoreData(STORAGE_KEYS.MOBILITY, STORAGE_VALUES_MOBILITY.BIKE)
        }>
        <MobilityBikeIcon />
      </SelectButtonComponent>
      <SelectButtonComponent
        text={'Zu Fuß'}
        navScreen={SCREENS.TRAVEL_SCREEN}
        onClick={() =>
          StoreData(STORAGE_KEYS.MOBILITY, STORAGE_VALUES_MOBILITY.FOOT)
        }>
        <MobilityOnFootIcon />
      </SelectButtonComponent>
    </ScreenContainerComponent>
  );
};
