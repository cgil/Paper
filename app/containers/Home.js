import React, { Component } from 'react';
import { Container, Header, Title, Content, Tab, Tabs, TabHeading, Icon, Body, Right, Left, Button } from 'native-base';
import { View, Text, Dimensions, RefreshControl, ListView } from 'react-native';
import { connect } from 'react-redux'
import InfiniteScrollView from 'react-native-infinite-scroll-view';
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../actions'
import ArticleCard from '../components/ArticleCard';
import { DETAIL } from '../constants/routes'

class Home extends Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
      canLoadMore: false,
      refreshing: false,
      dataSource: new ListView.DataSource({
        rowHasChanged: this._rowHasChanged.bind(this),
      }),
    };

    // Update the data store with initial data.
    this.state.dataSource = this.getUpdatedDataSource(props);
  }

  async componentWillMount() {
    // Initial fetch for data, assuming that fetchedEntries is not yet populated.
    this._loadMoreContentAsync();
  }

  componentWillReceiveProps(nextProps) {
    // Trigger a re-render when receiving new props (when redux has more data).
    this.setState({
      dataSource: this.getUpdatedDataSource(nextProps),
    });
  }

  getUpdatedDataSource(props) {
    let rows = this.entries(props);
    let ids = rows.map((obj, index) => index);
    return this.state.dataSource.cloneWithRows(rows, ids);
  }

  _rowHasChanged(r1, r2) {
    return JSON.stringify(r1) !== JSON.stringify(r2);
  }

  _renderRefreshControl() {
    // Reload all data
    return (
      <RefreshControl
        refreshing={this.state.refreshing}
        onRefresh={this._loadMoreContentAsync.bind(this, 0)}
      />
    );
  }

  entries(props) {
    return Object.keys(props.fetchedEntries).map(key => props.fetchedEntries[key]).reverse()
  }

  _canLoadMore() {
    return this._lastLoadedId() != 1 && !this.state.refreshing && !!this.entries(this.props).length > 0;
  }

  _lastLoadedId() {
      let lastLoadedEntry = this.entries(this.props).slice(-1)
      let lastLoadedId = 0
      if (lastLoadedEntry.length > 0) {
        lastLoadedId = lastLoadedEntry[0]['id']
      }
      return lastLoadedId;
  }

  _loadMoreContentAsync = async (entryIdOffset) => {
    entryIdOffset = (entryIdOffset === undefined) ? this._lastLoadedId() : entryIdOffset;
    this.setState({refreshing: true});
    this.props.fetchEntries(entryIdOffset).then(() => {
      this.setState({refreshing: false});
    });
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
            <View style={{ paddingHorizontal: 0, marginHorizontal: 0 }}>
              <ListView
                refreshControl={this._renderRefreshControl()}
                renderScrollComponent={props => <InfiniteScrollView {...props} />}
                dataSource={this.state.dataSource}
                canLoadMore={this._canLoadMore.bind(this)}
                onLoadMoreAsync={this._loadMoreContentAsync.bind(this)}
                enableEmptySections={true}
                scrollRenderAheadDistance={4000}
                pageSize={2}
                firstLoader={true}
                renderRow={(entry) =>
                  <ArticleCard
                    key={ entry.id }
                    title={ entry.title }
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
