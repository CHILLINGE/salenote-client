import type { AppProps } from "next/app";

import { GlobalStyle } from "../styles/GlobalStyle";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default App;
