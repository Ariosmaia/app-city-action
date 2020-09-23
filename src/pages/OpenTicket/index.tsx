/* eslint-disable react/jsx-curly-newline */
/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect, useCallback } from 'react';
import { Feather as Icon, AntDesign } from '@expo/vector-icons';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { TouchableOpacity, Alert, View, Text } from 'react-native';
import * as Location from 'expo-location';
import axios from 'axios';
import { useAuth } from '../../hooks/auth';

import {
  Background,
  Container,
  Title,
  ContainerTitle,
  MapContainer,
  Map,
  MapMarker,
  MapMarkerContainer,
  MapMarkerTitle,
  MapMarkerCallout,
  MapMarkerName,
} from './styles';

interface Point {
  _id: string;
  citizen_id: string;
  citizen_name: string;
  ticket_type: string;
  location: {
    coordinates: [number, number];
  };
}

const OpenTicket: React.FC = () => {
  const [points, setPoints] = useState<Point[]>([]);
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const { signOut, citizen } = useAuth();

  const [initialPosition, setInitialPosition] = useState<[number, number]>([
    0,
    0,
  ]);

  useEffect(() => {
    async function loadPosition() {
      const { status } = await Location.requestPermissionsAsync();

      if (status !== 'granted') {
        Alert.alert(
          'Oooops',
          'Precisamos da sua permissão para obter a localização',
        );
        return;
      }

      const location = await Location.getCurrentPositionAsync();

      const { latitude, longitude } = location.coords;

      setInitialPosition([latitude, longitude]);
    }
    loadPosition();
  }, []);

  useEffect(() => {
    async function loadTickets() {
      try {
        const response = await axios.get<Point[]>(
          'https://city-action.herokuapp.com/search',
          {
            params: {
              latitude: initialPosition[0],
              longitude: initialPosition[1],
            },
          },
        );

        setPoints(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    if (isFocused) {
      loadTickets();
    }
  }, [initialPosition, isFocused]);

  navigation.setOptions({
    headerLeft: () => (
      <TouchableOpacity onPress={signOut}>
        <View style={{ marginLeft: 20 }}>
          <AntDesign name="logout" size={25} color="#fff" />
        </View>
      </TouchableOpacity>
    ),
    headerRight: () => (
      <TouchableOpacity>
        <View style={{ marginRight: 20 }}>
          <AntDesign name="search1" size={25} color="#fff" />
        </View>
      </TouchableOpacity>
    ),
  });

  const handleNavigateToTicketRegister = useCallback(
    coordinate => {
      navigation.navigate('RegisterTicket', { coordinate });
    },
    [navigation],
  );

  return (
    <>
      <Background />
      <Container>
        <ContainerTitle>
          <Title>Bem vindo.</Title>
          <Title>
            Encontre no mapa os chamados abertos e clique para abrir um novo
          </Title>
        </ContainerTitle>

        <MapContainer>
          {initialPosition[0] !== 0 && (
            <Map
              onPress={event =>
                handleNavigateToTicketRegister(event.nativeEvent.coordinate)
              }
              initialRegion={{
                latitude: initialPosition[0],
                longitude: initialPosition[1],
                latitudeDelta: 0.014,
                longitudeDelta: 0.014,
              }}
            >
              {!!points &&
                points.map(point => {
                  return (
                    <MapMarker
                      key={String(point._id)}
                      coordinate={{
                        latitude: point.location.coordinates[1],
                        longitude: point.location.coordinates[0],
                      }}
                    >
                      <MapMarkerCallout tooltip>
                        <MapMarkerContainer>
                          <MapMarkerTitle>{point.ticket_type}</MapMarkerTitle>
                          <MapMarkerName>{point.citizen_name}</MapMarkerName>
                        </MapMarkerContainer>
                      </MapMarkerCallout>
                    </MapMarker>
                  );
                })}
            </Map>
          )}
        </MapContainer>
      </Container>
    </>
  );
};

export default OpenTicket;
