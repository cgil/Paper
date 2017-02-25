import React, { Component } from 'react';
import {
  Container, Header, Title, Content, Tab, Tabs, TabHeading,
  Icon, Body, Right, Left, Button, Card, CardItem, Grid,
  Col, Row
} from 'native-base';
import { View, Text, Dimensions, Image } from 'react-native';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../actions'
import { shortNumber } from '../utils/formatter';

class Detail extends Component {

  static propTypes = {
    title: React.PropTypes.string.isRequired,
    author: React.PropTypes.string.isRequired,
    cover: React.PropTypes.string.isRequired,
    content: React.PropTypes.string.isRequired,
    views: React.PropTypes.number.isRequired,
    stars: React.PropTypes.number.isRequired,
  }

  static defaultProps = {
    cover: 'https://a.wattpad.com/cover/67943442-288-k687715.jpg',
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. \n\nSed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud".repeat(20),
    views: 201200,
    stars: 1400000,
    title: "Book Title",
    author: "Firstname M. Lastname",
  }

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Container>
        <Header hasTabs>
          <Left>
            <Button transparent onPress={ () => { this.props.navigateBack() } }>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Detail</Title>
          </Body>
          <Right/>
        </Header>
        <Content padder>
          <Card>
            <CardItem>
              <Left>
                <Body>
                  <Text>{ this.props.title } id={ this.props.navigationParams.id }</Text>
                  <Text note>{ this.props.author }</Text>
                </Body>
              </Left>
            </CardItem>

            <CardItem cardBody>
              <Image style={{ resizeMode: 'contain', flex: 1, width: null, height: 200 }} source={{ uri: this.props.cover }} />
            </CardItem>

            <CardItem content>
              <Text>{ this.props.content }</Text>
            </CardItem>

            <CardItem style={{ paddingVertical: 0 }}>
              <Left>
                <Button iconLeft transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button iconLeft transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    navigationParams: state.navigationParams,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
