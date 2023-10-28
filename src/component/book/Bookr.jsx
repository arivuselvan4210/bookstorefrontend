import { Button } from "@mui/material";
import axios from "axios";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Bookr = (props) => {
  const histy = useNavigate();
  const { _id, name, desc, img, author, price } = props.book;
  const handeldelet = () => {
    axios
      .delete(`http://localhost:5000/${_id}`)
      .then((res) => res.data)
      .then(() => histy("/"))
      .then(() => histy("/books"));
  };
  return (
    <div className="card">
      <img src={img} alt={name} />
      <h3>{name}</h3>
      <article>By {author}</article>
      <p>{desc}</p>
      <h2>Rs{price}</h2>
      <Button LinkComponent={NavLink} to={`/books/${_id}`} sx={{ mt: "auto" }}>
        update
      </Button>
      <Button onClick={handeldelet} sx={{ mt: "auto" }}>
        Delete
      </Button>
    </div>
  );
};

export default Bookr;
