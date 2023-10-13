import { useSelector } from "react-redux";
import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../store";

export const useAppDispatch = () => useDispatch<AppDispatch>(); // типизизация диспатча

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
