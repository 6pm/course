import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';

import NotExists from './pages/NotExists';
import EmailSpam from './pages/EmailSpam';

// redux
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'


function Routes() {
  return (
    <BrowserRouter>
      <div>
        {/* кастомна адреса */}
        <Route
          path="/user/:name"
          component={EmailSpam}
        />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />

          {/* як створити 404 сторінку */}
          <Route component={NotExists} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

// redux
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
)
export default App

