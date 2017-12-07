// 型定義のため
import { MenuItemProps } from 'semantic-ui-react';

import {
  // observable,
  // computed,
  action,
} from 'mobx';
import createBrowserHistory from 'history/createBrowserHistory';

export default class RouterStore {
  history = createBrowserHistory();
  route = {
    top: '/',
    sqlFormatter: '/sql_formatter',
    jsonFormatter: '/json_formatter',
  };

  @action.bound isActive(path: string): boolean {
    return location.pathname === path;
  }

  @action.bound goTo(event: React.MouseEvent<HTMLElement>, {name}: MenuItemProps) {
    this.history.push(String(name));
  }
}
