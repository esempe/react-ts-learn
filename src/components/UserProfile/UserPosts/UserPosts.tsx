import React from 'react'
import style from './UserPosts.module.css'
import UserPost_item from './userPost_item/UserPost_item'
import UserTextarea from '../userTextarea/UserTextarea'
import {postTextType} from "../../../redux/state";


export type UserPostsPropsType = {
    postsData: Array<postTextType>
}

export const UserPosts = (props:UserPostsPropsType) => {



    let postElements = props.postsData.map((post) =>
        <UserPost_item
            text={post.message}
            likeCount={post.likeCount} />
    )



    return (
        <div className={style.UsersPosts}>
            {postElements}
        </div>
    )
}

