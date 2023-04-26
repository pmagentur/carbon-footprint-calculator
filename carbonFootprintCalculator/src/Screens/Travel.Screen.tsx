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
      />
      <ImageContainer>
        <TravelImage />
      </ImageContainer>
      <HeaderContainer>
        <Header>Reisen</Header>
        <SubHeaderText>Wo liegt dein nächstes Reiseziel?</SubHeaderText>
      </HeaderContainer>
      <SelectButtonComponent
        text={'Deutschland'}>
        <TravelGermanyIcon />
      </SelectButtonComponent>
      <SelectButtonComponent
        text={'Europa'}>
        <TravelEuropeIcon />
      </SelectButtonComponent>
      <SelectButtonComponent
        text={'Amerika, Australien, Asien, Afrika'}>
        <TravelTranscontinentalIcon />
      </SelectButtonComponent>
    </ScreenContainerComponent>
  );
};
