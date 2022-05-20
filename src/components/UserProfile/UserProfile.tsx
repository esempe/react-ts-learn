import React from 'react'
import { UserPosts } from './UserPosts/UserPosts'
import style from './UserProfile.module.css'
import UserProfileInfo from './userProfileInfo/UserProfileInfo'
import UserWallpaper from './userWallpaper/UserWallpaper'
import UserTextareaContainer from "./userTextarea/UserTextareaContainer";

type UserProfileProps = {

}

const UserProfile = (props:any) => {

    return (
        <div className={style.contentWrapper}>
            <UserWallpaper/>
            <UserProfileInfo />
            <div className={style.UserTextarea_tittle}>
                My posts
            </div>
            <UserTextareaContainer

            />
            <UserPosts/>
        </div>
    )
}

export default UserProfile
