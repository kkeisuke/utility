// 型定義のため
import { InputOnChangeData } from 'semantic-ui-react';

import {
  observable,
  action,
} from 'mobx';

export default class DummySVGStore {
  @observable width: number = 200;
  @observable height: number = 100;
  @observable background: string = '336699';
  @observable color: string = 'fff';
  @observable text: string = '';
  @observable fontSize: number = 32;
  @observable fontFamily: string = 'Arial, Meiryo, sans-serif';

  constructor() {
    this.setTextFromSize();
  }

  setWidth(width: number) {
    this.width = width;
  }

  setHeight(height: number) {
    this.height = height;
  }

  setBackground(background: string) {
    this.background = background;
  }

  setColor(color: string) {
    this.color = color;
  }

  setText(text: string) {
    this.text = text;
  }

  setFontSize(fontSize: number) {
    this.fontSize = fontSize;
  }

  setFontFamily(fontFamily: string) {
    this.fontFamily = fontFamily;
  }

  setTextFromSize() {
    this.setText(`${this.width} x ${this.height}`);
  }

  @action.bound changeWidth(e: React.FormEvent<HTMLInputElement>, { value }: InputOnChangeData) {
    this.setWidth(Number(value));
    this.setTextFromSize();
  }

  @action.bound changeHeight(e: React.FormEvent<HTMLInputElement>, { value }: InputOnChangeData) {
    this.setHeight(Number(value));
    this.setTextFromSize();
  }

  @action.bound changeBackground(e: React.FormEvent<HTMLInputElement>, { value }: InputOnChangeData) {
    this.setBackground(value);
  }

  @action.bound changeColor(e: React.FormEvent<HTMLInputElement>, { value }: InputOnChangeData) {
    this.setColor(value);
  }

  @action.bound changeText(e: React.FormEvent<HTMLInputElement>, { value }: InputOnChangeData) {
    this.setText(value);
  }

  @action.bound changeFontSize(e: React.FormEvent<HTMLInputElement>, { value }: InputOnChangeData) {
    this.setFontSize(Number(value));
  }

  @action.bound changeFontFamily(e: React.FormEvent<HTMLInputElement>, { value }: InputOnChangeData) {
    this.setFontFamily(value);
  }
}
