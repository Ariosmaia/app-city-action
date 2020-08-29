import React from 'react';
import { View, Button, Text, SafeAreaView } from 'react-native';

import { Background, Container } from './styles';

const OpenTicket: React.FC = () => {
  return (
    <>
      <Background />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Open Ticket</Text>
      </View>
    </>
  );
};

export default OpenTicket;
