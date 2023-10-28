import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormLabel,
  TextField,
} from "@mui/material";

const BookUp = () => {
  const [checked, setchecked] = useState(false);
  const [input, setinput] = useState({});
  const id = useParams().id;
  const history = useNavigate();

  useEffect(() => {
    const fatch = async () => {
      await axios
        .get(`http://localhost:5000/${id}`)
        .then((res) => res.data)
        .then((data) => setinput(data.books));
    };
    fatch();
  }, [id]);

  const update = async () => {
    await axios.put(`http://localhost:5000/${id}`, {
      name: String(input.name),
      author: String(input.author),
      disc: String(input.disc),
      price: Number(input.price),
      img: String(input.img),
      aval: Boolean(checked),
    });
  };
  const handelChange = (e) => {
    setinput((prevstate) => ({
      ...prevstate,
      [e.target.name]: e.target.value,
    }));
  };
  const handelSubmit = (e) => {
    e.preventDefault();

    update().then(() => history("/books"));
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
          value={input.disc}
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
          name="img"
          value={input.img}
          onChange={handelChange}
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={input.avel}
              onChange={() => setchecked(!checked)}
            />
          }
          label="avlable"
        />
        <Button variant="contained" type="submit" onClick={handelSubmit}>
          UpDate Book
        </Button>
      </Box>
    </form>
  );
};

export default BookUp;
