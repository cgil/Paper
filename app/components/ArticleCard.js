import React, { Component, } from 'react';
import { View, Image } from 'react-native';
import { Container, Content, Card, CardItem, Left, Right, Body, Thumbnail, Text, Button, Icon, Grid, Row, Col } from 'native-base';
import { shortNumber } from '../utils/formatter';

class ArticleCard extends Component {

  static propTypes = {
    title: React.PropTypes.string.isRequired,
    author: React.PropTypes.string,
    media_image_url: React.PropTypes.string,
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
      <Card style={{ paddingHorizontal: 0, marginHorizontal: 0 }}>
        <CardItem header button onPress={ () => this.props.onPress() }>
          <Body>
            <Text numberOfLines={1}>{ this.props.title }</Text>
            <Text note>{ this.props.author }</Text>
          </Body>
        </CardItem>

        <CardItem cardBody button onPress={ () => this.props.onPress() }>
          <Image style={{ resizeMode: 'cover', width: null, height: 200, flex: 1 }} source={{ uri: this.props.media_image_url || "" }} />
        </CardItem>

        <CardItem content button onPress={ () => this.props.onPress() }>
          <Body>
            <Text numberOfLines={3}>{ this.props.description }</Text>
          </Body>
        </CardItem>

        <CardItem style={{ paddingVertical: 0 }}>
            <Left>
              <Button iconLeft transparent>
                <Icon active name="eye" />
                <Text style={{ paddingLeft: 5 }}>{ shortNumber(this.props.views) }</Text>
              </Button>
              <Button iconLeft transparent>
                <Icon active name="star" />
                <Text style={{ paddingLeft: 5 }}>{ shortNumber(this.props.stars) }</Text>
              </Button>
            </Left>
            <Body/>
            <Right/>
        </CardItem>
      </Card>
    )
  }
}

export default ArticleCard
