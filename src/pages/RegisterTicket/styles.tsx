import styled from 'styled-components/native';
import { Platform } from 'react-native';

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
  margin-top: 80px;

  padding: 30px 20px ${Platform.OS === 'android' ? 150 : 40}px;
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
`

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
`

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
  color: #3C3C3C;
  font-size: 18px;
  text-align: center;
`;
