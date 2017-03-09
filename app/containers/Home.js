import React, { Component } from 'react';
import { Container, Header, Title, Content, Tab, Tabs, TabHeading, Icon, Body, Right, Left, Button, List } from 'native-base';
import { View, Text, Dimensions, RefreshControl } from 'react-native';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../actions'
import ArticleCard from '../components/ArticleCard';
import { DETAIL } from '../constants/routes'

class Home extends Component {

  constructor(props) {
    super(props)
    this.state = { refreshing: false }
  }

  componentDidMount() {
    if (this.entries().length === 0) {
        this.props.fetchEntries();
    }
  }

  entries() {
    return Object.keys(this.props.fetchedEntries).map(key => this.props.fetchedEntries[key]).reverse()
  }

  _onRefresh() {
    this.setState({refreshing: true});
    this.props.fetchEntries().then(() => {
      this.setState({refreshing: false});
    });
  }

  render() {

    setCurrentReadOffset = (event) => {
      let currentOffset = Math.floor(event.nativeEvent.contentOffset.y);
      let bottom = event.nativeEvent.layout.height;
      let currentItemIndex = Math.ceil(currentOffset / itemHeight);
      this.state.setReadOffset(currentItemIndex);
    }

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
            <View style={{ paddingHorizontal: 0, marginHorizontal: 0 }}>
              <List
                refreshControl={
                  <RefreshControl
                    refreshing={this.state.refreshing}
                    onRefresh={this._onRefresh.bind(this)}
                  />
                }
                dataArray={this.entries()}
                renderRow={(entry) =>
                  <ArticleCard
                    key={ entry.id }
                    title={ entry.id }
                    author={ entry.channel_title }
                    media_image_url={ entry.media_image_url }
                    description={ entry.description }
                    link={ entry.link }
                    views={ entry.views }
                    stars={ entry.stars }
                    onPress={ () => {
                      this.props.navigate({ key: DETAIL, link: entry.link })
                    }}
                  />
                }
              />
            </View>
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
