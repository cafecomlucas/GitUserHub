import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 20px 20px 0 20px;
`;

export const Header = styled.View`
  align-items: center;
  padding: 0 10px 20px 10px;
  border-bottom-width: 1px;
  border-color: #c7c7c7;
`;

export const Avatar = styled.Image`
  background: #eee;
  width: 90px;
  height: 90px;
  border-radius: 45px; /** porcentagem não funciona */
`;

export const Name = styled.Text`
  margin-top: 7px;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  color: #333;
`;

export const Bio = styled.Text`
  padding-top: 7px;
  text-align: center;
  font-size: 14px;
  line-height: 17px;
  color: #777;
`;

export const StarsTitleContainer = styled.View`
  padding: 10px 0;
  justify-content: center;
  align-items: center;
  border-bottom-width: 1px;
  border-color: #ccc;
  min-height: 50px;
`;

export const StarsTitle = styled.Text`
  text-align: center;
  font-size: 16px;
  color: #777;
  font-weight: bold;
  text-transform: uppercase;
`;

export const Stars = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  padding: 0 20px;
  opacity: ${props => (props.loading ? 0.5 : 1)};
`;

export const Starred = styled.View`
  background: #ddd;
  margin-top: 20px;
  border-radius: 4px;
  padding: 10px 15px;
  flex-direction: row;
  align-items: center;
`;

export const OwnerAvatar = styled.Image`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  background: #eee;
`;

export const Info = styled.View`
  flex: 1;
  margin-left: 10px;
`;

export const Title = styled.Text.attrs({
  numberOfLines: 1,
})`
  color: #333;
  font-weight: bold;
  font-size: 14px;
`;

export const Author = styled.Text`
  color: #666;
  font-size: 12px;
`;
