import * as React from 'react';
import {ScreenContainer} from '../Components';
import {LivingImage} from '../Assets/Images';
import {
  Header,
  SelectButton,
  SelectButtonText,
  SubHeaderText,
} from '../Assets/Style';

export const LivingScreen = () => {
  return (
    <ScreenContainer>
      <LivingImage />
      <Header>Wohnen</Header>
      <SubHeaderText>
        Wie viele Personen leben in deinem Haushalt?
      </SubHeaderText>
      <SelectButton>
        <SelectButtonText>Nur ich</SelectButtonText>
      </SelectButton>
      <SelectButton>
        <SelectButtonText>2-4 Personen</SelectButtonText>
      </SelectButton>
      <SelectButton>
        <SelectButtonText>Mehr als 4 Personen</SelectButtonText>
      </SelectButton>
    </ScreenContainer>
  );
};
