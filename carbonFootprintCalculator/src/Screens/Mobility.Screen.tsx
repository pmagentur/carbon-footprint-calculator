import * as React from 'react';
import {NavigationMenuComponent, ScreenContainerComponent} from '../Components';
import {MobilityImage} from '../Assets/Images';
import {
  Header,
  SelectButton,
  SelectButtonText,
  SubHeaderText,
  ImageContainer,
  HeaderContainer,
} from '../Assets/Style';
import {
  MobilityBikeIcon,
  MobilityCarIcon,
  MobilityOnFootIcon,
  MobilityPublicTransportIcon,
} from '../Assets/Icons';
import {SCREENS} from '../Constants';

export const MobilityScreen = () => {
  return (
    <ScreenContainerComponent>
      <NavigationMenuComponent ForwardScreen={SCREENS.TRAVEL_SCREEN} />
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
    </ScreenContainerComponent>
  );
};
