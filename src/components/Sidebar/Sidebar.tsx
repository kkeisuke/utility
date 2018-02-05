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
        <Menu.Item name={router.route.top.path} active={router.isActive(router.route.top.path)} onClick={router.goTo}>
          <Icon name="home" />TOP
        </Menu.Item>
        <Menu.Item name={router.route.sqlFormatter.path} active={router.isActive(router.route.sqlFormatter.path)} onClick={router.goTo}>
          <Icon name="code" />SQL format
        </Menu.Item>
        <Menu.Item name={router.route.jsonFormatter.path} active={router.isActive(router.route.jsonFormatter.path)} onClick={router.goTo}>
          <Icon name="code" />JSON format
        </Menu.Item>
        <Menu.Item name={router.route.qrcode.path} active={router.isActive(router.route.qrcode.path)} onClick={router.goTo}>
          <Icon name="qrcode" />QRCode
        </Menu.Item>
        <Menu.Item href="https://plantuml-editor.kkeisuke.com/" target="_blank">
          <Icon name="external" />PlantUML Editor
        </Menu.Item>
      </Menu>
    );
  }
}

export default Sidebar;
