import * as React from 'react';
import {ScreenContainer} from '../Components';
import {FlightHoursImage} from '../Assets/Images';
import {
  Header,
  ForwardNavigationButton,
  NavigationButtonText,
  SelectButton,
  SelectButtonText,
  SubHeaderText,
  NavigationContainer,
  ImageContainer,
  HeaderContainer,
} from '../Assets/Style';
import {
  FlightHoursFourToEightIcon,
  FlightHoursLessThanTwoIcon,
  FlightHoursMoreThanEightIcon,
  FlightHoursTwoToFourIcon,
} from '../Assets/Icons';
import {RootStackParamList} from '../Navigation';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {SCREENS} from '../Constants';

export const FlightHourScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <ScreenContainer>
      <NavigationContainer>
        <ForwardNavigationButton>
          <NavigationButtonText
            onPress={() => navigation.navigate(SCREENS.FOOD_SCREEN)}>
            Überspringen
          </NavigationButtonText>
        </ForwardNavigationButton>
      </NavigationContainer>
      <ImageContainer>
        <FlightHoursImage />
      </ImageContainer>
      <HeaderContainer>
        <Header>Flugstunden</Header>
        <SubHeaderText>Wie viele Stunden bist du im Flugzeug?</SubHeaderText>
      </HeaderContainer>
      <SelectButton>
        <FlightHoursLessThanTwoIcon />
        <SelectButtonText>Weniger als 2 Stunden</SelectButtonText>
      </SelectButton>
      <SelectButton>
        <FlightHoursTwoToFourIcon />
        <SelectButtonText>2-4 Stunden</SelectButtonText>
      </SelectButton>
      <SelectButton>
        <FlightHoursFourToEightIcon />
        <SelectButtonText>4-8 Stunden</SelectButtonText>
      </SelectButton>
      <SelectButton>
        <FlightHoursMoreThanEightIcon />
        <SelectButtonText>Mehr als 8 Stunden</SelectButtonText>
      </SelectButton>
    </ScreenContainer>
  );
};

