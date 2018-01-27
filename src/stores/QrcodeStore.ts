// 型定義のため
import { InputOnChangeData } from 'semantic-ui-react';

import {
  observable,
  action,
} from 'mobx';

import QRCode from 'qrcode';
import toSJIS from 'qrcode/helper/to-sjis';

/**
 * @TODO https://stackoverflow.com/questions/17861447/html5-canvas-drawimage-how-to-apply-antialiasing
 * context.imageSmoothingQuality = "low|medium|high"
 * "It's currently only supported in Chrome."
 */
interface ChromeCanvasRenderingContext2D extends CanvasRenderingContext2D {
  imageSmoothingQuality: string;
}

export default class QrcodeStore {
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

  @observable file: HTMLInputElement;
  @observable canvas: HTMLCanvasElement;
  @observable context: ChromeCanvasRenderingContext2D;
  @observable icon: HTMLImageElement;
  @observable uploadedFile: File | null;
  @observable iconScale: number;
  @observable iconScaleStep: number = 0.01;
  @observable iconScaleMin: number = 0.1;
  @observable iconScaleMax: number = 1;

  textDefault: string = 'sample';
  widthDefault: number = 200;
  marginDefault: number = 0;
  darkDefault: string = '000000FF';
  defaultLight: string = 'FFFFFF00';
  defaultIconScale: number = 0.25;

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

  getDarkColor(): string {
    return `#${this.isHexadecimal(this.dark) ? this.dark : this.darkDefault}`;
  }

  setLight(light: string) {
    this.light = light;
  }

  getLightColor(): string {
    return `#${this.isHexadecimal(this.light) ? this.light : this.defaultLight}`;
  }

  setIconScale(iconScale: number) {
    this.iconScale = iconScale <= this.iconScaleMax ? iconScale : this.iconScaleMax;
  }

  isHexadecimal(color: string): boolean {
    return color.match(this.colorPattern) !== null;
  }

  resetIcon () {
    if (this.file) {
      this.file.value = '';
    }
    this.uploadedFile = null;
    this.icon = new Image();
  }

  reset() {
    this.setText(this.textDefault);
    this.setWidth(this.widthDefault);
    this.setMargin(this.marginDefault);
    this.setDark(this.darkDefault);
    this.setLight(this.defaultLight);
    this.setIconScale(this.defaultIconScale);
    this.resetIcon();
  }

  loadImg(uploadedFile: File) {
    if (uploadedFile) {
      this.uploadedFile = uploadedFile;
      if (this.uploadedFile.type.indexOf('image/') === 0) {
        this.icon.src = URL.createObjectURL(this.uploadedFile);
      }
    }
  }

  drawIcon() {
    let dw: number;
    let dh: number;

    if (this.icon.width > this.canvas.width * this.iconScale) {
      dw = this.canvas.width * this.iconScale;
    } else {
      dw = this.icon.width;
    }

    if (this.icon.height > this.canvas.height * this.iconScale) {
      dh = this.canvas.height * this.iconScale;
    } else {
      dh = this.icon.height;
    }

    const x: number = Math.ceil((this.canvas.width - dw) / 2);
    const y: number = Math.ceil((this.canvas.height - dh) / 2);

    if ('imageSmoothingQuality' in this.context) {
      this.context.imageSmoothingQuality = 'high';
    }

    this.context.drawImage(this.icon, x, y, dw, dh);
  }

  @action.bound toCanvas() {
    if (this.canvas) {
      QRCode.toCanvas(this.canvas, this.text || this.textDefault, {
        width: this.width || this.widthDefault,
        margin: this.margin || this.marginDefault,
        toSJISFunc: toSJIS,
        color: {
          dark: this.getDarkColor(),
          light: this.getLightColor(),
        }
      });
      if (this.icon && this.icon.src) {
        this.drawIcon();
      }
    }

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

  @action.bound changeIconScale(e: React.SyntheticEvent<HTMLInputElement>, data: InputOnChangeData) {
    this.setIconScale(Number(data.value));
  }

  @action.bound setFile(file: HTMLInputElement) {
    if (file) {
      this.file = file;
    }
  }

  @action.bound setCanvas(canvas: HTMLCanvasElement) {
    if (canvas) {
      this.canvas = canvas;
      const context = this.canvas.getContext('2d') as ChromeCanvasRenderingContext2D;
      if (context) {
        this.context = context;
      }
    }
  }

  @action.bound addFileReadEventListener() {
    if (this.file) {
      this.file.addEventListener('change', (e: Event) => {
        const target = e.target as HTMLInputElement;
        if (target.files && target.files.length) {
          this.loadImg(target.files[0]);
        }
      }, false);
    }
  }

  @action.bound resetAction() {
    if (window.confirm(this.deleteMessage)) {
      this.reset();
      this.toCanvas();
    }
  }
}
