import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import RouterStore from './stores/RouterStore';
import SqlFormatterStore from './stores/SqlFormatterStore';
import SqlCodeMirrorStore from './stores/SqlCodeMirrorStore';
import JsonFormatterStore from './stores/JsonFormatterStore';
import JsonCodeMirrorStore from './stores/JsonCodeMirrorStore';
import QrcodeStore from './stores/QrcodeStore';
import DummySVGStore from './stores/DummySVGStore';

const stores = {
  router: new RouterStore(),
  sqlFormatter: new SqlFormatterStore(),
  sqlCodeMirror: new SqlCodeMirrorStore(),
  jsonFormatter: new JsonFormatterStore(),
  jsonCodeMirror: new JsonCodeMirrorStore(),
  qrcode: new QrcodeStore(),
  dummySVG: new DummySVGStore(),
};

const provider = (
  <Provider {...stores}>
    <App />
  </Provider>
);

ReactDOM.render(provider, document.getElementById('root') as HTMLElement);
registerServiceWorker();
