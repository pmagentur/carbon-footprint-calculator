import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  StartScreen,
  MobilityScreen,
  TravelScreen,
  FlightHourScreen,
  FoodScreen,
  LivingScreen,
  ElectricityScreen,
  ResultScreen,
} from './Screens';
import {SCREENS} from './Constants/Screen.Cosntants';

function App(): JSX.Element {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={SCREENS.START_SCREEN} component={StartScreen} />
        <Stack.Screen name={SCREENS.MOBILITY_SCREEN} component={MobilityScreen} />
        <Stack.Screen name={SCREENS.TRAVEL_SCREEN} component={TravelScreen} />
        <Stack.Screen name={SCREENS.FLIGHT_HOUR_SCREEN} component={FlightHourScreen} />
        <Stack.Screen name={SCREENS.FOOD_SCREEN} component={FoodScreen} />
        <Stack.Screen name={SCREENS.LIVING_SCREEN} component={LivingScreen} />
        <Stack.Screen name={SCREENS.ELECTRICITY_SCREEN} component={ElectricityScreen} />
        <Stack.Screen name={SCREENS.RESULT_SCREEN} component={ResultScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
