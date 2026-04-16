import { useEffect, useState } from "react";
import { OpenLibrarySubjectResponse } from "./types";

const ReactAsyncRequest = () => {
  const [data, setData] = useState<OpenLibrarySubjectResponse | null>(null);

  useEffect(() => {
    const fetchBooks = async () => {
      const url = "https://openlibrary.org/subjects/fantasy.json?limit=10";
      const response = await fetch(url);

      const data: OpenLibrarySubjectResponse = await response.json();

      setData(data);
    };

    fetchBooks();
  }, []);

  if (!data) {
    return <p>No data</p>;
  }

  return (
    <div className="text-left">
      {data.works.map((book, index) => (
        <p key={book.cover_id}>
          {index + 1}. {book.title}
        </p>
      ))}
    </div>
  );
};

export default ReactAsyncRequest;
