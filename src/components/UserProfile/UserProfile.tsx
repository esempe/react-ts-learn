import React from 'react'
import style from './UserProfile.module.css'
import UserProfileInfo from './userProfileInfo/UserProfileInfo'
import UserWallpaper from './userWallpaper/UserWallpaper'

import {UserPostsContainer} from "./UserPosts/UserPostsContainer";
import {StoreType} from "../../redux/store";
import {AddPostActionType, postTextType} from "../../redux/profileReducer";
import {AddMessageActionType} from "../../redux/dialogsReducer";

type UserProfileProps = {
    store: StoreType
    postsData?: Array<postTextType>
    dispatch?: (action: AddPostActionType | AddMessageActionType) => void
}

const UserProfile = (props: UserProfileProps) => {


    return (
        <div className={style.contentWrapper}>
            <UserWallpaper/>
            <UserProfileInfo/>
            <div className={style.UserTextarea_tittle}>
                My posts
            </div>
            <UserPostsContainer store={props.store}/>
        </div>
    )
}

export default UserProfile
