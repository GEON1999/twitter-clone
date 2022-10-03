import { SWRConfig } from "swr";
import "../global.css";
import useUser from "../lib/useUser";

function ValidateUser() {
  useUser();
  return null;
}

export default function App({ Component, pageProps }: any) {
  return (
    <SWRConfig
      value={{
        fetcher: (url: string) =>
          fetch(url).then((response) => response.json()),
      }}
    >
      <ValidateUser />
      <Component {...pageProps} />
    </SWRConfig>
  );
}
