import * as React from 'react';
import {
  NavigationMenuComponent,
  ScreenContainerComponent,
  SelectButtonComponent,
} from '../Components';
import {ElectricityImage} from '../Assets/Images';
import {
  Header,
  HeaderContainer,
  ImageContainer,
  SubHeaderText,
} from '../Assets/Style';
import {SCREENS} from '../Constants';
import {ElectricityGreenIcon, ElectricityMixIcon} from '../Assets/Icons';
import {STORAGE_VALUES_ELECTRICITY} from '../Storage/StorageValues.Enum';
import {RemoveItem, STORAGE_KEYS, StoreData} from '../Storage';

export const ElectricityScreen = () => {
  return (
    <ScreenContainerComponent>
      <NavigationMenuComponent
        backwardNavigation={SCREENS.LIVING_SCREEN}
        backwardHandler={() => RemoveItem(STORAGE_KEYS.LIVING)}
        forwardNavigation={SCREENS.RESULT_SCREEN}
        forwardHandler={() =>
          StoreData(STORAGE_KEYS.ELECTRICITY, STORAGE_VALUES_ELECTRICITY.NONE)
        }
      />
      <ImageContainer>
        <ElectricityImage />
      </ImageContainer>
      <HeaderContainer>
        <Header>Elektrizität</Header>
        <SubHeaderText>Welche Art von Strom verwendest du?</SubHeaderText>
      </HeaderContainer>
      <SelectButtonComponent
        text={'Strommix'}
        navScreen={SCREENS.RESULT_SCREEN}
        onClick={() =>
          StoreData(STORAGE_KEYS.ELECTRICITY, STORAGE_VALUES_ELECTRICITY.MIX)
        }>
        <ElectricityMixIcon />
      </SelectButtonComponent>
      <SelectButtonComponent
        text={'Ökostrom'}
        navScreen={SCREENS.RESULT_SCREEN}
        onClick={() =>
          StoreData(STORAGE_KEYS.ELECTRICITY, STORAGE_VALUES_ELECTRICITY.GREEN)
        }>
        <ElectricityGreenIcon />
      </SelectButtonComponent>
    </ScreenContainerComponent>
  );
};
