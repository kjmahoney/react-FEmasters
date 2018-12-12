import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from '@reach/router';

import Details from './Details';
import Results from "./Results";
import SearchParams from "./SearchParams";

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Results path="/" />
          <Details path="/details/:id" />
          <SearchParams path="/search-params" />
        </Router>
      </div>
    )
  }
}

ReactDOM.render(React.createElement(App), document.getElementById("root"));
