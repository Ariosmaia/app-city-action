import styled from 'styled-components/native';
import Constants from 'expo-constants';

import MapView, { Marker } from 'react-native-maps';

export const Background = styled.View`
  width: 100%;
  height: 0%;
  position: absolute;
  background-color: transparent;
  border-style: solid;
  border-right-width: 650px;
  border-top-width: 290px;
  border-right-color: transparent;
  border-top-color: #454372;
`;

export const Container = styled.View`
  flex: 1;
  padding-top: ${Constants.statusBarHeight + 20}px;
`;

export const ContainerTitle = styled.View`
  margin: 0 20px;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-family: Roboto_500Medium;
  margin-top: 24px;
  color: #fff;
`;

export const Description = styled.Text`
  color: #6c6c80;
  font-size: 16px;
  margin-top: 4px;
  font-family: Roboto_400Regular;
`;

export const MapContainer = styled.View`
  flex: 1;
  width: 100%;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  overflow: hidden;
  margin-top: 16px;
`;

export const Map = styled(MapView)`
  width: 100%;
  height: 100%;
`;

export const MapMarker = styled(Marker)`
  width: 150px;
  height: 80px;
  position: relative;
`;

export const MapMarkerContainer = styled.Text`
  width: 115px;
  height: 80px;
  background-color: #7f39fb;
  flex-direction: row;
  border-radius: 10px;
  padding: 14px;
  z-index: 1;
  justify-content: center;
  align-content: center;
`;

export const MapMarkerTitle = styled.Text`
  flex: 1;
  font-family: Roboto_400Regular;
  color: #fff;
  font-size: 13px;
  line-height: 20px;
  position: relative;
`;

export const MapMarkerArrow = styled.Text`
  position: absolute;
  border-top-width: 20px;
  border-top-color: #7f39fb;

  border-left-width: 50px;
  border-left-color: transparent;

  border-right-width: 50px;
  border-right-color: transparent;

  width: 200px;
  height: 200px;
  bottom: -50px;
  right: 30px;
  left: -5px;
  z-index: 0;
`;
