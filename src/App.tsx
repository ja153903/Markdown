import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { MarkdownContainer } from './containers';

import './App.global.css';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={MarkdownContainer} />
      </Switch>
    </Router>
  );
}
