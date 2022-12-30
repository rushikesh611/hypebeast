interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <header className="text-lg flex justify-between max-w-xs">
      <a href="/">Home</a>
      <a href="/register">Register</a>
      <a href="/login">Login</a>
    </header>
  );
};
