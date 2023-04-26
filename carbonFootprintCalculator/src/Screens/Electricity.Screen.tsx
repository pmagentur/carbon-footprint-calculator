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
import {RemoveItemFromStorage, STORAGE_KEYS, StoreData} from '../Storage';

export const ElectricityScreen = () => {
  return (
    <ScreenContainerComponent>
      <NavigationMenuComponent
      />
      <ImageContainer>
        <ElectricityImage />
      </ImageContainer>
      <HeaderContainer>
        <Header>Elektrizität</Header>
        <SubHeaderText>Welche Art von Strom verwendest du?</SubHeaderText>
      </HeaderContainer>
      <SelectButtonComponent
        text={'Strommix'}>
        <ElectricityMixIcon />
      </SelectButtonComponent>
      <SelectButtonComponent
        text={'Ökostrom'}>
        <ElectricityGreenIcon />
      </SelectButtonComponent>
    </ScreenContainerComponent>
  );
};
