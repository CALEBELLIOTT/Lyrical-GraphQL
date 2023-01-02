import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from "apollo-client";
// React Apollo links apollo client with react
import { ApolloProvider } from "react-apollo";
import SongList from "./components/SongList";

// Creates the client => stores info from GraphQL
// Assumes graphql endpoint will be on the /graphql endpoint
// if you change things like this, config object may not be empty
const client = new ApolloClient({})

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <SongList></SongList>
    </ApolloProvider>
  )
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
