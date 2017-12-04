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
