import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.View`
  flex: 1;
  position: relative;
  align-items: center;
  justify-content: center;
  padding: 0 20px ${Platform.OS === 'android' ? 150 : 40}px;
`;

export const ImageCamera = styled.SafeAreaView`
  height: 220px;
  margin-top: 140px;
  margin-bottom: 30px;
  background: #919191;
  border-radius: 8px;
  border: solid 8px #707070;
  justify-content: center;
  align-items: center;
`;

export const ImageCameraIcon = styled.View`
  height: 150px;
  width: 150px;
  border-radius: 75px;
  background: #f0e7fd;
  align-items: center;
  justify-content: center;
`;
