import * as React from 'react';
import {ScreenContainer} from '../Components';
import {FoodImage} from '../Assets/Images';
import { SelectButton,
  SelectButtonText, SubHeaderText } from '../Assets/Style';
import { Header } from '../Assets/Style';

export const FoodScreen = () => {
  return (
    <ScreenContainer>
      <FoodImage />
      <Header>Ernährung</Header>
      <SubHeaderText>Wie ernährst du dich überwiegend?</SubHeaderText>
      <SelectButton>
        <SelectButtonText>Vegan</SelectButtonText>
      </SelectButton>
      <SelectButton>
        <SelectButtonText>Vegetarisch</SelectButtonText>
      </SelectButton>
      <SelectButton>
        <SelectButtonText>Mischkost</SelectButtonText>
      </SelectButton>
      <SelectButton>
        <SelectButtonText>Fleischlastig</SelectButtonText>
      </SelectButton>
    </ScreenContainer>
  );
};
