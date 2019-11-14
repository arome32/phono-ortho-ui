import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { devModeReducer } from "./devModeReducer";
import { wakeupReducer } from "./wakeupReducer";


const rootReducer = combineReducers({
    user: userReducer,
    devMode: devModeReducer,
    wakeup: wakeupReducer,
});

export default rootReducer;