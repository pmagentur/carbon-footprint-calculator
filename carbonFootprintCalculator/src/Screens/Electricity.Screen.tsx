import * as React from 'react';
import {ScreenContainer} from '../Components';
import {ElectricityImage} from '../Assets/Images';
import {
  Header,
  SelectButton,
  SelectButtonText,
  SubHeaderText,
} from '../Assets/Style';

export const ElectricityScreen = () => {
  return (
    <ScreenContainer>
      <ElectricityImage />
      <Header>Elektrizität</Header>
      <SubHeaderText>Welche Art von Strom verwendest du?</SubHeaderText>
      <SelectButton>
        <SelectButtonText>Strommix</SelectButtonText>
      </SelectButton>
      <SelectButton>
        <SelectButtonText>Ökostrom</SelectButtonText>
      </SelectButton>
    </ScreenContainer>
  );
};
