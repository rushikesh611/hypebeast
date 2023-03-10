import { useRouter } from "next/router";
import { useState } from "react";
import { useRegisterMutation } from "../generated/graphql";
import Layout from "../components/Layout";

interface registerProps {}

const Register: React.FC<registerProps> = ({}) => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [register] = useRegisterMutation();

  return (
    <Layout>
      <form
        className="flex flex-col items-center justify-center"
        onSubmit={async (e) => {
          e.preventDefault();
          const response = await register({
            variables: {
              email,
              password,
            },
          });
          console.log(response);
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
          Register
        </button>
      </form>
    </Layout>
  );
};

export default Register;
