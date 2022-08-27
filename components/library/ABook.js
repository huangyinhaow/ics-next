export async function getServerSideProps(context) {
  // const raw = await fetch(`${baseurl}/api/books/${id}`);
  // const info = await raw.json();

  // TEST START
  const raw = {
    thename: "thename",
    author: "author",
    coverlink: "https://coverlink",
    year: "year",
  };
  const info = raw;
  // TEST END

  return {
    props: {
      thename: info.thename,
      author: info.author,
      coverlink: info.coverlink,
      year: info.year,
    },
  };
}

export default function ABook({ thename, author, year }) {
  return (
    <div>
      <h1>{thename}</h1>
      <h2>{author}</h2>
      <p>{year}</p>
    </div>
  );
}
