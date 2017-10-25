import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import { Provider } from 'redux-zero/react';
import store from './store';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const Index = () => (
   <Provider store={store}>
      <HashRouter>
         <Switch>
            <Route path="/" component={App} />
         </Switch>
      </HashRouter>
   </Provider>
);

ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();
