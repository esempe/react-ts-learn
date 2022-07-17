import {combineReducers, legacy_createStore as createStore} from "redux";
import {ProfileReducer} from "./profileReducer";
import {DialogsReducer} from "./dialogsReducer";
import {usersReducer} from "./usersReducer";

export type AppRootStateType = ReturnType<typeof reducers>

const reducers = combineReducers({
    ProfilePage: ProfileReducer,
    DialogsPage: DialogsReducer,
    UsersPage:usersReducer
})

export const store = createStore(reducers)

export type StoreType =typeof store
// @ts-ignore
window.store = store;
