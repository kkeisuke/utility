// 型定義のため
import { MenuItemProps } from 'semantic-ui-react';
import { Location } from 'history';

import {
  // observable,
  // computed,
  action,
} from 'mobx';
import { createBrowserHistory } from 'history';

export default class RouterStore {
  history = createBrowserHistory();
  route: { [ key: string ]: { path: string; title: string } } = {
    top: {
      path: '/',
      title: 'Utility'
    },
    sqlFormatter: {
      path: '/sql_formatter',
      title: 'SQL format : Utility'
    },
    jsonFormatter: {
      path: '/json_formatter',
      title: 'JSON format : Utility'
    },
    qrcode: {
      path: '/qrcode',
      title: 'QRCode : Utility'
    },
    dummySVG: {
      path: '/dummy_svg',
      title: 'Dummy SVG : Utility'
    }
  };

  constructor() {
    this.changeTitle(this.history.location);
    this.history.listen((location: Location) => {
      this.changeTitle(location);
    });
  }

  changeTitle(location: Location) {
    for (const route in this.route) {
      if (this.route.hasOwnProperty(route) && this.route[route].path === location.pathname) {
        document.title = this.route[route].title;
      }
    }
  }

  @action.bound isActive(path: string): boolean {
    return location.pathname === path;
  }

  @action.bound goTo(event: React.MouseEvent<HTMLElement>, {name}: MenuItemProps) {
    this.history.push(String(name));
  }
}
