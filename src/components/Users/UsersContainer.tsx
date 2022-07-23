import React from 'react';
import {connect} from "react-redux";
import {Users} from "./Users";
import {Dispatch} from "redux";
import {AppRootStateType} from "../../redux/store";
import {followAC, setUsersAC, unfollowAC, UserType} from "../../redux/usersReducer";
import {UsersC} from "./UsersC";


export type MapStateToPropsType = {
    users: Array<UserType>
}

export type MapDispatchToPropsType = {
    follow:(userID:number)=> void;
    unfollow:(userID:number)=> void;
    setUsers:(users: Array<UserType>)=> void;
}
const mapStateToProps = (state: AppRootStateType):MapStateToPropsType => {
    return{
        users:state.UsersPage.users
    }
}
const mapDispatchToProps = (dispatch: Dispatch):MapDispatchToPropsType => {
    return{
        follow:(userID:number)=> dispatch(followAC(userID)),
        unfollow:(userID:number)=> dispatch(unfollowAC(userID)),
        setUsers:(users: Array<UserType>)=> dispatch(setUsersAC(users))
    }
}

export const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(UsersC);

