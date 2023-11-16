import React from 'react';
import SwitchToggle from 'react-native-switch-toggle';
import { InputProps } from './types';
import Colors from '../../../constants/Colors';

const Toggle = ({ enable, setEnable }: InputProps): JSX.Element => {
  return (
    <SwitchToggle
      switchOn={enable}
      onPress={() => setEnable(!enable)}
      containerStyle={{
        width: 40,
        height: 20,
        borderRadius: 25,
        padding: 5,
        borderWidth: enable ? 0 : 2,
        borderColor: Colors.light.toggleBorder,
      }}
      circleStyle={{
        width: 12,
        height: 12,
        borderRadius: 20,
      }}
      backgroundColorOn={Colors.light.defaultPink}
      backgroundColorOff={Colors.light.white}
      circleColorOff={Colors.light.toggleBorder}
      circleColorOn={Colors.light.white}
    />
  );
};

export default Toggle;
