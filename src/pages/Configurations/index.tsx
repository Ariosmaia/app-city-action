import React from 'react';
import { View, Text } from 'react-native';

import { Background, Container } from './styles';

const Configurations: React.FC = () => {
  return (
    <>
      <Background />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Configurations</Text>
      </View>
    </>
  );
};

export default Configurations;
