import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from '@reach/router';

import Details from './Details';
import Results from "./Results";

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Results path="/" />
          <Details path="/details/:id" />
        </Router>
      </div>
    )
  }
}

ReactDOM.render(React.createElement(App), document.getElementById("root"));
