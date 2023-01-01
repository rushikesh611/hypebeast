import React from "react";
import { useByeQuery } from "../generated/graphql";
import Layout from "../components/Layout";

interface byeProps {}

const Bye: React.FC<byeProps> = ({}) => {
  const { data, loading, error } = useByeQuery();

  if (loading) {
    return (
      <Layout>
        <div>loading...</div>
      </Layout>
    );
  }

  if (error) {
    console.log(error);
    return (
      <Layout>
        <div>err</div>
      </Layout>
    );
  }

  if (!data) {
    return (
      <Layout>
        <div>no data</div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div>{data.bye}</div>
    </Layout>
  );
};

export default Bye;
