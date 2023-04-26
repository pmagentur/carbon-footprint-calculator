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
      />
      <ImageContainer>
        <MobilityImage />
      </ImageContainer>
      <HeaderContainer>
        <Header>Mobilität</Header>
        <SubHeaderText>Wie bewegst du dich im Alltag fort?</SubHeaderText>
      </HeaderContainer>
      <SelectButtonComponent
        text={'Auto'}>
        <MobilityCarIcon />
      </SelectButtonComponent>
      <SelectButtonComponent
        text={'Öffentliche Verkehrsmittel'}>
        <MobilityPublicTransportIcon />
      </SelectButtonComponent>
      <SelectButtonComponent
        text={'Fahrrad'}>
        <MobilityBikeIcon />
      </SelectButtonComponent>
      <SelectButtonComponent
        text={'Zu Fuß'}>
        <MobilityOnFootIcon />
      </SelectButtonComponent>
    </ScreenContainerComponent>
  );
};
