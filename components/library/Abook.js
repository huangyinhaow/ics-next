import Image from "next/image";
import config from "/config.js";

export async function Abook() {
  return (
    <>
      <image src={coverurl}></image>
      <h1 className="abook">
        {Title} {date}
      </h1>
      <h2 className="abook">{title}</h2>
      <p className="abook">{author}</p>
      <p className="abook">{summary}</p>
    </>
  );
}

export async function getServerSideProps(info) {
  const rawdata = await fetch(`${config.baseurl}/api/books/${id}`);
  const data = await rawdata.json();
  const title = await data.title;
  const author = await data.author;
  const coverurl = await data.coverurl;
  const summary = await data.summary;
  const date = await data.date;
  return {
    props: {
      title,
      author,
      coverurl,
      summary,
      date,
    },
  };
}

export default Abook;
