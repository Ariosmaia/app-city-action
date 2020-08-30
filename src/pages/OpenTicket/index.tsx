import React from 'react';
import { View, Button, Text, SafeAreaView } from 'react-native';

import { Background, Container } from './styles';

import { useAuth } from '../../hooks/auth';

const OpenTicket: React.FC = () => {
  const { signOut } = useAuth();
  return (
    <>
      <Background />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Open Ticket</Text>
        <Button title="Sair" onPress={signOut} />
      </View>
    </>
  );
};

export default OpenTicket;
