import styled from 'styled-components/native';
import { Platform } from 'react-native';

import MapView, { Marker, Callout } from 'react-native-maps';

import { RectButton } from 'react-native-gesture-handler';

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  padding-top: 24px;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-family: 'Roboto_500Medium';
  color: #f0e7fd;
  margin: 0px 72px;
`;

export const Container = styled.View`
  flex: 1;
  position: relative;
  margin-bottom: 80px;
  padding: 5px 20px ${Platform.OS === 'android' ? 110 : 20}px;
`;

export const InputView = styled.View`
  width: 100%;
  height: 65px;
  padding: 0 16px;
  background: #3c3c3c;
  border-radius: 10px;
  margin-bottom: 8px;
  border-width: 2px;
  border-color: #f0e7fd;
  justify-content: center;
  margin-bottom: 20px;
`;

export const TitleDescription = styled.Text`
  font-size: 16px;
  color: #f4ede8;
  margin-top: 4px;
  margin-bottom: 10px;
  font-family: 'Roboto_400Regular';
`;

export const InputText = styled.View`
  width: 100%;
  height: 65px;
  padding: 0 16px;
  background: #3c3c3c;
  border-radius: 10px;
  margin-bottom: 8px;
  border-width: 2px;
  border-color: #f0e7fd;

  margin-bottom: 20px;

  flex-direction: row;
  align-items: center;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #f0e7fd;
  font-size: 16px;
  font-family: 'Roboto_400Regular';
`;

export const ButtonConfirm = styled(RectButton)`
  width: 100%;
  height: 60px;
  background: #7f39fb;
  border-radius: 10px;
  margin-top: 28px;

  padding: 0 16px;

  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  flex: 1;
  font-family: 'Roboto_500Medium';
  color: #3c3c3c;
  font-size: 18px;
  text-align: center;
`;

export const MapContainer = styled.View`
  flex: 1;
  width: 100%;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  overflow: hidden;
`;

export const Map = styled(MapView)`
  width: 100%;
  height: 100%;
`;

export const MapMarker = styled(Marker)``;

export const MapMarkerContainer = styled.View`
  width: 180px;
  height: 80px;
  background-color: #7f39fb;
  flex-direction: column;
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
`;

export const MapMarkerName = styled.Text`
  flex: 1;
  color: #fff9;
  margin-top: 5px;
`;

export const MapMarkerCallout = styled(Callout)`
  width: 180px;
`;

export const MapDescrition = styled.Text`
  color: #fff;
  padding: 12px;
`;
