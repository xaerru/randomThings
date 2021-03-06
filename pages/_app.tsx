import { AppProps } from "next/app";
import "../styles/styles.css";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />;
}
