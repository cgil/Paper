import React, { Component } from 'react';
import { Container, Header, Title, Content, Tab, Tabs, TabHeading, Icon, Body, Right, Left, Button } from 'native-base';
import { View, Text, Dimensions } from 'react-native';
import { connect } from 'react-redux'

class Reader extends Component {

  render() {
    return (
      <Container>
        <Text>Inside</Text>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
  };
}

export default connect(mapStateToProps)(Reader);
