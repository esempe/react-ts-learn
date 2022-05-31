import React from 'react';
import style from "./СonversationItem.module.css";
import {NavLink} from "react-router-dom";

type props ={
    name:string;
    id:number;
}

const СonversationItem = (props:props) => {
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