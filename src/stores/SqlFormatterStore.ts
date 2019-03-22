// 型定義のため
import * as codemirror from 'codemirror';
import {
  TextAreaProps,
} from 'semantic-ui-react';

import {
  observable,
  // computed,
  action,
} from 'mobx';
import sqlFormatter from 'sql-formatter';

export default class SqlFormatterStore {
  defaultText: string = '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n';

  @observable text: string = '';
  @observable sql: string = '';

  localStorageKey: string = 'sqlFormatterStore.text';

  constructor() {
    const text: string = this.getText();
    if (text) {
      this.setText(text);
      this.setSql(this.sqlFormat(text));
    } else {
      this.setSql(this.defaultText);
    }
  }

  getText(): string {
    let text: string = '';
    if (window.localStorage && window.localStorage.getItem(this.localStorageKey) !== null ) {
      text = String(window.localStorage.getItem(this.localStorageKey));
    }
    return text;
  }

  setText(text: string) {
    this.text = text;
  }

  setlocalStorage(text: string) {
    if (window.localStorage) {
      window.localStorage.setItem(this.localStorageKey, text);
    }
  }

  setSql(text: string) {
    this.sql = text || this.defaultText;
  }

  sqlFormat(text: string): string {
    return sqlFormatter.format(text).split(';').join('\n;\n');
  }

  @action.bound format(e: React.FormEvent<HTMLTextAreaElement>, {value}: TextAreaProps) {
    this.setText(String(value));
    this.setlocalStorage(String(value));
    this.setSql(this.sqlFormat(String(value)));
  }

  @action.bound changeSql(editor: codemirror.Editor, data: codemirror.EditorChange, value: string) {
    this.setSql(value);
  }
}
