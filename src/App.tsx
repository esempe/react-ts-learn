import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import SideBar from "./components/SideNav/SideBar";
import UserProfile from "./components/UserProfile/UserProfile";
import {Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Dispatch} from "redux";
import {AppRootStateType, StoreType} from "./redux/store";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {UsersContainer} from "./components/Users/UsersContainer";


type AppPropsType = {
    state?: AppRootStateType;
    dispatch?: Dispatch
    store: StoreType
}

function App(props: AppPropsType) {
    let a = props.store.getState()
    return (
        <div className="App">
            <div className="global-container">
                <Header/>
                <main className="main-flex">
                    <SideBar/>
                    <div className="main-container">
                        <Routes>
                            <Route path='/profile'
                                   element={<UserProfile
                                       store={props.store}/>}/>
                            <Route path='/dialogs/*'
                                   element={<DialogsContainer
                                       store={props.store}/>}/>
                            <Route path='/users' element={<UsersContainer/>}/>
                            <Route path='/feed' element={<News/>}/>
                            <Route path='/music' element={<Music/>}/>
                            <Route path='/settings' element={<Settings/>}/>
                        </Routes>
                    </div>

                </main>

                <div className="contrainer">

                </div>
            </div>
        </div>
    );
}

export default App;
