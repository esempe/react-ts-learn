import React from 'react'
import style from './UserPosts.module.css'
import UserPost_item from './userPost_item/UserPost_item'
import UserTextarea from '../userTextarea/UserTextarea'

export const UserPosts = (props:any) => {

    let postsData = [
        {id: 1, message: 'My new post', likeCount: '6'},
        {id: 2, message: 'I love to smell bebra', likeCount: '5'},
        {id: 3, message: '1 like and i will....', likeCount: '554'},
        {id: 4, message: 'aye salam basota', likeCount: '12'},
        {id: 5, message: 'magick is dred', likeCount: '1488'},
        {id: 6, message: 'falco and gabby', likeCount: '1327'},
        {id: 7, message: 'ramires little dirty', likeCount: '332'},
        {id: 8, message: 'my first post!!!', likeCount: '21'},
    ];

    let postElements = postsData.map((post) =>
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

