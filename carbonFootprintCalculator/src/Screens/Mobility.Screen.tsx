import * as React from 'react';
import {ScreenContainer} from '../Components';
import {MobilityImage} from '../Assets/Images';
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
  MobilityBikeIcon,
  MobilityCarIcon,
  MobilityOnFootIcon,
  MobilityPublicTransportIcon,
} from '../Assets/Icons';
import {RootStackParamList} from '../Navigation';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {SCREENS} from '../Constants';

export const MobilityScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <ScreenContainer>
      <NavigationContainer>
        <ForwardNavigationButton>
          <NavigationButtonText
            onPress={() => navigation.navigate(SCREENS.TRAVEL_SCREEN)}>
            Überspringen
          </NavigationButtonText>
        </ForwardNavigationButton>
      </NavigationContainer>
      <ImageContainer>
        <MobilityImage />
      </ImageContainer>
      <HeaderContainer>
        <Header>Mobilität</Header>
        <SubHeaderText>Wie bewegst du dich im Alltag fort?</SubHeaderText>
      </HeaderContainer>
      <SelectButton>
        <MobilityCarIcon />
        <SelectButtonText>Auto</SelectButtonText>
      </SelectButton>
      <SelectButton>
        <MobilityPublicTransportIcon />
        <SelectButtonText>Öffentliche Verkehrsmittel</SelectButtonText>
      </SelectButton>
      <SelectButton>
        <MobilityBikeIcon />
        <SelectButtonText>Fahrrad</SelectButtonText>
      </SelectButton>
      <SelectButton>
        <MobilityOnFootIcon />
        <SelectButtonText>Zu Fuß</SelectButtonText>
      </SelectButton>
    </ScreenContainer>
  );
};
