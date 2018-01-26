// 型定義のため
import { InputOnChangeData } from 'semantic-ui-react';

import {
  observable,
  action,
} from 'mobx';

export default class JsonCodeMirrorStore {
  @observable text: string;
  @observable width: number;
  @observable margin: number;
  @observable marginMin: number = 0;
  @observable marginMax: number = 100;
  @observable widthMin: number = 0;
  @observable widthMax: number = 2000;
  @observable dark: string;
  @observable light: string;
  @observable colorPattern: string = '^[0-9A-Fa-f]+$';

  textDefault: string = 'sample';
  widthDefault: number = 200;
  marginDefault: number = 0;
  darkDefault: string = '000000FF';
  defaultLight: string = 'FFFFFF00';

  deleteMessage: string = 'Can I reset it?';

  constructor() {
    this.reset();
  }

  setText(text: string) {
    this.text = text;
  }

  setWidth(width: number) {
    this.width = width <= this.widthMax ? width : this.widthMax;
  }

  setMargin(margin: number) {
    this.margin = margin <= this.marginMax ? margin : this.marginMax;
  }

  setDark(dark: string) {
    this.dark = dark;
  }

  setLight(light: string) {
    this.light = light;
  }

  isHexadecimal(color: string): boolean {
    return color.match(this.colorPattern) !== null;
  }

  reset() {
    this.setText(this.textDefault);
    this.setWidth(this.widthDefault);
    this.setMargin(this.marginDefault);
    this.setDark(this.darkDefault);
    this.setLight(this.defaultLight);
  }

  @action.bound changeText(e: React.SyntheticEvent<HTMLInputElement>, data: InputOnChangeData) {
    this.setText(String(data.value));
  }

  @action.bound changeWidth(e: React.SyntheticEvent<HTMLInputElement>, data: InputOnChangeData) {
    this.setWidth(Number(data.value));
  }

  @action.bound changeMargin(e: React.SyntheticEvent<HTMLInputElement>, data: InputOnChangeData) {
    this.setMargin(Number(data.value));
  }

  @action.bound changeDark(e: React.SyntheticEvent<HTMLInputElement>, data: InputOnChangeData) {
    this.setDark(String(data.value));
  }

  @action.bound changeLight(e: React.SyntheticEvent<HTMLInputElement>, data: InputOnChangeData) {
    this.setLight(String(data.value));
  }

  @action.bound getDarkColor(): string {
    return `#${this.isHexadecimal(this.dark) ? this.dark : this.darkDefault}`;
  }

  @action.bound getLightColor(): string {
    return `#${this.isHexadecimal(this.light) ? this.light : this.defaultLight}`;
  }

  @action.bound resetAction() {
    if (window.confirm(this.deleteMessage)) {
      this.reset();
    }
  }
}
