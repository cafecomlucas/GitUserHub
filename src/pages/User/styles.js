import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 20px 20px 0 20px;
`;

export const Header = styled.View`
  align-items: center;
  padding-bottom: 20px;
  margin: 0 10px 20px 10px;
  border-bottom-width: 1px;
  border-color: #c7c7c7;
`;

export const Avatar = styled.Image`
  background: #eee;
  width: 100px;
  height: 100px;
  border-radius: 50px; /** porcentagem não funciona */
`;

export const Name = styled.Text`
  margin-top: 7px;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  color: #333;
`;

export const Bio = styled.Text`
  padding-top: 7px;
  text-align: center;
  font-size: 16px;
  line-height: 19px;
  color: #777;
`;
