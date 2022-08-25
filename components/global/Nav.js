import Head from "next/head";
import config from "/config.js";

export default function Nav() {
  return (
    <>
      <Head>
        <title>Dev</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <nav>
        <ul></ul>
      </nav>
    </>
  );
}
