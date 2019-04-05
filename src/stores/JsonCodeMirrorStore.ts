// 型定義のため
import * as codemirror from 'codemirror';
import {
  DropdownProps,
} from 'semantic-ui-react';

import {
  observable,
  action,
} from 'mobx';

export default class JsonCodeMirrorStore {
  @observable options: codemirror.EditorConfiguration = {
    lineNumbers: true,
    mode: 'application/ld+json',
    theme: 'solarized dark',
    indentUnit: 2,
    indentWithTabs: false
  };

  setIndentUnit(value: number) {
    // タブの場合は４
    this.options.indentUnit = value > 0 ? value : 4;
  }

  setIndentWithTabs(value: number) {
    // タブ = true, 2, 4 = false
    this.options.indentWithTabs = !(value > 0);
  }

  @action.bound setIndent(e: React.FormEvent<HTMLElement>, {value}: DropdownProps) {
    this.setIndentUnit(Number(value));
    this.setIndentWithTabs(Number(value));
  }
}
