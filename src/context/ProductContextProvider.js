import React, { createContext } from "react";
import { API } from "../helpers/const";
import axios from "axios";
//1) создать папку context
//2) создать провайдер
//3) вместо div вызвать переменную  в которой лежит context и вызвать провайдер (.Provider)
//4) в index.js обернуть <App/> в контекст
//5) в контекст провайдере передать дочерний элемент и обернуть в {children}

export const productContext = createContext();
const ProductContextProvider = ({ children }) => {
  //!CREATE
  const addProduct = async (product) => {
    await axios.post(API, product);
  };
  const values = {
    addProduct,
  };
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContextProvider;
