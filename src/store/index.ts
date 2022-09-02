import { configureStore } from "@reduxjs/toolkit"
import genreReducer  from "./reducers/genreReducer";
import apiConfigReducer from "./reducers/configReducer";

export const store = configureStore({
    reducer: {
        genres: genreReducer,
        config: apiConfigReducer
    }
  })

export type RootState = ReturnType<typeof store.getState>;
export type StoreDispatch = typeof store.dispatch;