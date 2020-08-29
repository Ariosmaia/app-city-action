import React from 'react';

import { FontAwesome5 } from '@expo/vector-icons';
import { TouchableNativeFeedback } from 'react-native';

import { Button } from './styles';

interface OpenTicketsButtonData {
  onPress: void;
  focused: boolean;
}

const OpenTicketsButton: React.FC<OpenTicketsButtonData> = ({
  onPress,
  focused,
}) => {
  return (
    <TouchableNativeFeedback onPress={onPress}>
      <Button focused={focused}>
        <FontAwesome5
          name="map-marker-alt"
          size={30}
          color={focused ? '#fff' : '#000'}
        />
      </Button>
    </TouchableNativeFeedback>
  );
};

export default OpenTicketsButton;
