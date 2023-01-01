import Head from "next/head";
import { Header } from "./Header";

interface LayoutProps {
  children?: any;
  title?: string;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  title = "This is the default title",
}) => (
  <div>
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      {children}
    </div>
  </div>
);

export default Layout;
