import React, {Component} from 'react';
import {ActivityIndicator} from 'react-native';
import PropTypes from 'prop-types';
import api from '../../services/api';

import {
  Container,
  Header,
  Avatar,
  Name,
  Bio,
  StarsTitleContainer,
  StarsTitle,
  Stars,
  Starred,
  OwnerAvatar,
  Info,
  Title,
  Author,
} from './styles';

export default class User extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      getParam: PropTypes.func,
    }).isRequired,
  };

  static navigationOptions = ({navigation}) => ({
    title: navigation.getParam('user').name,
  });

  state = {
    stars: [],
    loading: true,
    per_page: 10,
    page: 1,
    endOfPages: false,
    refresh: false,
  };

  async componentDidMount() {
    const {page, per_page} = this.state;
    const {navigation} = this.props;
    const user = navigation.getParam('user');

    const {data} = await api.get(`/users/${user.login}/starred`, {
      params: {
        per_page,
        page,
      },
    });
    this.setState({stars: data, loading: false});
  }

  loadMore = async () => {
    const {loading, stars, page, per_page, endOfPages} = this.state;
    const {navigation} = this.props;
    const user = navigation.getParam('user');

    if (loading || endOfPages) return;

    const newPage = page + 1;

    this.setState({loading: true});
    const {data} = await api.get(`/users/${user.login}/starred`, {
      params: {
        per_page,
        page: newPage,
      },
    });
    this.setState({loading: false});
    if (!data.length) {
      this.setState({endOfPages: true});
    } else {
      this.setState({
        stars: [...stars, ...data],
        page: newPage,
      });
    }
  };

  refreshList = async () => {
    const {loading, per_page} = this.state;
    const {navigation} = this.props;
    const user = navigation.getParam('user');

    if (loading) return;

    const page = 1;

    this.setState({loading: true});
    const {data} = await api.get(`/users/${user.login}/starred`, {
      params: {
        per_page,
        page,
      },
    });
    this.setState({stars: data, loading: false, page});
  };

  handleNavigate = ({name, html_url}) => {
    const {navigation} = this.props;
    navigation.navigate('Star', {name, html_url});
  };

  render() {
    const {navigation} = this.props;
    const user = navigation.getParam('user');
    const {stars, loading, refresh} = this.state;

    return (
      <Container>
        <Header>
          <Avatar source={{uri: user.avatar}}></Avatar>
          <Name>{user.name}</Name>
          <Bio>{user.bio}</Bio>
        </Header>
        {loading && (
          <StarsTitleContainer>
            <ActivityIndicator size={20} color="#777" />
          </StarsTitleContainer>
        )}
        {!!stars.length && !loading && (
          <StarsTitleContainer>
            <StarsTitle>Stars</StarsTitle>
          </StarsTitleContainer>
        )}
        <Stars
          data={stars}
          onRefresh={this.refreshList}
          refreshing={refresh}
          loading={loading}
          keyExtractor={star => String(star.id)}
          onEndReachedThreshold={0.2}
          onEndReached={this.loadMore}
          renderItem={({item}) => (
            <Starred onPress={() => this.handleNavigate(item)}>
              <OwnerAvatar source={{uri: item.owner.avatar_url}} />
              <Info>
                <Title>{item.name}</Title>
                <Author>{item.owner.login}</Author>
              </Info>
            </Starred>
          )}
        />
      </Container>
    );
  }
}
