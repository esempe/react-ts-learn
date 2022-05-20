import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import SideBar from "./components/SideNav/SideBar";
import UserProfile from "./components/UserProfile/UserProfile";
import {Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Dialogs from "./components/Dialogs/Dialogs";


/*
*
* */
function App() {
    return (
        <div className="App">
            <div className="global-container">
                <Header/>
                <main className="main-flex">
                    <SideBar/>
                    <div className="main-container">
                        <Routes>
                            <Route path='/profile' element={
                                <UserProfile/>}/>
                            <Route path='/dialogs/*' element={<Dialogs/>}/>
                            <Route path='/feed' element={<News/>}/>
                            <Route path='/music' element={<Music/>}/>
                            <Route path='/settings' element={<Settings/>}/>
                        </Routes>
                    </div>

                </main>

                1
            </div>
        </div>
    );
}

export default App;
