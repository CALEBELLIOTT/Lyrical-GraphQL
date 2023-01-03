import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from "apollo-client";
// React Apollo links apollo client with react
import { ApolloProvider } from "react-apollo";
import SongList from "./components/SongList";
import App from "./components/App"
import SongCreate from "./components/SongCreate"
import { Router, Route, hashHistory, IndexRoute } from "react-router"

// Creates the client => stores info from GraphQL
// Assumes graphql endpoint will be on the /graphql endpoint
// if you change things like this, config object may not be empty
const client = new ApolloClient({})

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={SongList}></IndexRoute>
          <Route path="/songs/new" component={SongCreate}></Route>
        </Route>
      </Router>
    </ApolloProvider>
  )
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
