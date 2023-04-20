import React from 'react';
import {
  BarChartContainer,
  BarChartText,
  BarChartTextContainer
} from "../Assets/Style";
import {StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export type BarChartProps = {
  colorStart: string;
  colorEnd: string;
  description: string;
  value: string;
};

export const BarChartComponent = ({
  colorStart,
  colorEnd,
  description,
  value,
}: BarChartProps) => {
  return (
    <BarChartContainer>
      <LinearGradient
        colors={[colorStart, colorEnd]}
        style={styles.linearGradient}
      />
      <BarChartTextContainer>
        <BarChartText>{description}</BarChartText>
        <BarChartText>{value}</BarChartText>
      </BarChartTextContainer>
    </BarChartContainer>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 28,
    height: 8,
    width: '100%',
  },
});
