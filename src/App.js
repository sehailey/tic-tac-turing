import React, { Component } from "react";
import { graphql, QueryRenderer } from "react-relay";

import environment from "./Environment";

export default class extends Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query AppQuery {
            allUsers {
              id
            }
          }
        `}
        variables={{
          pageId: "1"
        }}
        render={({ error, props }) => {
          if (error) {
            return <div>Error!</div>;
          }
          if (!props) {
            return <div>Loading...</div>;
          }
          return <div>User ID: {props}</div>;
        }}
      />
    );
  }
}
