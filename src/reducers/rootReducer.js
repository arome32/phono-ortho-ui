import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { devModeReducer } from "./devModeReducer";


const rootReducer = combineReducers({
    user: userReducer,
    devMode: devModeReducer,
});

export default rootReducer;