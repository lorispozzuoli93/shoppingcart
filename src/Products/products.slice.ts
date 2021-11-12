import {
  createAsyncThunk,
  createSlice,
  PayloadAction,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import validateProduct from "../fake.api";
import { Rootstate } from "../store";

export interface Product {
  title: string;
  price: number;
  id: string;
}

export enum ValidationState {
  Fulfilled,
  Pending,
  Rejected,
}

interface ProductsSliceState {
  validationState?: ValidationState;
  errorMessage?: string;
}

export const addProductAsync = createAsyncThunk(
  "products/addNewsProduct",
  async (initialProduct: Product) => {
    const product = await validateProduct(initialProduct);
    return product;
  }
);

const initialProducts: Product[] = [
  { title: "Escape From Tarkov", price: 60, id: "eft" },
  { title: "Hunt: Showdown", price: 70, id: "hunt" },
  { title: "Hell Let Loose", price: 55, id: "hll" },
];

const productAdapter = createEntityAdapter<Product>();
const initialState = productAdapter.getInitialState<ProductsSliceState>({
  errorMessage: undefined,
  validationState: undefined,
});

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      productAdapter.upsertOne(state, action.payload)
    },
    removeProduct: (state, action: PayloadAction<string>) => {
      productAdapter.removeOne(state, action.payload)
  },
  extraReducers: (builder) => {
    builder.addCase(addProductAsync.fulfilled, (state, action) => ({
      ...state,
      validationState: ValidationState.Fulfilled,
      errorMessage: undefined,
      products: [...state.products, action.payload],
    }));
    builder.addCase(addProductAsync.rejected, (state, action) => ({
      ...state,
      validationState: ValidationState.Rejected,
      errorMessage: action.error.message,
    }));
    builder.addCase(addProductAsync.pending, (state, action) => ({
      ...state,
      validationState: ValidationState.Pending,
      errorMessage: undefined,
    }));
  },
});

export const { addProduct, removeProduct } = productsSlice.actions;

export const getProductsSelector = (state: Rootstate) =>
  state.products.products;

export const getErrorMessage = (state: Rootstate) =>
  state.products.errorMessage;

export default productsSlice.reducer;
