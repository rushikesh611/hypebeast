import { gql } from "@apollo/client/core";
import { useQuery } from "@apollo/client/react";

import type { NextPage } from "next";

const Home: NextPage = () => {
  const { data, loading } = useQuery(gql`
    {
      hello
    }
  `);

  if (loading) {
    return <div>loading...</div>;
  }

  return (
    <div>
      <h1 className="text-lg">{JSON.stringify(data)}</h1>
    </div>
  );
};

export default Home;
