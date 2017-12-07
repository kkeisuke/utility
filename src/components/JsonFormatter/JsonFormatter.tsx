// 型定義のため
import JsonFormatterStore from '../../stores/JsonFormatterStore';
import JsonCodeMirrorStore from '../../stores/JsonCodeMirrorStore';
import {
  FormProps,
} from 'semantic-ui-react';

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
} from 'semantic-ui-react';
import { Controlled as CodeMirror } from 'react-codemirror2';

import './JsonFormatter.css';

interface Iprops {
  jsonFormatter: JsonFormatterStore;
  jsonCodeMirror: JsonCodeMirrorStore;
}

@inject('jsonFormatter')
@inject('jsonCodeMirror')
@observer
class JsonFormatter extends React.Component {

  indentChange = (e: React.ChangeEvent<HTMLSelectElement>, props: FormProps) => {
    const {
      jsonFormatter,
      jsonCodeMirror,
    } = this.props as Iprops;

    jsonFormatter.setIndent(e, props);
    jsonCodeMirror.setIndent(e, props);
  }

  render() {
    const {
      jsonFormatter,
      jsonCodeMirror,
    } = this.props as Iprops;

    return (
      <Segment basic={true}>
        <Header as="h1" dividing={true}>
          <Icon name="code" />JSON format
        </Header>
        <Form>
          <Form.Group widths="equal">
            <Form.TextArea label="JSON" value={jsonFormatter.text} onChange={jsonFormatter.format} />
          </Form.Group>
          <Form.Group>
            <Form.Select label="indent" options={jsonFormatter.indents} value={jsonFormatter.indent} onChange={this.indentChange} />
          </Form.Group>
        </Form>
        <CodeMirror value={jsonFormatter.json} onBeforeChange={jsonFormatter.changeJson} options={jsonCodeMirror.options} />
      </Segment>
    );
  }
}

export default JsonFormatter;
