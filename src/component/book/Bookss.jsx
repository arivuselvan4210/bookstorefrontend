import React, { useEffect, useState } from "react";
import axios from "axios";
import Bookr from "./BookCard";
import "./arivu.css";
import BookCard from "./BookCard";

const URL = "http://localhost:5000/";

const Books = () => {
  const [books, setBooks] = useState();
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState(null);
  useEffect(() => {
    const fatuch = async () => {
      try {
        await axios
          .get(URL)
          .then((res) => res.data)
          .then((data) => setBooks(data.books));
      } catch (error) {
        seterror(error.massage);
      } finally {
        setloading(false);
      }
    };
    fatuch();
  }, []);

  // const usefun = (data) => {
  //   setBooks(data);
  // };
  return (
    <div>
      {loading ? (
        <p>...Loading</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <ul>
          {books &&
            books.map((book, i) => (
              <li className="book" key={i}>
                <BookCard book={book} setBooks={setBooks} />
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default Books;
