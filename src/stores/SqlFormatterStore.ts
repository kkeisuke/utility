// 型定義のため
import * as codemirror from 'codemirror';

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
      this.text = text;
      this.sql = sqlFormatter.format(text);
    } else {
      this.sql = this.defaultText;
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
    if (window.localStorage) {
      window.localStorage.setItem(this.localStorageKey, text);
    }
  }

  setSql(text: string) {
    this.sql = text || this.defaultText;
  }

  @action.bound format(e: React.ChangeEvent<HTMLTextAreaElement>) {
    this.setText(e.target.value);
    this.setSql(sqlFormatter.format(e.target.value));
  }

  @action.bound changeSql(editor: codemirror.Editor, data: codemirror.EditorChange, value: string) {
    this.setSql(value);
  }
}
