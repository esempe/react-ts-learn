import React from 'react'
import { UserPosts} from './UserPosts/UserPosts'
import style from './UserProfile.module.css'
import UserProfileInfo from './userProfileInfo/UserProfileInfo'
import UserWallpaper from './userWallpaper/UserWallpaper'
import UserTextareaContainer from "./userTextarea/UserTextareaContainer";
import {AddMessageActionType, AddPostActionType, postTextType} from "../../redux/storeOLD";

type UserProfileProps = {
    postsData: Array<postTextType>
    dispatch:(action:AddPostActionType | AddMessageActionType)=>void
}

const UserProfile = (props:UserProfileProps) => {



    return (
        <div className={style.contentWrapper}>
            <UserWallpaper/>
            <UserProfileInfo />
            <div className={style.UserTextarea_tittle}>
                My posts
            </div>
            <UserPosts dispatch={props.dispatch} postsData={props.postsData}/>
        </div>
    )
}

export default UserProfile
