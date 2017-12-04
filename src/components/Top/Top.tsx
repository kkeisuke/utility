// 型定義のため
import RoutesStore from '../../stores/RouterStore';

import * as React from 'react';
import {
  Link,
} from 'react-router-dom';
import {
  inject,
  observer,
} from 'mobx-react';
import {
  Header,
  Segment,
  List,
  Icon
} from 'semantic-ui-react';

interface Iprops {
  router: RoutesStore;
}

@inject('router')
@observer
class Top extends React.Component {
  render() {
    const {
      router,
    } = this.props as Iprops;

    return (
      <Segment basic={true}>
        <Header as="h1" icon={true} textAlign="center">
          <Header.Content>
            Utility
          </Header.Content>
          <Header.Subheader>
            utility.kkeisuke.com
          </Header.Subheader>
        </Header>
        <Header as="h2" dividing={true}>Introduction</Header>
        <Segment basic={true}>
          utility tools by <a href="http://kkeisuke.com" target="_blank">kkeisuke.com</a>
        </Segment>
        <Segment basic={true}>
          <List>
            <List.Item><a href="https://twitter.com/intent/tweet" className="twitter-share-button">Tweet</a></List.Item>
            <List.Item><a href="https://twitter.com/kkeisuke" className="twitter-follow-button" data-show-count="false">Follow @kkeisuke</a></List.Item>
            <List.Item>
              <a href="http://b.hatena.ne.jp/entry/" className="hatena-bookmark-button" data-hatena-bookmark-layout="basic-counter" title="このエントリーをはてなブックマークに追加">
                <img src="https://b.st-hatena.com/images/entry-button/button-only@2x.png" alt="このエントリーをはてなブックマークに追加" width="20" height="20" />
              </a>
            </List.Item>
            <List.Item><a className="github-button" href="https://github.com/kkeisuke/utility" data-icon="octicon-star" data-count-href="/kkeisuke/utility/stargazers" data-count-api="/repos/kkeisuke/utility#stargazers_count" data-count-aria-label="# stargazers on GitHub" aria-label="Star kkeisuke/utility on GitHub">Star</a></List.Item>
          </List>
        </Segment>
        <Header as="h2" dividing={true}>Contents</Header>
        <Segment basic={true}>
          <List divided={true} size="large">
            <List.Item>
              <List.Icon name="code" size="large" verticalAlign="middle" />
              <List.Content>
                <List.Header>
                  <Link to={router.route.sqlFormatter}>SQL format</Link>
                </List.Header>
                <List.Description>
                  pretty-printing SQL queries by <a href="https://github.com/zeroturnaround/sql-formatter" target="_blank">zeroturnaround/sql-formatter</a>
                </List.Description>
              </List.Content>
            </List.Item>
          </List>
        </Segment>
        <Header as="h2">Others</Header>
        <Segment basic={true}>
          <List divided={true} size="large">
            <List.Item>
              <List.Icon name="code" size="large" verticalAlign="middle" />
              <List.Content>
                <List.Header>
                  <a href="https://plantuml-editor.kkeisuke.com/" target="_blank">
                    PlantUML Editor <Icon name="external" />
                  </a>
                </List.Header>
                <List.Description>
                  PlantUML online demo client
                </List.Description>
              </List.Content>
            </List.Item>
          </List>
        </Segment>
      </Segment>
    );
  }
}

export default Top;
