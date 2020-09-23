import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';

import {
  View,
  Platform,
  Picker,
  KeyboardAvoidingView,
  ScrollView,
  Alert,
  StatusBar,
  Text,
} from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/native';

import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

import {
  Container,
  InputView,
  TextInput,
  TitleDescription,
  ButtonConfirm,
  ButtonText,
  MapMarker,
  MapContainer,
  Map,
  MapDescrition,
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

  const route = useRoute();
  const routeParams = route.params as Params;

  const [description, setDescription] = useState('');
  const [localization, setLocalization] = useState<Params>(routeParams);
  const [ticketStatusId, setTicketStatusId] = useState('');
  const [serviceProvider, setServiceProvider] = useState('');
  const [ticketType, setTicketType] = useState([]);

  const { token, citizen } = useAuth();

  useEffect(() => {
    setLocalization(routeParams);
  }, [routeParams]);

  async function handleCreateTicket() {
    const ticket = {
      description,
      localization: `${routeParams.coordinate.latitude},${routeParams.coordinate.longitude}`,
      ticketStatusId: '89BCCF2C-631B-41A3-AF17-6865444A4EFE',
      ticketTypeId: ticketType,
      serviceProviderId: serviceProvider,
    };
    const ticketMongo = {
      citizen_id: citizen.id,
      citizen_name: citizen.name,
      ticket_type: description,
      latitude: routeParams.coordinate.latitude,
      longitude: routeParams.coordinate.longitude,
    };

    try {
      api.defaults.headers.Authorization = `Bearer ${token}`;
      const [tickets, ticketsMongo] = await Promise.all([
        api.post('tickets', ticket),
        axios.post('https://city-action.herokuapp.com/tickets', ticketMongo),
      ]);
      navigation.navigate('OpenTicket');
    } catch (err) {
      Alert.alert(
        'Ocorreu um erro ao cadastrar o seu chamado., Tente novamente.',
      );
    }
  }

  function handleLocation(e) {
    const location: Params = {
      coordinate: {
        latitude: e.latitude,
        longitude: e.longitude,
      },
    };
    setLocalization({ ...localization, ...location });
  }

  navigation.setOptions({
    title: '',

    headerLeft: () => (
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
      >
        <View style={{ marginLeft: 15 }}>
          <MaterialIcons name="arrow-back" size={35} color="#7f39fb" />
        </View>
      </TouchableOpacity>
    ),
  });
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <MapContainer>
        <Map
          initialRegion={{
            latitude: localization.coordinate.latitude,
            longitude: localization.coordinate.longitude,
            latitudeDelta: 0.014,
            longitudeDelta: 0.014,
          }}
        >
          <MapMarker
            draggable
            onDragEnd={e => {
              handleLocation(e.nativeEvent.coordinate);
            }}
            coordinate={{
              latitude: localization.coordinate.latitude,
              longitude: localization.coordinate.longitude,
            }}
          />
        </Map>
      </MapContainer>
      <MapDescrition>
        Segure e arraste para a localização desejada!
      </MapDescrition>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <ScrollView keyboardShouldPersistTaps="handled">
          <Container>
            <InputView>
              <Picker
                style={{ color: '#f0e7fd' }}
                selectedValue={serviceProvider}
                onValueChange={(itemValor, itemIndex) => {
                  setServiceProvider(itemValor);
                }}
              >
                <Picker.Item label="Selecione o prestador" value="0" />
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
                <Picker.Item label="Selecione o tipo" value="0" />
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
                placeholder="Descreva brevemente o problema"
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
