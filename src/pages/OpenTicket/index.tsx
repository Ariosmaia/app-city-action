import React, { useState, useEffect } from 'react';
import Constants from 'expo-constants';
import { Feather as Icon } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { StyleSheet, Button, View, Image, TouchableOpacity, Text, ScrollView, Alert } from 'react-native';
import MapView, { Marker, LocalTile  } from 'react-native-maps';
import { SvgUri } from 'react-native-svg';
import * as Location from 'expo-location';
import { Background } from './styles';
import axios from 'axios';

interface Point {
  _id: string;
  citizen_id: string;
	citizen_name: string;
	ticket_type: string;
  location: 
  {
    coordinates: [number, number] 
  };
}

const Points: React.FC = () => {
  const [points, setPoints] = useState<Point[]>([]);
  const [initialPosition, setInitialPosition] = useState<[number, number]>([0, 0]);
  const [selectedCoordinate, setCoordinate] = useState<[number, number]>([0, 0]);

	const navigation = useNavigation();
	const route = useRoute();

  useEffect(() => {
    async function loadPosition() {
      const { status } = await Location.requestPermissionsAsync();

      if (status !== 'granted') {
        Alert.alert('Oooops', 'Precisamos da sua permissão para obter a localização');
        return;
      }

      const location = await Location.getCurrentPositionAsync();

      const { latitude, longitude } = location.coords;

      // console.log('teste3', latitude, longitude)

      setInitialPosition([
        latitude,
        longitude,
      ]);


      axios.get('http://192.168.0.6:3333/search', {
      params: {
          latitude: latitude,
          longitude: longitude
        }
      }).then(response => {
        // console.log('teste2', response.data);
        setPoints(response.data);
      });

    }

    loadPosition();
  }, [])

  function handleNavigateBack()
  {
      navigation.goBack();
  }

  function teste(coordinate: any)
  {
    console.log(coordinate.latitude,coordinate.longitude);

    const newPoint = {
      _id: "123",
      citizen_id: "",
      citizen_name: "teste",
      ticket_type: "erro teste",
      location: 
      {
        coordinates: [coordinate.latitude,coordinate.longitude] 
      }
    };

    setPoints({...points, ...newPoint});

    setCoordinate([
      coordinate.latitude,
      coordinate.longitude,
    ]);
  }

  function handleNavigateToTicketRegister(coordinate: any) {
    navigation.navigate('RegisterTicket', {coordinate: coordinate})
  }

  return (
    <>
      <Background />
      <View style={styles.container}>

        <TouchableOpacity onPress={handleNavigateBack}>
          <Icon name="arrow-left" size={20} color="#34cb79"/>
        </TouchableOpacity>

        <Text style={styles.title}>Bem vindo.</Text>
        <Text style={styles.description}>Encontre no mapa os chamados abertos e clique para abrir um novo</Text>

        <View style={styles.mapContainer}>
          {initialPosition[0] !== 0 && (
            <MapView
              onPress={(event) => handleNavigateToTicketRegister(event.nativeEvent.coordinate)}
              style={styles.map}
              initialRegion={{
                latitude: initialPosition[0],
                longitude: initialPosition[1],
                //latitude: -23.5608844,
                //longitude: -46.6590967,
                latitudeDelta: 0.014,
                longitudeDelta: 0.014,
              }}>

              {points.map(point => {
                console.log(point.location.coordinates[1], point.location.coordinates[0]);
                return (
                  <Marker
                  key={String(point._id)}
                  style={styles.mapMarker}
                  coordinate={{
                    latitude: point.location.coordinates[1],
                    longitude: point.location.coordinates[0],
                  }}>
                  <View style={styles.mapMarkerContainer}>
                    <Text style={styles.mapMarkerTitle}>{point.ticket_type}</Text>
                  </View> 
									{/* <View style={styles.mapMarkerArrow}/> */}
                </Marker>
                )
              })}
            </MapView>
          )}
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 32,
    paddingTop: 20 + Constants.statusBarHeight,
  },

  title: {
    fontSize: 20,
    fontFamily: 'Roboto_500Medium',
    marginTop: 24,
  },

  description: {
    color: '#6C6C80',
    fontSize: 16,
    marginTop: 4,
    fontFamily: 'Roboto_400Regular',
  },

  mapContainer: {
    flex: 1,
    width: '100%',
    borderRadius: 10,
    overflow: 'hidden',
    marginTop: 16,
  },

  map: {
    width: '100%',
    height: '100%',
  },

  mapMarker: {
    width: 90,
    height: 80,
  },

  mapMarkerContainer: {
    width: 200,
    height: 20,
    backgroundColor: '#7f39fb',
    flexDirection: 'row',
    borderRadius: 8,
    overflow: 'hidden',
		position: "relative",
    zIndex: 1,
    justifyContent: "center",
    alignContent: 'center',
    textAlign: 'center'
  },

  // mapMarkerImage: {
  //   width: 20,
  //   height: 120,
  //   resizeMode: 'cover',
  // },

  mapMarkerTitle: {
    flex: 1,
    fontFamily: 'Roboto_400Regular',
    color: '#FFF',
    fontSize: 13,
    lineHeight: 23
	},
	
	// mapMarkerArrow: {
	// 	position: "absolute",
	// 	borderTopWidth: 40,
	// 	borderTopColor: "#34CB79",

	// 	borderLeftWidth: 50,
	// 	borderLeftColor: "transparent",

	// 	borderRightWidth: 50,
	// 	borderRightColor: "transparent",

	// 	width: 50,
	// 	bottom: -0.5,
	// 	right: 30,
	// 	left: -5,
	// 	zIndex: 0

	// },

  itemsContainer: {
    flexDirection: 'row',
    marginTop: 16,
    marginBottom: 32,
  },

  item: {
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#eee',
    height: 120,
    width: 120,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 16,
    marginRight: 8,
    alignItems: 'center',
    justifyContent: 'space-between',

    textAlign: 'center',
  },

  selectedItem: {
    borderColor: '#34CB79',
    borderWidth: 2,
  },

  itemTitle: {
    fontFamily: 'Roboto_400Regular',
    textAlign: 'center',
    fontSize: 13,
  },
});

export default Points;