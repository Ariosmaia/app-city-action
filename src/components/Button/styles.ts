import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 100%;
  height: 60px;
  background: #7f39fb;
  border-radius: 10px;
  margin-top: 48px;

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
