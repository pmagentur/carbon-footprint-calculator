import * as React from 'react';
import {
  NavigationMenuComponent,
  ScreenContainerComponent,
  SelectButtonComponent,
} from '../Components';
import {FoodImage} from '../Assets/Images';
import {
  Header,
  HeaderContainer,
  ImageContainer,
  SubHeaderText,
} from '../Assets/Style';
import {
  FoodMeatCentricIcon,
  FoodMixDietIcon,
  FoodVeganIcon,
  FoodVegetarianIcon,
} from '../Assets/Icons';
import {SCREENS} from '../Constants';
import {STORAGE_VALUES_FOOD} from '../Storage/StorageValues.Enum';
import {RemoveItemFromStorage, STORAGE_KEYS, StoreData} from '../Storage';

export const FoodScreen = () => {
  return (
    <ScreenContainerComponent>
      <NavigationMenuComponent
      />
      <ImageContainer>
        <FoodImage />
      </ImageContainer>
      <HeaderContainer>
        <Header>Ernährung</Header>
        <SubHeaderText>Wie ernährst du dich überwiegend?</SubHeaderText>
      </HeaderContainer>
      <SelectButtonComponent
        text={'Vegan'}>
        <FoodVeganIcon />
      </SelectButtonComponent>
      <SelectButtonComponent
        text={'Vegetarisch'}>
        <FoodVegetarianIcon />
      </SelectButtonComponent>
      <SelectButtonComponent
        text={'Mischkost'}>
        <FoodMixDietIcon />
      </SelectButtonComponent>
      <SelectButtonComponent
        text={'Fleischlastig'}>
        <FoodMeatCentricIcon />
      </SelectButtonComponent>
    </ScreenContainerComponent>
  );
};
