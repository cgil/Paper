import React, { Component } from 'react';
import { Container, Header, Title, Content, Tab, Tabs, TabHeading, Icon, Body, Right, Left, Button } from 'native-base';
import { View, Text, Dimensions } from 'react-native';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../actions'
import ArticleCard from '../components/ArticleCard';
import { DETAIL } from '../constants/routes'

class Home extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    if (this.entries().length === 0) {
        this.props.fetchEntries();
    }
  }

  entries() {
    return Object.keys(this.props.fetchedEntries).map(key => this.props.fetchedEntries[key])
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
            <Content style={{ paddingHorizontal: 0, marginHorizontal: 0 }}>
              { this.entries().map((entry, i) =>
                <ArticleCard
                  key={ entry.id }
                  title={ entry.title }
                  author={ entry.channel_title }
                  media_image_url={ entry.media_image_url }
                  description={ entry.description }
                  views={ entry.views }
                  stars={ entry.stars }
                  onPress={ () => {
                    this.props.navigate({ key: DETAIL, id: entry.id })
                  }}
                />
              )}
            </Content>
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    fetchedEntries: state.fetchedEntries
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
