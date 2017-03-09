import React, { Component } from 'react'
import {
  Container, Header, Title, Content, Tab, Tabs, TabHeading,
  Icon, Body, Right, Left, Button, Card, CardItem, Grid,
  Col, Row
} from 'native-base'
import { View, Text, Dimensions, Image, WebView } from 'react-native'
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
    media_image_url: React.PropTypes.string,
    content: React.PropTypes.string,
    views: React.PropTypes.number,
    stars: React.PropTypes.number,
  }

  static defaultProps = {
    views: 0,
    stars: 0,
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
            <Title>Paper Detail</Title>
          </Body>
          <Right/>
        </Header>

        <WebView
            source={{ uri: this.props.navigationParams.link }}
        />
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
