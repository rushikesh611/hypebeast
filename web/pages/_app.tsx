import { ApolloProvider } from "@apollo/client/react";
import App from "next/app";
import { withApollo } from "../lib/apollo";
import "../styles/globals.css";

class MyApp extends App<any> {
  render() {
    const { Component, pageProps, apolloClient } = this.props;
    return (
      <ApolloProvider client={apolloClient}>
        <Component {...pageProps} />
      </ApolloProvider>
    );
  }
}

export default withApollo(MyApp);
