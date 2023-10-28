import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormLabel,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Addbook = () => {
  const histroy = useNavigate();
  const [checked, setchecked] = useState(false);
  const [input, setinput] = useState({
    name: "",
    author: "",
    disc: "",
    price: "",

    image: "",
  });
  const sentResqst = async () => {
    await axios
      .post("http://localhost:5000/", {
        name: String(input.name),
        author: String(input.author),
        disc: String(input.desc),
        price: Number(input.price),
        img: String(input.image),
        aval: Boolean(checked),
      })
      .then((res) => res.data);
  };

  const handelChange = (e) => {
    setinput((prevState) => ({
      ...prevState,

      [e.target.name]: e.target.value,
    }));
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    sentResqst().then(() => histroy("/books"));
  };
  return (
    <form>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        maxWidth="700px"
        alignSelf="center"
        alignContent="center"
        margin="20px auto"
      >
        <FormLabel>Name</FormLabel>
        <TextField
          margin="normal"
          fullWidth
          variant="outlined"
          name="name"
          value={input.name}
          onChange={handelChange}
        />
        <FormLabel>Author</FormLabel>
        <TextField
          margin="normal"
          fullWidth
          variant="outlined"
          name="author"
          value={input.author}
          onChange={handelChange}
        />
        <FormLabel>Desicrition</FormLabel>
        <TextField
          margin="normal"
          fullWidth
          variant="outlined"
          name="disc"
          value={input.desc}
          onChange={handelChange}
        />
        <FormLabel>Price</FormLabel>
        <TextField
          margin="normal"
          fullWidth
          variant="outlined"
          name="price"
          type="number"
          value={input.price}
          onChange={handelChange}
        />
        <FormLabel>image</FormLabel>
        <TextField
          margin="normal"
          fullWidth
          variant="outlined"
          name="image"
          value={input.image}
          onChange={handelChange}
        />
        <FormControlLabel
          control={
            <Checkbox checked={checked} onChange={() => setchecked(!checked)} />
          }
          label="avlable"
        />
        <Button variant="contained" type="submit" onClick={handelSubmit}>
          Add Book
        </Button>
      </Box>
    </form>
  );
};

export default Addbook;
