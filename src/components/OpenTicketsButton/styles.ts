import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

interface OpenTicketsButtonData {
  focused: boolean;
}

export const Button = styled(LinearGradient).attrs<OpenTicketsButtonData>(
  props => ({
    colors: props.focused ? ['#7F39FB', '#7F39FB'] : ['#fff', '#ccc'],
    start: [1, 0.2],
  }),
)`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
`;
