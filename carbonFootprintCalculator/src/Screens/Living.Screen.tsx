import * as React from 'react';
import {
  NavigationMenuComponent,
  ScreenContainerComponent,
  SelectButtonComponent,
} from '../Components';
import {LivingImage} from '../Assets/Images';
import {
  Header,
  HeaderContainer,
  ImageContainer,
  SubHeaderText,
} from '../Assets/Style';
import {SCREENS} from '../Constants';
import {
  LivingMoreThanFourIcon,
  LivingOnlyMeIcon,
  LivingTwoToFourIcon,
} from '../Assets/Icons';
import {STORAGE_VALUES_LIVING} from '../Storage/StorageValues.Enum';
import {RemoveItemFromStorage, STORAGE_KEYS, StoreData} from '../Storage';

export const LivingScreen = () => {
  return (
    <ScreenContainerComponent>
      <NavigationMenuComponent
      />
      <ImageContainer>
        <LivingImage />
      </ImageContainer>
      <HeaderContainer>
        <Header>Wohnen</Header>
        <SubHeaderText>
          Wie viele Personen leben in deinem Haushalt?
        </SubHeaderText>
      </HeaderContainer>
      <SelectButtonComponent
        text={'Nur ich'}>
        <LivingOnlyMeIcon />
      </SelectButtonComponent>
      <SelectButtonComponent
        text={'2-4 Personen'}>
        <LivingTwoToFourIcon />
      </SelectButtonComponent>
      <SelectButtonComponent
        text={'Mehr als 4 Personen'}>
        <LivingMoreThanFourIcon />
      </SelectButtonComponent>
    </ScreenContainerComponent>
  );
};
