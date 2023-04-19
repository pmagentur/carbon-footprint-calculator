import styled from 'styled-components';
import {View} from 'react-native';

export const StartButtonContainer = styled(View)`
  margin-top: 241px;
  margin-bottom: 32px;
  display: flex;
  align-items: center;
`;

export const ImageContainer = styled(View)`
  margin-top: 24px;
  margin-bottom: 24px;
`;

export const NavigationContainer = styled(View)<{hasBackwardButton: boolean}>`
  display: flex;
  flex-direction: row;
  justify-content: ${props =>
    props.hasBackwardButton ? 'space-between' : 'flex-end'};
  margin-right: 24px;
  margin-left: 24px;
`;

export const HeaderContainer = styled(View)`
  margin-right: 24px;
  margin-left: 24px;
  margin-bottom: 40px;
`;

export const ForwardArrowIconContainer = styled(View)`
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 8px;
`;

export const BackwardArrowIconContainer = styled(View)`
  margin-top: auto;
  margin-bottom: auto;
  margin-right: 8px;
  transform: rotateY(180deg);
`;
