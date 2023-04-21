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

export const ResultImageContainer = styled(View)`
  height: 240.575px;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
  margin-bottom: 24px;
`;

export const ResultBackgroundImageContainer = styled(View)`
  position: absolute;
`;

export const NavigationContainer = styled(View)<{hasBackwardButton: boolean}>`
  display: flex;
  flex-direction: row;
  justify-content: ${props =>
    props.hasBackwardButton ? 'space-between' : 'flex-end'};
`;

export const HeaderContainer = styled(View)`
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

export const BarChartContainer = styled(View)`
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: 16px;
  margin-bottom: 16px;
`;

export const BarChartTextContainer = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-top: 2px;
`;
