import * as React from 'react';
import {NavigationMenuComponent, ScreenContainerComponent} from '../Components';
import {MobilityImage} from '../Assets/Images';
import {
  Header,
  HeaderContainer,
  ImageContainer,
  SubHeaderText,
} from '../Assets/Style';
import {
  MobilityBikeIcon,
  MobilityCarIcon,
  MobilityOnFootIcon,
  MobilityPublicTransportIcon,
} from '../Assets/Icons';
import {SCREENS} from '../Constants';
import {SelectButtonComponent} from '../Components';

export const MobilityScreen = () => {
  return (
    <ScreenContainerComponent>
      <NavigationMenuComponent forwardNavigation={SCREENS.TRAVEL_SCREEN} />
      <ImageContainer>
        <MobilityImage />
      </ImageContainer>
      <HeaderContainer>
        <Header>Mobilität</Header>
        <SubHeaderText>Wie bewegst du dich im Alltag fort?</SubHeaderText>
      </HeaderContainer>
      <SelectButtonComponent text={'Auto'} navScreen={SCREENS.TRAVEL_SCREEN}>
        <MobilityCarIcon />
      </SelectButtonComponent>
      <SelectButtonComponent
        text={'Öffentliche Verkehrsmittel'}
        navScreen={SCREENS.TRAVEL_SCREEN}>
        <MobilityPublicTransportIcon />
      </SelectButtonComponent>
      <SelectButtonComponent text={'Fahrrad'} navScreen={SCREENS.TRAVEL_SCREEN}>
        <MobilityBikeIcon />
      </SelectButtonComponent>
      <SelectButtonComponent text={'Zu Fuß'} navScreen={SCREENS.TRAVEL_SCREEN}>
        <MobilityOnFootIcon />
      </SelectButtonComponent>
    </ScreenContainerComponent>
  );
};
