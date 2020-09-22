import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';

import {
  View,
  Platform,
  Picker,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Alert,
} from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/native';

import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity, State } from 'react-native-gesture-handler';

import { AppLoading } from 'expo';
import {
  Container,
  InputView,
  TextInput,
  TitleDescription,
  ButtonConfirm,
  ButtonText,
  Title,
  Header,
} from './styles';
import { useAuth } from '../../hooks/auth';
import api from '../../services/api';

interface Params {
  coordinate: {
    latitude: number;
    longitude: number;
  };
}

interface TicketContext {
  description: string;
  localization: string;
  ticketStatusId: string;
  ticketTypeId: string;
  serviceProviderId: string;
}

interface CitizenData {
  id: string;
  name: string;
}

const RegisterTicket: React.FC = () => {
  const navigation = useNavigation();

  const [description, setDescription] = useState('');
  const [localization, setLocalization] = useState('');
  const [ticketStatusId, setTicketStatusId] = useState('');
  const [serviceProvider, setServiceProvider] = useState('');
  const [ticketType, setTicketType] = useState([]);

  const route = useRoute();
  const { token, citizen } = useAuth();

  const routeParams = route.params as Params;

  useEffect(() => {
    console.log('params', routeParams.coordinate);
  }, []);

  async function handleCreateTicket() {
    const ticket = {
      description,
      localization: `${routeParams.coordinate.latitude},${routeParams.coordinate.longitude}`,
      ticketStatusId: '89BCCF2C-631B-41A3-AF17-6865444A4EFE',
      ticketTypeId: ticketType,
      serviceProviderId: serviceProvider,
    };
    // console.log(ticket);
    const ticketMongo = {
      citizen_id: citizen.id,
      citizen_name: citizen.name,
      ticket_type: 'Vazamento de água 2',
      latitude: routeParams.coordinate.latitude,
      longitude: routeParams.coordinate.longitude,
    };

    try {
      console.log('chegou!', token);
      api.defaults.headers.Authorization = `Bearer ${token}`;
      const [tickets, ticketsMongo] = await Promise.all([
        api.post('tickets', ticket),
        axios.post('https://city-action.herokuapp.com/tickets', ticketMongo),
      ]);
      //  console.log(response.data);
      navigation.navigate('OpenTicket');
    } catch (err) {
      Alert.alert(
        'Ocorreu um erro ao cadastrar o seu chamado., Tente novamente.',
      );
    }
  }

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
            <InputView>
              <Picker
                style={{ color: '#f0e7fd' }}
                selectedValue={serviceProvider}
                onValueChange={(itemValor, itemIndex) => {
                  setServiceProvider(itemValor);
                }}
              >
                <Picker.Item label="" value="0" />
                <Picker.Item
                  label="Sabesp"
                  value="89BCCF2C-631B-41A3-AF17-6865444A4EFE"
                />
              </Picker>
            </InputView>
            <InputView>
              <Picker
                style={{ color: '#f0e7fd' }}
                selectedValue={ticketType}
                onValueChange={(itemValor, itemIndex) => {
                  setTicketType(itemValor);
                }}
              >
                <Picker.Item label="" value="0" />
                <Picker.Item
                  label="Vazamento de água"
                  value="2F810939-F524-404B-A0D1-05D59CE1AA02"
                />
                <Picker.Item
                  label="Falta de água"
                  value="AFCB44D2-5846-46FD-B708-884D17F0F281"
                />
              </Picker>
            </InputView>
            <View>
              <TitleDescription>Descrição</TitleDescription>
            </View>
            <InputView>
              <TextInput
                value={description}
                onChangeText={text => setDescription(text)}
              />
            </InputView>
            <ButtonConfirm>
              <ButtonText onPress={handleCreateTicket}>Cadastrar</ButtonText>
            </ButtonConfirm>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default RegisterTicket;
