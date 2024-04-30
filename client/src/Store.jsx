import { createStore } from "redux";
import MainReducers from "./components/redux/MainReducers";

const Store = createStore(MainReducers)

export default Store