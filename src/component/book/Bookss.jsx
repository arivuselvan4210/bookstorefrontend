import React, { useEffect, useState } from "react";
import axios from "axios";
import Bookr from "./Bookr";
import "./arivu.css";

const URL = "http://localhost:5000/";

const Books = () => {
  const [books, setBooks] = useState();
  useEffect(() => {
    const fatuch = async () => {
      await axios
        .get(URL)
        .then((res) => res.data)
        .then((data) => setBooks(data.books));
      // console.log(books);
    };
    fatuch();
  }, []);
  return (
    <div>
      <ul>
        {books &&
          books.map((book, i) => (
            <li className="book" key={i}>
              <Bookr book={book} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Books;
