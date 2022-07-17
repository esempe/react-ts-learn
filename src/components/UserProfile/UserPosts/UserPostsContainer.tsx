import React from 'react'
import {addPostActionCreator, postTextType} from "../../../redux/profileReducer";
import {UserPosts} from "./UserPosts";
import {AppRootStateType} from "../../../redux/store";
import {Dispatch} from "redux";
import {connect} from "react-redux";


export type mapStateToPropsType ={
    postsData: postTextType[];
}
export type mapDispatchToPropsType = {
    addPost:(postText: string)=>void
}
const mapStateToProps = (state: AppRootStateType) => {
    return {
        postsData: state.ProfilePage.postsData
    }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        addPost: (postMessage: string) => {
            dispatch(addPostActionCreator(postMessage))
        }
    }
}


export const UserPostsContainer = connect(mapStateToProps,mapDispatchToProps)(UserPosts)