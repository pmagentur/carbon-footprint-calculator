import * as RN from 'react-native';
import * as React from 'react';

import {SafeAreaView} from 'react-native-safe-area-context';
import DeviceInfo from 'react-native-device-info';
import styled from 'styled-components';
import {COLORS} from '../Constants/Colors.Constants';

type ScreenContainerProps = {
  children: React.ReactNode;
  backgroundColor?: string;
};

// device Ids for all Iphone 12 models are "iPhone13,1", "iPhone13,2", "iPhone13,3", "iPhone13,4"
const isIphone12 =
  RN.Platform.OS === 'ios' &&
  DeviceInfo.getDeviceId().split(',')[0] === 'iPhone13';

export const ScreenContainerComponent = ({
  children,
  backgroundColor = COLORS.WHITE,
}: ScreenContainerProps) => {
  return (
    <Container backgroundColor={backgroundColor}>
      <Content backgroundColor={backgroundColor}>
        {children}
      </Content>
    </Container>
  );
};

const Content = styled(RN.View)<{backgroundColor: string}>`
  background-color: ${(props: {backgroundColor: any}) => props.backgroundColor};
  flex: 1;
`;

// background color is status bar color too //
const Container = styled(SafeAreaView)<{backgroundColor: string}>`
  padding-top: ${RN.Platform.OS === 'ios' && isIphone12 ? 34 : 0};
  flex: 1;
  background-color: ${(props: {backgroundColor: any}) => props.backgroundColor};
`;
