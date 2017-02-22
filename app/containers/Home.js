import React, { Component } from 'react';
import { Container, Header, Title, Content, Tab, Tabs, TabHeading, Icon, Body, Right, Left, Button } from 'native-base';
import ScrollableTabBar  from 'native-base/src/basic/Tabs/ScrollableTabBar'
import { View, Text, Dimensions } from 'react-native';
import { connect } from 'react-redux'
import Book from '../components/Book';

class Home extends Component {

  componentDidMount() {
    this.props.fetchBooks();
  }

  books() {
    return Object.keys(this.props.fetchedBooks).map(key => this.props.fetchedBooks[key])
  }

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
          <Tab heading={ <TabHeading><Text>Recommended</Text></TabHeading> }>
            <Content padder>
              { this.books().map((book, i) =>
                <Book
                  key={ book.id }
                  title={ book.title }
                  author={ book.author }
                  cover={ book.cover }
                  description={ book.description }
                  views={ book.views }
                  stars={ book.stars }
                />
              )}
            </Content>
          </Tab>
          <Tab heading={ <TabHeading><Text>Science Fiction</Text></TabHeading> }>
            <Content>
            </Content>
          </Tab>
          <Tab heading={ <TabHeading><Text>Romance</Text></TabHeading> }>
            <Content>
            </Content>
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    fetchedBooks: state.fetchedBooks
  };
}

export default connect(mapStateToProps)(Home);
