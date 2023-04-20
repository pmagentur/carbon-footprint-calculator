import * as React from 'react';
import {
  BarChartComponent,
  ScreenContainerComponent
} from "../Components";
import {ResultBackgroundImage} from '../Assets/Images';
import {
  ResultImageContainer,
  ResultBackgroundImageContainer,
  Header,
  SubHeaderText,
  RestartButton,
  RestartButtonText,
  ResultHeader,
  ResultSubHeaderText,
  BarChartHeader
} from "../Assets/Style";
import {RootStackParamList} from '../Navigation';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {
  COLORS,
  SCREENS
} from "../Constants";

export const ResultScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <ScreenContainerComponent>
      <ResultImageContainer>
        <ResultBackgroundImageContainer>
          <ResultBackgroundImage />
        </ResultBackgroundImageContainer>
        <ResultHeader>3,8</ResultHeader>
        <ResultSubHeaderText>Tonnen CO2</ResultSubHeaderText>
      </ResultImageContainer>
      <BarChartHeader>Im Vergleich</BarChartHeader>
      <BarChartComponent
        colorStart={COLORS.CFP_GREEN1}
        colorEnd={COLORS.CFP_GREEN2}
        description={'Du'}
        value={'3,8 Tonnen'}
      />
      <BarChartComponent
        colorStart={COLORS.CFP_ORANGE1}
        colorEnd={COLORS.CFP_ORANG2}
        description={'Durchschnitt Deutschland'}
        value={'12,3 Tonnen'}
      />
      <BarChartComponent
        colorStart={COLORS.CFP_RED1}
        colorEnd={COLORS.CFP_RED2}
        description={'Weltweiter Durchschnitt'}
        value={'4,5 Tonnen'}
      />
      <RestartButton onPress={() => navigation.navigate(SCREENS.START_SCREEN)}>
        <RestartButtonText>Nochmals berechnen</RestartButtonText>
      </RestartButton>
    </ScreenContainerComponent>
  );
};
