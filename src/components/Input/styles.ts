import styled, { css } from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

interface ContainerProps {
  isFocused: boolean;
  isErrored: boolean;
}

export const Container = styled.View<ContainerProps>`
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

  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${props =>
    props.isFocused &&
    css`
      border-color: #7f39fb;
    `}
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #fff;
  font-size: 16px;
  font-family: 'Roboto_400Regular';
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 16px;
`;
