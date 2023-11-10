// import { Button } from "@mui/material";
// import axios from "axios";
// import React from "react";
// import { NavLink, useNavigate } from "react-router-dom";

// const Bookr = (props) => {
//   const histy = useNavigate();
//   const { _id, name, desc, img, author, price } = props.book;
//   const handeldelet = () => {
//     axios
//       .delete(`http://localhost:5000/${_id}`)
//       .then((res) => res.data)
//       .then(() => histy("/"))
//       .then(() => histy("/books"));
//   };
//   return (
//     <div className="card">
//       <img src={img} alt={name} />
//       <h3>{name}</h3>
//       <article>By {author}</article>
//       <p>{desc}</p>
//       <h2>Rs{price}</h2>
//       <Button LinkComponent={NavLink} to={`/books/${_id}`} sx={{ mt: "auto" }}>
//         update
//       </Button>
//       <Button onClick={handeldelet} sx={{ mt: "auto" }}>
//         Delete
//       </Button>
//     </div>
//   );
// };

// export default Bookr;
import React from "react";
import {
  Button,
  Card,
  CardContent,
  CardActions,
  Typography,
} from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

const BookCard = (props) => {
  const navigate = useNavigate();
  const { _id, name, desc, img, author, price } = props.book;
  const handleDelete = async () => {
    try {
      await axios
        .delete(`http://localhost:5000/${_id}`)
        .then((res) => res.data)
        .then((data) => props.setBooks(data));
      navigate("/books");
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

  return (
    <Card>
      <img
        src={img}
        alt={name}
        style={{ width: "100%", height: "200px", objectFit: "cover" }}
      />
      <CardContent>
        <Typography variant="h5">{name}</Typography>
        <Typography variant="subtitle1">By {author}</Typography>
        <Typography variant="body1">{desc}</Typography>
        <Typography variant="h6">Rs{price}</Typography>
      </CardContent>
      <CardActions>
        <Button
          component={NavLink}
          to={`/books/${_id}`}
          variant="contained"
          color="primary"
        >
          Update
        </Button>
        <Button variant="contained" color="error" onClick={handleDelete}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default BookCard;
