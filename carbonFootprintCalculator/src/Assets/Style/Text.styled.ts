import styled from 'styled-components';
import {Text} from 'react-native';
import {COLORS, FONTS, FONT_SIZES} from '../../Constants';

export const StartButtonText = styled(Text)`
  font-family: ${FONTS.REGULAR};
  color: ${COLORS.CFP_BLACK};
  font-size: ${FONT_SIZES.L}px;
`;

export const StartHeader = styled(Text)`
  font-family: ${FONTS.BOLD};
  color: ${COLORS.CFP_BLACK};
  font-size: ${FONT_SIZES.XL}px;
  text-align: center;
  margin-left: 24px;
  margin-right: 24px;
`;

export const Header = styled(Text)`
  font-family: ${FONTS.BOLD};
  color: ${COLORS.CFP_BLACK};
  font-size: ${FONT_SIZES.XL}px;
`;

export const SubHeaderText = styled(Text)`
  font-family: ${FONTS.REGULAR};
  color: ${COLORS.CFP_TEXT};
  font-size: ${FONT_SIZES.M}px;
`;

export const SelectButtonText = styled(Text)`
  font-family: ${FONTS.REGULAR};
  color: ${COLORS.CFP_BLACK};
  font-size: ${FONT_SIZES.ML}px;
  margin: auto 0 auto 4px;
`;

export const NavigationButtonText = styled(Text)`
  font-family: ${FONTS.REGULAR};
  color: ${COLORS.CFP_BLACK};
  font-size: ${FONT_SIZES.ML}px;
`;
