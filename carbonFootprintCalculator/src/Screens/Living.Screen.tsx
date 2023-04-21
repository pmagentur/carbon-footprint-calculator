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
        backwardNavigation={SCREENS.FOOD_SCREEN}
        backwardHandler={async () => RemoveItemFromStorage(STORAGE_KEYS.FOOD)}
        forwardNavigation={SCREENS.ELECTRICITY_SCREEN}
        forwardHandler={async () =>
          StoreData(STORAGE_KEYS.LIVING, STORAGE_VALUES_LIVING.NONE)
        }
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
        text={'Nur ich'}
        navScreen={SCREENS.ELECTRICITY_SCREEN}
        onClick={() =>
          StoreData(STORAGE_KEYS.LIVING, STORAGE_VALUES_LIVING.ONLY_ME)
        }>
        <LivingOnlyMeIcon />
      </SelectButtonComponent>
      <SelectButtonComponent
        text={'2-4 Personen'}
        navScreen={SCREENS.ELECTRICITY_SCREEN}
        onClick={() =>
          StoreData(STORAGE_KEYS.LIVING, STORAGE_VALUES_LIVING.TWO_TO_FOUR)
        }>
        <LivingTwoToFourIcon />
      </SelectButtonComponent>
      <SelectButtonComponent
        text={'Mehr als 4 Personen'}
        navScreen={SCREENS.ELECTRICITY_SCREEN}
        onClick={() =>
          StoreData(STORAGE_KEYS.LIVING, STORAGE_VALUES_LIVING.MORE_THAN_FOUR)
        }>
        <LivingMoreThanFourIcon />
      </SelectButtonComponent>
    </ScreenContainerComponent>
  );
};
