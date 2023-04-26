import styled from 'styled-components';
import {BUTTON_BORDER_RADIUS, COLORS} from '../../Constants';
import {TouchableOpacity} from 'react-native';

export const SelectButton = styled(TouchableOpacity)`
`;


























export const StartButton = styled(TouchableOpacity)<{diameter: number}>`
  width: ${props => props.diameter}px;
  height: ${props => props.diameter}px;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: ${BUTTON_BORDER_RADIUS.Circle}px;
  background-color: ${COLORS.CFP_GREEN1};
`;

export const ForwardNavigationButton = styled(TouchableOpacity)`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const BackwardNavigationButton = styled(TouchableOpacity)`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

export const RestartButton = styled(TouchableOpacity)`
  border-radius: ${BUTTON_BORDER_RADIUS.Button}px;
  border-width: 1px;
  border-style: solid;
  border-color: ${COLORS.CFP_GREEN3};
  height: 56px;
  margin-top: 100px;
`;
