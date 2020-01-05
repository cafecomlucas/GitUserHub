import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 30px 30px 0 30px;
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

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  padding-top: 20px;
`;

export const User = styled.View`
  align-items: center;
  padding-bottom: 20px;
  margin: 0 30px 20px 30px;
  border-bottom-width: 1px;
  border-color: #c7c7c7;
`;

export const Avatar = styled.Image`
  background: #eee;
  width: 64px;
  height: 64px;
  border-radius: 32px; /** porcentagem não funciona */
`;

export const Name = styled.Text`
  margin-top: 7px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
`;

export const Bio = styled.Text.attrs({
  numberOfLines: 2,
})`
  padding-top: 7px;
  text-align: center;
  font-size: 12px;
  line-height: 15px;
  color: #999;
`;

export const ProfileButton = styled(RectButton)`
  align-self: stretch;
  background: #7159c1;
  border-radius: 4px;
  margin-top: 10px;
  height: 36px;
  justify-content: center;
  align-items: center;
`;

export const ProfileButtonText = styled.Text`
  font-weight: bold;
  color: #fff;
  font-size: 14px;
  text-transform: uppercase;
`;
