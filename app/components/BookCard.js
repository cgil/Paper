import React, { Component, } from 'react';
import { View, Image } from 'react-native';
import { Container, Content, Card, CardItem, Left, Right, Body, Thumbnail, Text, Button, Icon, Grid, Row, Col } from 'native-base';
import { shortNumber } from '../utils/formatter';

class BookCard extends Component {

  static propTypes = {
    title: React.PropTypes.string.isRequired,
    author: React.PropTypes.string.isRequired,
    cover: React.PropTypes.string.isRequired,
    description: React.PropTypes.string.isRequired,
    views: React.PropTypes.number.isRequired,
    stars: React.PropTypes.number.isRequired,
    onPress: React.PropTypes.func.isRequired,
  }

  static defaultProps = {
    views: 201200,
    stars: 1400000
  }

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Card>
        <CardItem>
          <Left>
            <Body>
              <Text>{ this.props.title }</Text>
              <Text note>{ this.props.author }</Text>
            </Body>
          </Left>
        </CardItem>

        <CardItem cardBody button onPress={ () => this.props.onPress() }>
          <Grid>
            <Col>
              <Image style={{ resizeMode: 'contain', flex: 1, width: null, height: 200 }} source={{ uri: this.props.cover }} />
            </Col>
            <Col>
              <Row style={{ flexShrink: 1, flexGrow: 0}}>
                <Col>
                  <Button small iconLeft transparent style={{ paddingLeft: 10, paddingVertical: 0 }}>
                    <Icon active name="eye" />
                    <Text>{ shortNumber(this.props.views) }</Text>
                  </Button>
                </Col>
                <Col>
                  <Button small iconLeft transparent style={{ paddingVertical: 0 }}>
                    <Icon active name="star" />
                    <Text>{ shortNumber(this.props.stars) }</Text>
                  </Button>
                </Col>
              </Row>
              <Row style={{ flexShrink: 1, flexGrow: 0 }}>
                <Left>
                  <Body style={{ paddingRight: 10 }}>
                    <Text numberOfLines={11}>{ this.props.description }</Text>
                  </Body>
                </Left>
              </Row>
            </Col>
          </Grid>
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
    )
  }
}

export default BookCard
