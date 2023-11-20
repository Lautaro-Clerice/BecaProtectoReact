import { createSlice } from "@reduxjs/toolkit";
import { productos } from "./ListaProductos";
    const INITIAL_STATE = {
        products:productos
    }


export const productsSlice = createSlice({
    name:"products",
    initialState: INITIAL_STATE,
    reducers: {
        getProducts: state => {
            return state
        },
    },
});

export const {getProducts} = productsSlice.actions;

export default productsSlice.reducer;