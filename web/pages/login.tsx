import { useRouter } from "next/router";
import { useState } from "react";
import { useLoginMutation } from "../generated/graphql";

interface loginProps {}

const Login: React.FC<loginProps> = ({}) => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login] = useLoginMutation();

  return (
    <form
      className="flex flex-col items-center justify-center"
      onSubmit={async (e) => {
        e.preventDefault();
        const response = await login({
          variables: {
            email,
            password,
          },
        });
        router.push("/");
        console.log(response);
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
  );
};

export default Login;
