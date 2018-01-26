// 型定義のため
import QrcodeStore from '../../stores/QrcodeStore';

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
  Button,
  Divider,
} from 'semantic-ui-react';
import QRCode from 'qrcode';
import toSJIS from 'qrcode/helper/to-sjis';

interface Iprops {
  qrcode: QrcodeStore;
}

@inject('qrcode')
@observer
class Qrcode extends React.Component {

  toCanvas = () => {
    const {
      qrcode,
    } = this.props as Iprops;

    if (qrcode.text) {
      QRCode.toCanvas(document.getElementById('canvas'), qrcode.text, {
        width: qrcode.width,
        margin: qrcode.margin,
        toSJISFunc: toSJIS,
        color: {
          dark: qrcode.getDarkColor(),
          light: qrcode.getLightColor(),
        }
      });
    }
  }

  componentDidMount() {
    this.toCanvas();
  }

  render() {
    const {
      qrcode,
    } = this.props as Iprops;

    return (
      <Segment basic={true}>
        <Header as="h1" dividing={true}>
          <Icon name="qrcode" />QRCode
        </Header>
        <Form>
          <Form.Group>
            <Form.Input label="text" value={qrcode.text} onChange={qrcode.changeText} width={8} />
          </Form.Group>
          <Form.Group>
            <Form.Input label="width" value={qrcode.width} type="number" min={qrcode.widthMin} max={qrcode.widthMax} onChange={qrcode.changeWidth} width={2} />
            <Form.Input label="margin" value={qrcode.margin} type="number" min={qrcode.marginMin} max={qrcode.marginMax} onChange={qrcode.changeMargin} width={2} />
            <Form.Input label="color dark" value={qrcode.dark} pattern={qrcode.colorPattern} onChange={qrcode.changeDark} width={2} />
            <Form.Input label="color light" value={qrcode.light} pattern={qrcode.colorPattern} onChange={qrcode.changeLight} width={2} />
          </Form.Group>
          <Form.Group inline={true}>
            <Button.Group>
              <Button onClick={qrcode.resetAction}>Reset</Button>
              <Button.Or />
              <Button positive={true} onClick={this.toCanvas} disabled={!Boolean(qrcode.text)} >Create</Button>
            </Button.Group>
          </Form.Group>
        </Form>
        <Divider hidden={true} />
        <Segment compact={true}>
          <canvas id="canvas" />
        </Segment>
      </Segment>
    );
  }
}

export default Qrcode;
