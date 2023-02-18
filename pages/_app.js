import Layout from "@/components/Layout";
import { ThemeProvider } from "next-themes";
import "styles/index.scss";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
