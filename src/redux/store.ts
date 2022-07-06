import {combineReducers, legacy_createStore as createStore} from "redux";
import {ProfileReducer} from "./profileReducer";
import {DialogsReducer} from "./dialogsReducer";

export type AppRootStateType = ReturnType<typeof reducers>

const reducers = combineReducers({
    ProfilePage: ProfileReducer,
    DialogsPage: DialogsReducer,
})

export const store = createStore(reducers)

export type StoreType =typeof store