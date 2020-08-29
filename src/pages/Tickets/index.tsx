import React from 'react';
import { View, Button, Text } from 'react-native';

import { Background, Container } from './styles';

const Tickets: React.FC = () => {
  return (
    <>
      <Background />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Tickets</Text>
      </View>
    </>
  );
};

export default Tickets;
