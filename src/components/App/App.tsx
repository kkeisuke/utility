// 型定義のため
import RoutesStore from '../../stores/RouterStore';

import * as React from 'react';
import {
  Router,
  Route,
  Switch,
} from 'react-router-dom';
import {
  inject,
  observer,
} from 'mobx-react';

import Sidebar from '../Sidebar/Sidebar';
import Footer from '../Footer/Footer';
import Top from '../Top/Top';
import SqlFormatter from '../SqlFormatter/SqlFormatter';
import JsonFormatter from '../JsonFormatter/JsonFormatter';
import Qrcode from '../Qrcode/Qrcode';
import NotFound from './NotFound';

import 'semantic-ui-css/semantic.min.css';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/solarized.css';
import 'codemirror/mode/sql/sql.js';
import 'codemirror/mode/javascript/javascript.js';
import './App.css';

interface Iprops {
  router: RoutesStore;
}

@inject('router')
@observer
class App extends React.Component {
  render() {
    const {
      router
    } = this.props as Iprops;

    return (
      <Router history={router.history}>
        <div className="App">
          <Sidebar />
          <div className="main">
            <Switch>
              <Route exact={true} path="/" component={Top}/>
              <Route path="/sql_formatter" component={SqlFormatter}/>
              <Route path="/json_formatter" component={JsonFormatter}/>
              <Route path="/qrcode" component={Qrcode}/>
              <Route component={NotFound}/>
            </Switch>
            <Footer />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
