import type { NextPage } from "next";
import { Header } from "../components/Header";
import { useUsersQuery } from "../generated/graphql";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  const { data } = useUsersQuery({ fetchPolicy: "network-only" });

  if (!data) {
    return (
      <Layout>
        <div>loading...</div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div>
        <div>Users:</div>
        <ul>
          {data.users.map((x) => {
            return (
              <li key={x.id}>
                {x.email} {x.id}
              </li>
            );
          })}
        </ul>
      </div>
    </Layout>
  );
};

export default Home;
