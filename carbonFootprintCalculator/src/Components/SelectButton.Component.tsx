import React from 'react';
import {SCREENS} from '../Constants';
import {SelectButton, SelectButtonText} from '../Assets/Style';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../Navigation';

export type SelectButtonProps = {
  text: string;
  navScreen?: SCREENS;
  onClick?: () => void;
  children: React.ReactNode;
};

export const SelectButtonComponent = ({
  text,
  navScreen,
  onClick,
  children,
}: SelectButtonProps) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <SelectButton
      onPress={() => {
        if (onClick) {
          onClick();
        }

        if (navScreen) {
          navigation.navigate(navScreen);
        }
      }}>
      {children}
      <SelectButtonText>{text}</SelectButtonText>
    </SelectButton>
  );
};
