// import React from "react";
import About from "./component/About";
import Addbook from "./component/Addbook";
import Header from "./component/Header";
import Books from "./component/book/Bookss";
import Home from "./component/Homes";
import { Routes, Route } from "react-router-dom";
import React from "react";
import BookUp from "./component/book/BookUp";

function App() {
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/product" element={<Addbook />} exact />
          <Route path="/books" element={<Books />} exact />
          <Route path="/about" element={<About />} exact />
          <Route path="/books/:id" element={<BookUp />} exact />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
