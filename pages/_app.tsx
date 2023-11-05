import '../styles/globals.css';
import Layout from '../components/layout';

type Props = {
  Component: React.ComponentType<any>;
  pageProps: {};
};
export default function MyApp({ Component, pageProps }: Props) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
