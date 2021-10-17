import "../styles/globals.css";
import Layout from "../components/Layout";
import { ProductsProvider } from "../context/ProductsContext";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <ProductsProvider>
        <Component {...pageProps} />
      </ProductsProvider>
    </Layout>
  );
}

export default MyApp;
