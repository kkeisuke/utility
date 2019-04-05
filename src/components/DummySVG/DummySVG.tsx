// 型定義のため
import DummySVGStore from '../../stores/DummySVGStore';

import * as React from 'react';
import {
  inject,
  observer,
} from 'mobx-react';
import {
  Header,
  Segment,
  Form,
  Icon,
  Divider,
  Button,
  Ref,
} from 'semantic-ui-react';

import './DummySVG.css';

interface Iprops {
  dummySVG: DummySVGStore;
}

@inject('dummySVG')
@observer
class DummySVG extends React.Component<Iprops> {

  timer: number = 0;
  svgHTML: string = '';
  src: string = '';
  href: string = '';
  inputWidth: React.RefObject<HTMLDivElement>;
  inputHeight: React.RefObject<HTMLDivElement>;
  inputFontSize: React.RefObject<HTMLDivElement>;
  svg: React.RefObject<HTMLDivElement>;
  canvas: React.RefObject<HTMLCanvasElement>;

  constructor(props: Iprops) {
    super(props);
    this.inputWidth = React.createRef();
    this.inputHeight = React.createRef();
    this.inputFontSize = React.createRef();
    this.svg = React.createRef();
    this.canvas = React.createRef();
  }

  componentDidMount() {
    this.onFocus();
    this.componentDidUpdate();
  }

  componentDidUpdate() {
    if (this.timer) {
      window.clearTimeout(this.timer);
    }
    this.timer = window.setTimeout(() => {
      this.setSVGHTML();
      this.drawImage();
    }, 500);
  }

  componentWillUnmount() {
    window.clearTimeout(this.timer);
  }

  onFocus = () => {
    if (this.inputWidth.current && this.inputWidth.current.children[1]) {
      const inputWidth = this.inputWidth.current.children[1].children[0] as HTMLInputElement;
      inputWidth.addEventListener('focus', () => {
        inputWidth.select();
      });
    }
    if (this.inputHeight.current && this.inputHeight.current.children[1]) {
      const inputHeight = this.inputHeight.current.children[1].children[0] as HTMLInputElement;
      inputHeight.addEventListener('focus', () => {
        inputHeight.select();
      });
    }
    if (this.inputFontSize.current && this.inputFontSize.current.children[1]) {
      const inputFontSize = this.inputFontSize.current.children[1].children[0] as HTMLInputElement;
      inputFontSize.addEventListener('focus', () => {
        inputFontSize.select();
      });
    }
  }

  setSVGHTML = () => {
    this.svgHTML = this.svg.current ? this.svg.current.innerHTML : '';
  }

  drawImage = () => {
    const ctx = this.canvas.current ? this.canvas.current.getContext('2d') : null;
    if (ctx) {
      this.src = `data:image/svg+xml;charset=utf-8;base64,${btoa(unescape(encodeURIComponent(this.svgHTML)))}`;
      const img = new Image();
      img.src = this.src;
      img.onload = () => {
        ctx.imageSmoothingQuality = 'high';
        ctx.drawImage(img, 0, 0);
        this.forceUpdate();
      };
    }
  }

  download = () => {
    const {
      dummySVG,
    } = this.props as Iprops;

    const a = document.createElement('a');
    this.href = this.canvas.current ? this.canvas.current.toDataURL('image/png') : '';
    a.href = this.href;
    a.download = `${dummySVG.text || dummySVG.background}.png`;
    document.body.appendChild(a); // for firefox
    a.click();
    document.body.removeChild(a); // for firefox
  }

  render() {
    const {
      dummySVG,
    } = this.props as Iprops;

    return (
      <Segment basic={true}>
        <Header as="h1" dividing={true}>
          <Icon name="image" />Dummy SVG
        </Header>
        <Form>
          <Form.Group>
            <Ref innerRef={this.inputWidth}>
              <Form.Input label="width" value={dummySVG.width} type="number" onChange={dummySVG.changeWidth} width={2} />
            </Ref>
            <Ref innerRef={this.inputHeight}>
              <Form.Input label="height" value={dummySVG.height} type="number" onChange={dummySVG.changeHeight} width={2} />
            </Ref>
            <Form.Input label="text" value={dummySVG.text} onChange={dummySVG.changeText} width={4} />
          </Form.Group>
          <Form.Group>
            <Form.Input label="background" value={dummySVG.background} onChange={dummySVG.changeBackground} width={2} />
            <Form.Input label="color" value={dummySVG.color} onChange={dummySVG.changeColor} width={2} />
          </Form.Group>
          <Form.Group>
            <Ref innerRef={this.inputFontSize}>
              <Form.Input label="font size" value={dummySVG.fontSize} type="number" onChange={dummySVG.changeFontSize} width={2} />
            </Ref>
            <Form.Input label="font family" value={dummySVG.fontFamily} onChange={dummySVG.changeFontFamily} width={6} />
          </Form.Group>
          <Form.Group inline={true}>
            <Button positive={true} onClick={this.download} disabled={!Boolean(dummySVG.width) || !Boolean(dummySVG.height)}>download png image</Button>
          </Form.Group>
        </Form>
        <Divider hidden={true} />
        <div ref={this.svg}>
          <svg xmlns="http://www.w3.org/2000/svg" width={dummySVG.width} height={dummySVG.height} fontFamily={dummySVG.fontFamily} fontSize={dummySVG.fontSize}>
            <rect width={dummySVG.width} height={dummySVG.height} fill={`#${dummySVG.background}`}/>
            <text textAnchor="middle" x="50%" y="50%" dy=".3em" fill={`#${dummySVG.color}`}>
              {dummySVG.text}
            </text>
          </svg>
        </div>
        <canvas ref={this.canvas} width={dummySVG.width} height={dummySVG.height} className="canvas" />
        <Divider hidden={true} />
        <Form>
          <Form.Group>
            <Form.TextArea label="SVG" value={this.svgHTML} width={8} />
          </Form.Group>
          <Form.Group>
            <Form.TextArea label="data:image/svg+xml" value={this.src} width={8} />
          </Form.Group>
          <Form.Group>
            <Form.TextArea label="data:image/png" value={this.href} width={8} />
          </Form.Group>
        </Form>
      </Segment>
    );
  }
}

export default DummySVG;
 