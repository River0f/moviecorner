import { configureStore } from "@reduxjs/toolkit"
import genreReducer  from "./reducers/genreReducer";

export const store = configureStore({
    reducer: {
        genres: genreReducer
    }
  })

export type RootState = ReturnType<typeof store.getState>;
export type StoreDispatch = typeof store.dispatch;