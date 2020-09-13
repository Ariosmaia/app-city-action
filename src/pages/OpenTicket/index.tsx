import React from 'react';
import { View, Button, TouchableOpacity } from 'react-native';

import { AntDesign } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';

import { Background, Container } from './styles';

import { useAuth } from '../../hooks/auth';

const OpenTicket: React.FC = () => {
  const navigation = useNavigation();
  const { signOut } = useAuth();

  navigation.setOptions({
    headerLeft: () => (
      <TouchableOpacity onPress={signOut}>
        <View style={{ marginLeft: 15 }}>
          <AntDesign name="logout" size={25} color="#fff" />
        </View>
      </TouchableOpacity>
    ),
    headerRight: () => (
      <TouchableOpacity onPress={signOut}>
        <View style={{ marginRight: 15 }}>
          <AntDesign name="search1" size={25} color="#fff" />
        </View>
      </TouchableOpacity>
    ),
  });

  function navigateTo() {
    navigation.navigate('RegisterTicket');
  }
  return (
    <>
      <Background />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button title="Novo chamado" onPress={navigateTo} />
      </View>
    </>
  );
};

export default OpenTicket;
