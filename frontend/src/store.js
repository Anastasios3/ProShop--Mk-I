import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./slices/apiSlice";
import { productsApiSlice } from "./slices/productsApiSlice";
import cartSliceReducer from "./slices/cartSlice";

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    [productsApiSlice.reducerPath]: productsApiSlice.reducer,
    cart: cartSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      apiSlice.middleware,
      productsApiSlice.middleware
    ),
  devTools: true,
});

export default store;
