import React, { Component } from 'react';
import { Container, Header, Title, Content, Tab, Tabs, TabHeading, Icon, Body, Right, Left, Button } from 'native-base';
import { View, Text, Dimensions } from 'react-native';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../actions'

class Detail extends Component {

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
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
