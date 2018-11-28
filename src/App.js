import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';

import NotExists from './pages/NotExists';
import EmailSpam from './pages/EmailSpam';


export default function App() {
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

