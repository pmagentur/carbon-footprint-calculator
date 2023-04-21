import * as React from 'react';
import {useState} from 'react';
import {BarChartComponent, ScreenContainerComponent} from '../Components';
import {ResultBackgroundImage} from '../Assets/Images';
import {
  BarChartHeader,
  RestartButton,
  RestartButtonText,
  ResultBackgroundImageContainer,
  ResultHeader,
  ResultImageContainer,
  ResultSubHeaderText,
} from '../Assets/Style';
import {RootStackParamList} from '../Navigation';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {COLORS, SCREENS} from '../Constants';
import {
  ClearStorage,
  RetrieveAllC02Data,
  STORAGE_KEYS,
  StorageKeyResult,
} from '../Storage';
import {
  STORAGE_VALUES_ELECTRICITY,
  STORAGE_VALUES_FLIGHT_HOURS,
  STORAGE_VALUES_FOOD,
  STORAGE_VALUES_LIVING,
  STORAGE_VALUES_MOBILITY,
  STORAGE_VALUES_TRAVEL,
} from '../Storage/StorageValues.Enum';

export const ResultScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [result, setResult] = useState<number>(0);
  const [resultData, setResultData] = useState<StorageKeyResult>();

  const calcMobilityResult = (
    mobilityInput: STORAGE_VALUES_MOBILITY | null,
  ): number => {
    switch (mobilityInput) {
      case STORAGE_VALUES_MOBILITY.CAR:
        return 4;
      case STORAGE_VALUES_MOBILITY.PUBLIC_TRANSPORT:
        return 2;
      case STORAGE_VALUES_MOBILITY.BIKE:
        return 1;
      default:
        return 0;
    }
  };

  const calcTravelResult = (
    travelInput: STORAGE_VALUES_TRAVEL | null,
  ): number => {
    switch (travelInput) {
      case STORAGE_VALUES_TRAVEL.TRANSCONTINENTAL:
        return 10;
      case STORAGE_VALUES_TRAVEL.EUROPE:
        return 5;
      case STORAGE_VALUES_TRAVEL.GERMANY:
        return 2;
      default:
        return 0;
    }
  };

  const calcFlightHoursResult = (
    flightHoursInput: STORAGE_VALUES_FLIGHT_HOURS | null,
  ): number => {
    switch (flightHoursInput) {
      case STORAGE_VALUES_FLIGHT_HOURS.MORE_THAN_EIGHT:
        return 10;
      case STORAGE_VALUES_FLIGHT_HOURS.FOUR_TO_EIGHT:
        return 7;
      case STORAGE_VALUES_FLIGHT_HOURS.TWO_TO_FOUR:
        return 3;
      default:
        return 0;
    }
  };

  const calcFoodResult = (foodInput: STORAGE_VALUES_FOOD | null): number => {
    switch (foodInput) {
      case STORAGE_VALUES_FOOD.MEAT_CENTRIC:
        return 4;
      case STORAGE_VALUES_FOOD.MIX_DIET:
        return 3;
      case STORAGE_VALUES_FOOD.VEGETARIAN:
        return 2;
      case STORAGE_VALUES_FOOD.VEGAN:
        return 1;
      default:
        return 0;
    }
  };

  const calcLivingResult = (
    livingInput: STORAGE_VALUES_LIVING | null,
  ): number => {
    switch (livingInput) {
      case STORAGE_VALUES_LIVING.ONLY_ME:
        return 3;
      case STORAGE_VALUES_LIVING.TWO_TO_FOUR:
        return 2;
      case STORAGE_VALUES_LIVING.MORE_THAN_FOUR:
        return 1;
      default:
        return 0;
    }
  };

  const calcElectricityResult = (
    electricityInput: STORAGE_VALUES_ELECTRICITY | null,
  ): number => {
    switch (electricityInput) {
      case STORAGE_VALUES_ELECTRICITY.MIX:
        return 3;
      case STORAGE_VALUES_ELECTRICITY.GREEN:
        return 2;
      default:
        return 0;
    }
  };

  const getBarChartPercentage = (value: number, max: number): number => {
    return (value / max) * 100;
  };

  const getMax = (values: number[]): number => {
    return Math.max(...values);
  };

  React.useEffect(() => {
    RetrieveAllC02Data().then(storageData => {
      console.log(storageData);
      setResultData(storageData);
    });
  }, []);

  React.useEffect(() => {
    if (!resultData) {
      return;
    }
    const calculateResult = (storageData: StorageKeyResult): number => {
      return (
        calcMobilityResult(
          storageData[STORAGE_KEYS.MOBILITY] as STORAGE_VALUES_MOBILITY | null,
        ) +
        calcTravelResult(
          storageData[STORAGE_KEYS.TRAVEL] as STORAGE_VALUES_TRAVEL | null,
        ) +
        calcFlightHoursResult(
          storageData[
            STORAGE_KEYS.FLIGHT_HOURS
          ] as STORAGE_VALUES_FLIGHT_HOURS | null,
        ) +
        calcFoodResult(
          storageData[STORAGE_KEYS.FOOD] as STORAGE_VALUES_FOOD | null,
        ) +
        calcLivingResult(
          storageData[STORAGE_KEYS.LIVING] as STORAGE_VALUES_LIVING | null,
        ) +
        calcElectricityResult(
          storageData[
            STORAGE_KEYS.ELECTRICITY
          ] as STORAGE_VALUES_ELECTRICITY | null,
        )
      );
    };

    setResult(calculateResult(resultData));
  }, [resultData]);

  return (
    <ScreenContainerComponent>
      <ResultImageContainer>
        <ResultBackgroundImageContainer>
          <ResultBackgroundImage />
        </ResultBackgroundImageContainer>
        <ResultHeader>{result}</ResultHeader>
        <ResultSubHeaderText>Tonnen CO2</ResultSubHeaderText>
      </ResultImageContainer>
      <BarChartHeader>Im Vergleich</BarChartHeader>
      <BarChartComponent
        colorStart={COLORS.CFP_GREEN1}
        colorEnd={COLORS.CFP_GREEN2}
        description={'Du'}
        value={result + ' Tonnen'}
        width={getBarChartPercentage(result, getMax([result, 12.3, 4.5]))}
      />
      <BarChartComponent
        colorStart={COLORS.CFP_ORANGE1}
        colorEnd={COLORS.CFP_ORANG2}
        description={'Durchschnitt Deutschland'}
        value={'12,3 Tonnen'}
        width={getBarChartPercentage(12.3, getMax([result, 12.3, 4.5]))}
      />
      <BarChartComponent
        colorStart={COLORS.CFP_RED1}
        colorEnd={COLORS.CFP_RED2}
        description={'Weltweiter Durchschnitt'}
        value={'4,5 Tonnen'}
        width={getBarChartPercentage(4.5, getMax([result, 12.3, 4.5]))}
      />
      <RestartButton
        onPress={() =>
          ClearStorage().then(() => navigation.navigate(SCREENS.START_SCREEN))
        }>
        <RestartButtonText>Nochmals berechnen</RestartButtonText>
      </RestartButton>
    </ScreenContainerComponent>
  );
};
