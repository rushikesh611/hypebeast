import type { NextPage } from "next";
import { useHelloQuery } from "../generated/graphql";
import { Header } from "../components/Header";

const Home: NextPage = () => {
  const { data, loading } = useHelloQuery();

  if (loading || !data) {
    return <div>loading...</div>;
  }

  return (
    <div>
      <Header />
      <h1 className="text-lg">{data.hello}</h1>
    </div>
  );
};

export default Home;
