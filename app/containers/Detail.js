import React, { Component } from 'react'
import {
  Container, Header, Title, Content, Tab, Tabs, TabHeading,
  Icon, Body, Right, Left, Button, Card, CardItem, Grid,
  Col, Row
} from 'native-base'
import { View, Text, Dimensions, Image } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../actions'
import { shortNumber } from '../utils/formatter'
import { isActiveView } from '../utils/navigation'
import { DETAIL } from '../constants/routes'

class Detail extends Component {

  static propTypes = {
    title: React.PropTypes.string,
    author: React.PropTypes.string,
    cover: React.PropTypes.string,
    content: React.PropTypes.string,
    views: React.PropTypes.number,
    stars: React.PropTypes.number,
  }

  static defaultProps = {
    views: 201200,
    stars: 1400000,
  }

  constructor(props) {
    super(props)
  }

  componentWillReceiveProps(nextProps) {
    if (isActiveView(DETAIL, this.props, nextProps)) {
      this.props.fetchEntry(nextProps.navigationParams.id);
    }
  }

  entry() {
    return Object.keys(this.props.fetchedEntry).map(key => this.props.fetchedEntry[key])[0] || {}
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
                  <Text>{ this.entry().title }</Text>
                  <Text note>{ this.entry().author }</Text>
                </Body>
              </Left>
            </CardItem>

            <CardItem cardBody>
              <Image style={{ resizeMode: 'contain', flex: 1, width: null, height: 200 }} source={{ uri: this.entry().cover_image_url }} />
            </CardItem>

            <CardItem content>
              <Text>{ this.entry().content }</Text>
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
    fetchedEntry: state.fetchedEntry
  };
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
