import React, { useCallback, useRef, useEffect } from 'react';
import {
  Image,
  View,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  TextInput,
  Alert,
} from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/native';

import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { MaterialIcons } from '@expo/vector-icons';

import { TouchableOpacity } from 'react-native-gesture-handler';
import api from '../../services/api';

import getValidationErrors from '../../utils/getValidationErrors';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, ImageCamera, ImageCameraIcon } from './styles';

interface Params {
  cordinate: 
  {
    latitude: number,
    longitude: number
  };
}

const RegisterTicket: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const navigation = useNavigation();

  const emailInputRef = useRef<TextInput>(null);
  const passwordInputRef = useRef<TextInput>(null);
  const route = useRoute()


  const routeParams = route.params as Params;

  useEffect(() => {
    console.log('params', routeParams);
  }, [])

  
  navigation.setOptions({
    title: 'Abrir chamado',

    headerLeft: () => (
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
      >
        <View style={{ marginLeft: 15 }}>
          <MaterialIcons name="arrow-back" size={25} color="#fff" />
        </View>
      </TouchableOpacity>
    ),
  });
  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flex: 1 }}
        >
          <Container>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default RegisterTicket;
