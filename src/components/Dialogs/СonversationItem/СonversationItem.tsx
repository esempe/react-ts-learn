import React from 'react';
import style from "./СonversationItem.module.css";
import {NavLink} from "react-router-dom";

const СonversationItem = (props:any) => {
   let LinkActive = ({isActive}:any)=> {
        return isActive ? style.active : style.conversationItem;
   }
let path = '/dialogs/' + props.id;
    return (
        <div  className={''}>
            <NavLink to={path} className={LinkActive}>{props.name}</NavLink>
        </div>
    );
};

export default СonversationItem;