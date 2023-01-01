import { useRouter } from "next/router";
import { useState } from "react";
import { setAccessToken } from "../lib/accessToken";
import { MeDocument, MeQuery, useLoginMutation } from "../generated/graphql";
import Layout from "../components/Layout";

interface loginProps {}

const Login: React.FC<loginProps> = ({}) => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login] = useLoginMutation();

  return (
    <Layout>
      <form
        className="flex flex-col items-center justify-center"
        onSubmit={async (e) => {
          e.preventDefault();
          console.log("form submitted");
          const response = await login({
            variables: {
              email,
              password,
            },
            update: (store, { data }) => {
              if (!data) {
                return null;
              }

              store.writeQuery<MeQuery>({
                query: MeDocument,
                data: {
                  me: data.login.user,
                },
              });
            },
          });

          console.log(response);

          if (response && response.data) {
            setAccessToken(response.data.login.accessToken);
          }

          router.push("/");
        }}
      >
        <div className="mb-2 ">
          <input
            type="email"
            value={email}
            placeholder="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="border p-1 border-gray-400"
          />
        </div>
        <div className="mb-2">
          <input
            type="password"
            value={password}
            placeholder="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="border p-1 border-gray-400"
          />
        </div>
        <button type="submit" className="p-1 w-28 border border-gray-400">
          Login
        </button>
      </form>
    </Layout>
  );
};

export default Login;
