// 型定義のため
import SqlFormatterStore from '../../stores/SqlFormatterStore';
import SqlCodeMirrorStore from '../../stores/SqlCodeMirrorStore';

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

import './SqlFormatter.css';

interface Iprops {
  sqlFormatter: SqlFormatterStore;
  sqlCodeMirror: SqlCodeMirrorStore;
}

@inject('sqlFormatter')
@inject('sqlCodeMirror')
@observer
class SqlFormatter extends React.Component {
  render() {
    const {
      sqlFormatter,
      sqlCodeMirror,
    } = this.props as Iprops;

    return (
      <Segment basic={true}>
        <Header as="h1" dividing={true}>
          <Icon name="code" />SQL format
        </Header>
        <Form>
          <Form.TextArea label="SQL" value={sqlFormatter.text} onChange={sqlFormatter.format} />
          <Form.Group>
            <Form.Select label="mode" options={sqlCodeMirror.modes} value={sqlCodeMirror.options.mode} onChange={sqlCodeMirror.setOptions} />
          </Form.Group>
        </Form>
        <CodeMirror value={sqlFormatter.sql} onBeforeChange={sqlFormatter.changeSql} options={sqlCodeMirror.options} />
      </Segment>
    );
  }
}

export default SqlFormatter;
