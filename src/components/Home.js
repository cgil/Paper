import React, { Component } from 'react';
import { Container, Header, Title, Content, Tab, Tabs, TabHeading, Icon, Body, Right, Left, Button } from 'native-base';
import { View, Text, Dimensions } from 'react-native';
import Book from './Book';

const { width } = Dimensions.get('window');

export default class Home extends Component {

  render() {
    return (
      <Container>
        <Header hasTabs>
          <Left>
            <Button transparent active>
             <Icon name="book" />
            </Button>
          </Left>
          <Body>
            <Title>Home</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name="search" />
            </Button>
          </Right>
        </Header>
        <Tabs>
          <Tab heading="Recommended">
            <Content padder>
              <Book title="Book Title" author="Carlo" />
              <Book title="Book Title" author="Carlo" />
              <Book title="Book Title" author="Carlo" />
            </Content>
          </Tab>
          <Tab heading="Science Fiction">
            <Content>
            </Content>
          </Tab>
          <Tab heading="Romance">
            <Content>
            </Content>
          </Tab>
        </Tabs>
      </Container>
    );
  }
}