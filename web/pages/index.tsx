import type { NextPage } from "next";
import { Header } from "../components/Header";
import { useUsersQuery } from "../generated/graphql";

const Home: NextPage = () => {
  const { data } = useUsersQuery({ fetchPolicy: "network-only" });

  if (!data) {
    return <div>loading...</div>;
  }

  return (
    <div>
      <Header />

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
    </div>
  );
};

export default Home;
