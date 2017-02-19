import React, { Component, } from 'react'
import { View, Image } from 'react-native'
import { Container, Content, Card, CardItem, Left, Right, Body, Thumbnail, Text, Button, Icon, Grid, Row, Col } from 'native-base';

const defaultCover = 'https://a.wattpad.com/cover/67943442-288-k687715.jpg';

class Book extends Component {

  static propTypes = {
    title: React.PropTypes.string.isRequired,
    author: React.PropTypes.string.isRequired,
    cover: React.PropTypes.string,
    description: React.PropTypes.string,
    views: React.PropTypes.number,
    stars: React.PropTypes.number
  }

  static defaultProps = {
    cover: defaultCover,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum doculpa qui officia deserunt mollit anim id est laborum.",
    views: 100,
    stars: 43
  }

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Card>
        <CardItem>
          <Left>
            <Thumbnail />
            <Body>
              <Text>{ this.props.title }</Text>
              <Text note>{ this.props.author }</Text>
            </Body>
          </Left>
        </CardItem>

        <CardItem cardBody>
          <Grid>
            <Col>
              <Image style={{ resizeMode: 'contain', flex: 1 }} source={{ uri: this.props.cover }} />
            </Col>
            <Col>
              <Row>
                <Col>
                  <Button iconLeft transparent>
                    <Icon active name="eye" />
                    <Text>{ this.props.views }</Text>
                  </Button>
                </Col>
                <Col>
                  <Button iconLeft transparent>
                    <Icon active name="star" />
                    <Text>{ this.props.stars }</Text>
                  </Button>
                </Col>
              </Row>
              <Row>
                <Left>
                  <Body style={{ paddingRight: 10 }}>
                    <Text numberOfLines={13}>{ this.props.description }</Text>
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

export default Book