import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

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
  align-items: center;
  justify-content: center;
  padding: 0 30px ${Platform.OS === 'android' ? 150 : 40}px;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #f4ede8;
  font-family: 'Roboto_500Medium';
  margin: 64px 0 24px;
`;

// TouchableOpacity muda opacidade no clique
export const ForgotPassword = styled.TouchableOpacity`
  margin-top: 24px;
`;

export const ForgotPasswordText = styled.Text`
  color: #f4ede8;
  font-size: 16px;
  font-family: 'Roboto_400Regular';
`;

// TouchableNativeFeedback não muda estilo
export const CreateAccountButton = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  background: #3c3c3c;
  border-top-width: 1px;
  border-color: #232129;
  padding: 16px 0 ${16 + getBottomSpace()}px;

  justify-content: center;
  align-items: center;
  flex-direction: row;
`;
export const CreateAccountButtonText = styled.Text`
  color: #7f39fb;
  font-size: 18px;
  font-family: 'Roboto_400Regular';
  margin-left: 16px;
`;
