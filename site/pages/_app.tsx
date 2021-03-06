import type { AppProps } from "next/app";

import { APIProvider } from "../gateway";
import { GlobalStyle } from "../styles/GlobalStyle";

function App({ Component, pageProps }: AppProps) {
  return (
    <APIProvider type="mock">
      <GlobalStyle />
      <Component {...pageProps} />
    </APIProvider>
  );
}

export default App;
