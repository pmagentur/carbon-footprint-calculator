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
`;

export const Header = styled(Text)`
  font-family: ${FONTS.BOLD};
  color: ${COLORS.CFP_BLACK};
  font-size: ${FONT_SIZES.XL}px;
`;

export const ResultHeader = styled(Text)`
  font-family: ${FONTS.BOLD};
  color: ${COLORS.CFP_BLACK};
  font-size: ${FONT_SIZES.XXL}px;
`;

export const SubHeaderText = styled(Text)`
  font-family: ${FONTS.REGULAR};
  color: ${COLORS.CFP_TEXT};
  font-size: ${FONT_SIZES.XS}px;
`;

export const ResultSubHeaderText = styled(Text)`
  font-family: ${FONTS.REGULAR};
  color: ${COLORS.CFP_TEXT};
  font-size: ${FONT_SIZES.XS}px;
`;

export const BarChartHeader = styled(Text)`
  font-family: ${FONTS.BOLD};
  color: ${COLORS.CFP_TEXT};
  font-size: ${FONT_SIZES.M}px;
`;

export const SelectButtonText = styled(Text)`
  font-family: ${FONTS.REGULAR};
  color: ${COLORS.CFP_BLACK};
  font-size: ${FONT_SIZES.S}px;
  margin: auto 0 auto 4px;
`;

export const NavigationButtonText = styled(Text)`
  font-family: ${FONTS.REGULAR};
  color: ${COLORS.CFP_BLACK};
  font-size: ${FONT_SIZES.S}px;
  margin: auto 0 auto 0;
`;

export const RestartButtonText = styled(Text)`
  font-family: ${FONTS.REGULAR};
  color: ${COLORS.CFP_BLACK};
  font-size: ${FONT_SIZES.S}px;
  margin: auto;
`;

export const BarChartText = styled(Text)`
  font-family: ${FONTS.REGULAR};
  color: ${COLORS.CFP_TEXT};
  font-size: ${FONT_SIZES.XS}px;
`;
