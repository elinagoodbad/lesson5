import { Button, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import { productContext } from "../context/ProductContextProvider";

const AddProduct = () => {
  const { addProduct } = useContext(productContext);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [img, setImg] = useState("");
  const handlecLick = () => {
    if (!name || !lastName || !img) {
      alert("Заполните данные");
      return;
    }
    let newProduct = {
      name: name,
      lastName: lastName,
      img: img,
    };
    addProduct(newProduct);
  };
  return (
    <div>
      <TextField
        onChange={(e) => setName(e.target.value)}
        id="outlined-basic"
        label="name"
        variant="outlined"
      />
      <TextField
        onChange={(e) => setLastName(e.target.value)}
        id="outlined-basic"
        label="lastName"
        variant="outlined"
      />
      <TextField
        onChange={(e) => setImg(e.target.value)}
        id="outlined-basic"
        label="img"
        variant="outlined"
      />
      <Button onClick={handlecLick} variant="contained">
        Add product
      </Button>
    </div>
  );
};

export default AddProduct;
