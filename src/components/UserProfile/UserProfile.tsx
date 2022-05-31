import React from 'react'
import { UserPosts} from './UserPosts/UserPosts'
import style from './UserProfile.module.css'
import UserProfileInfo from './userProfileInfo/UserProfileInfo'
import UserWallpaper from './userWallpaper/UserWallpaper'
import UserTextareaContainer from "./userTextarea/UserTextareaContainer";
import {postTextType} from "../../redux/state";

type UserProfileProps = {
    postsData: Array<postTextType>
}

const UserProfile = (props:UserProfileProps) => {



    return (
        <div className={style.contentWrapper}>
            <UserWallpaper/>
            <UserProfileInfo />
            <div className={style.UserTextarea_tittle}>
                My posts
            </div>
            <UserTextareaContainer

            />
            <UserPosts postsData={props.postsData}/>
        </div>
    )
}

export default UserProfile
