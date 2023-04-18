import * as React from 'react';
import {ScreenContainer} from '../Components';
import {TravelImage} from '../Assets/Images';
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
  TravelEuropeIcon,
  TravelGermanyIcon,
  TravelTranscontinentalIcon,
} from '../Assets/Icons';
import {RootStackParamList} from '../Navigation';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {SCREENS} from '../Constants';

export const TravelScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <ScreenContainer>
      <NavigationContainer>
        <ForwardNavigationButton>
          <NavigationButtonText
            onPress={() => navigation.navigate(SCREENS.FLIGHT_HOUR_SCREEN)}>
            Überspringen
          </NavigationButtonText>
        </ForwardNavigationButton>
      </NavigationContainer>
      <ImageContainer>
        <TravelImage />
      </ImageContainer>
      <HeaderContainer>
        <Header>Reisen</Header>
        <SubHeaderText>Wo liegt dein nächstes Reiseziel?</SubHeaderText>
      </HeaderContainer>
      <SelectButton>
        <TravelGermanyIcon />
        <SelectButtonText>Deutschland</SelectButtonText>
      </SelectButton>
      <SelectButton>
        <TravelEuropeIcon />
        <SelectButtonText>Europa</SelectButtonText>
      </SelectButton>
      <SelectButton>
        <TravelTranscontinentalIcon />
        <SelectButtonText>Amerika, Australien, Asien, Afrika</SelectButtonText>
      </SelectButton>
    </ScreenContainer>
  );
};
