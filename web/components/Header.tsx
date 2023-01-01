import Link from "next/link";
import { useLogoutMutation, useMeQuery } from "../generated/graphql";
import { setAccessToken } from "../lib/accessToken";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({}) => {
  const { data, loading } = useMeQuery();
  const [logout, { client }] = useLogoutMutation();

  let body: any = null;

  if (loading) {
    body = null;
  } else if (data && data.me) {
    body = <div>you are logged in as: {data.me.email}</div>;
  } else {
    body = <div>not logged in</div>;
  }

  return (
    <header>
      <nav className="text-lg flex justify-between max-w-xs">
        <Link href="/">Home</Link>
        <Link href="/register">Register</Link>
        <Link href="/login">Login</Link>
        <Link href="/bye">Bye</Link>
        {!loading && data && data.me ? (
          <button
            onClick={async () => {
              await logout();
              setAccessToken("");
              await client!.resetStore();
            }}
          >
            logout
          </button>
        ) : null}
      </nav>
      {body}
    </header>
  );
};
