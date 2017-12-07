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

const stores = {
  router: new RouterStore(),
  sqlFormatter: new SqlFormatterStore(),
  sqlCodeMirror: new SqlCodeMirrorStore(),
  jsonFormatter: new JsonFormatterStore(),
  jsonCodeMirror: new JsonCodeMirrorStore(),
};

ReactDOM.render(
  <Provider {...stores}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
