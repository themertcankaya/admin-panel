import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
const url = "https://www.course-api.com/react-store-products";

const getInitialProducts = () => {
  const stored = localStorage.getItem("admin-products");
  return stored ? JSON.parse(stored) : [];
};
const initialState = {
  products: getInitialProducts(),
  isLoading: false,
  error: null,
};

// Asynchronous data fetching

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (_, thunkAPI) => {
    try {
      const resp = await axios(url);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Failed to load products.");
    }
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    removeProduct: (state, action) => {
      const productId = action.payload;
      state.products = state.products.filter((item) => item.id !== productId);
      localStorage.setItem("admin-products", JSON.stringify(state.products));
    },
    addProduct: (state, action) => {
      const newProduct = {
        ...action.payload,
        id: uuidv4(),
      };
      state.products.push(newProduct);
      localStorage.setItem("admin-products", JSON.stringify(state.products));
    },
    updateProduct: (state, action) => {
      const updated = action.payload;
      const index = state.products.findIndex((item) => item.id === updated.id);
      if (index !== -1) {
        state.products[index] = updated;
        localStorage.setItem("admin-products", JSON.stringify(state.products));
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        if (state.products.length === 0) {
          state.products = action.payload;
          localStorage.setItem(
            "admin-products",
            JSON.stringify(state.products)
          );
        }
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { removeProduct, addProduct, updateProduct } =
  productSlice.actions;
export default productSlice.reducer;
