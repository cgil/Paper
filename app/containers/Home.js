import React, { Component } from 'react';
import { Container, Header, Title, Content, Tab, Tabs, TabHeading, Icon, Body, Right, Left, Button } from 'native-base';
import { View, Text, Dimensions } from 'react-native';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../actions'
import BookCard from '../components/BookCard';
import { DETAIL } from '../constants/routes'

class Home extends Component {

  constructor(props) {
    super(props)
  }

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
                <BookCard
                  key={ book.id }
                  title={ book.title }
                  author={ book.author }
                  cover={ book.cover }
                  description={ book.description }
                  views={ book.views }
                  stars={ book.stars }
                  onPress={ () => {
                    this.props.navigate({ key: DETAIL, id: book.id })
                  }}
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
