import Head from "next/head";
import Image from "next/image";
import Nav from "/components/global/Nav.js";
import config from "/config.js";

export default function Home() {
  return (
    <>
      <Nav></Nav>
      <h1>Hello!</h1>
    </>
  );
}
