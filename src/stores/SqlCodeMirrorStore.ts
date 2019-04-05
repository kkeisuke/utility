// 型定義のため
import {
  DropdownProps,
  DropdownItemProps,
} from 'semantic-ui-react';
import * as codemirror from 'codemirror';

import {
  observable,
  action,
} from 'mobx';

export default class SqlCodeMirrorStore {
  @observable options: codemirror.EditorConfiguration = {
    lineNumbers: true,
    mode: 'text/x-sql',
    theme: 'solarized dark',
  };

  modes: DropdownItemProps[] = [
    {
      key: 'sql',
      text: 'text/x-sql',
      value: 'text/x-sql',
    },
    {
      key: 'mysql',
      text: 'text/x-mysql',
      value: 'text/x-mysql',
    },
    {
      key: 'mssql',
      text: 'text/x-mssql',
      value: 'text/x-mssql',
    },
    {
      key: 'pgsql',
      text: 'text/x-pgsql',
      value: 'text/x-pgsql',
    },
  ];

  localStorageKey: string = 'sqlCodeMirrorStore.options.mode';

  constructor() {
    const mode: string = this.getMode();
    if (mode) {
      this.setMode(mode);
    }
  }

  getMode(): string {
    let mode: string = '';
    if (window.localStorage && window.localStorage.getItem(this.localStorageKey) !== null ) {
      mode = String(window.localStorage.getItem(this.localStorageKey));
    }
    return mode;
  }

  setMode(value: string) {
    this.options.mode = value;
  }

  setlocalStorage(value: string) {
    if (window.localStorage) {
      window.localStorage.setItem(this.localStorageKey, value);
    }
  }

  @action.bound setOptions(e: React.FormEvent<HTMLElement>, {value}: DropdownProps) {
    this.setMode(String(value));
    this.setlocalStorage(String(value));
  }
}
