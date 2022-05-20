import React from 'react'
import style from './SideBar.module.css'
import {
    Link, NavLink
} from "react-router-dom";
import SideBarFriendsList from "./SideBarFreindsList/SideBarFriendsList";



const SideBar = (props:any) => {

    let LinkActive = ({isActive}:any) => {
        return isActive ? style.active : style.text;
    }

    return (
        <div className={style.SideNav}>
            <div className="">
                <NavLink to='/profile' className={LinkActive}>Profiles</NavLink>
            </div>
            <div className="">
                <NavLink to='dialogs/' className={LinkActive}>Messeges</NavLink>
            </div>
            <div className="">
                <NavLink to='/feed' className={LinkActive}>News</NavLink>
            </div>
            <div className=" ">
                <NavLink to='/music' className={LinkActive}>Music</NavLink>
            </div>
            <div className={style.itemset }>
                <NavLink to='/settings' className={LinkActive}>Settings</NavLink>
            </div>
            {/*<SideBarFriendsList state={1}/>*/}

        </div>
    )
}
export default SideBar
