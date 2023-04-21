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
import {RemoveItem, STORAGE_KEYS, StoreData} from '../Storage';

export const FoodScreen = () => {
  return (
    <ScreenContainerComponent>
      <NavigationMenuComponent
        backwardNavigation={SCREENS.FLIGHT_HOUR_SCREEN}
        backwardHandler={() => RemoveItem(STORAGE_KEYS.FLIGHT_HOURS)}
        forwardNavigation={SCREENS.LIVING_SCREEN}
        forwardHandler={() =>
          StoreData(STORAGE_KEYS.FOOD, STORAGE_VALUES_FOOD.NONE)
        }
      />
      <ImageContainer>
        <FoodImage />
      </ImageContainer>
      <HeaderContainer>
        <Header>Ernährung</Header>
        <SubHeaderText>Wie ernährst du dich überwiegend?</SubHeaderText>
      </HeaderContainer>
      <SelectButtonComponent
        text={'Vegan'}
        navScreen={SCREENS.LIVING_SCREEN}
        onClick={() => StoreData(STORAGE_KEYS.FOOD, STORAGE_VALUES_FOOD.VEGAN)}>
        <FoodVeganIcon />
      </SelectButtonComponent>
      <SelectButtonComponent
        text={'Vegetarisch'}
        navScreen={SCREENS.LIVING_SCREEN}
        onClick={() =>
          StoreData(STORAGE_KEYS.FOOD, STORAGE_VALUES_FOOD.VEGETARIAN)
        }>
        <FoodVegetarianIcon />
      </SelectButtonComponent>
      <SelectButtonComponent
        text={'Mischkost'}
        navScreen={SCREENS.LIVING_SCREEN}
        onClick={() =>
          StoreData(STORAGE_KEYS.FOOD, STORAGE_VALUES_FOOD.MIX_DIET)
        }>
        <FoodMixDietIcon />
      </SelectButtonComponent>
      <SelectButtonComponent
        text={'Fleischlastig'}
        navScreen={SCREENS.LIVING_SCREEN}
        onClick={() =>
          StoreData(STORAGE_KEYS.FOOD, STORAGE_VALUES_FOOD.MEAT_CENTRIC)
        }>
        <FoodMeatCentricIcon />
      </SelectButtonComponent>
    </ScreenContainerComponent>
  );
};
