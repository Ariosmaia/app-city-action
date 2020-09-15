import React from 'react';
import { View, Button, Text } from 'react-native';

import { Background, Container } from './styles';

const MyTickets: React.FC = () => {
  return (
    <>
      <Background />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>My Tickets</Text>
      </View>
    </>
  );
};

export default MyTickets;