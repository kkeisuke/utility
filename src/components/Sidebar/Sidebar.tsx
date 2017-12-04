// 型定義のため
import RoutesStore from '../../stores/RouterStore';

import * as React from 'react';
import {
  inject,
  // observer,
} from 'mobx-react';
import {
  Menu,
  Icon,
} from 'semantic-ui-react';

interface Iprops {
  router: RoutesStore;
}

@inject('router')
// @observer
class Sidebar extends React.Component {
  render() {
    const {
      router,
    } = this.props as Iprops;

    return (
      <Menu size="small" fixed="left" vertical={true} inverted={true}>
        <Menu.Item header={true}>
          Utility
        </Menu.Item>
        <Menu.Item name={router.route.top} active={router.isActive(router.route.top)} onClick={router.goTo}>
          <Icon name="home" />TOP
        </Menu.Item>
        <Menu.Item name={router.route.sqlFormatter} active={router.isActive(router.route.sqlFormatter)} onClick={router.goTo}>
          <Icon name="code" />SQL format
        </Menu.Item>
      </Menu>
    );
  }
}

export default Sidebar;
