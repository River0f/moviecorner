import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { RootState, StoreDispatch } from "../store";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector

export const useTypedDispatch: () => StoreDispatch = useDispatch