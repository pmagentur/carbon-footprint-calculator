import styled from 'styled-components';
import {BUTTON_BORDER_RADIUS, COLORS} from '../../Constants';
import {TouchableOpacity} from 'react-native';

export const StartButton = styled(TouchableOpacity)<{diameter: number}>`
  width: ${props => props.diameter}px;
  height: ${props => props.diameter}px;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: ${BUTTON_BORDER_RADIUS.Circle}px;
  background-color: ${COLORS.CFP_GREEN1};
`;

export const SelectButton = styled(TouchableOpacity)`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
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
    
`;
