import {combineReducers} from "redux";
import listViewReducer from "../modules/listView/reducer/listViewReducer";
import mediaDetailReducer from "../modules/mediaDetail/reducer/mediaDetailReducer";
import searcherReducer from "../modules/searcher/reducer/searcherReducer";

export const todoApp = combineReducers({
    listViewReducer,
    mediaDetailReducer,
    searcherReducer
    }
);
