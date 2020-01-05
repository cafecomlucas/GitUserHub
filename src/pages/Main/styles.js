import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
`;

export const Form = styled.View`
  flex-direction: row;
  padding-bottom: 20px;
  border-bottom-width: 1px;
  border-color: #c7c7c7;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#777',
})`
  flex: 1;
  height: 40px;
  background: #eee;
  border-radius: 4px;
  padding: 0 15px;
  border: 1px solid #c7c7c7;
  opacity: ${props => (props.loading ? 0.8 : 1)};
`;

export const SubmitButton = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background: #7159c1;
  padding: 0 12px;
  border-radius: 4px;
  margin-left: 10px;
  opacity: ${props => (props.loading ? 0.4 : 1)};
`;
