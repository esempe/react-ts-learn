import React, {ChangeEvent, useState} from 'react'
import style from './UserPosts.module.css'
import UserPost_item from './userPost_item/UserPost_item'
import {AddMessageActionType, AddPostActionType, postTextType} from "../../../redux/storeOLD";
import {addPostActionCreator} from "../../../redux/profileReducer";


export type UserPostsPropsType = {
    postsData: Array<postTextType>
    dispatch: (action: AddPostActionType | AddMessageActionType) => void
}

export const UserPosts = (props: UserPostsPropsType) => {
    const [text, setText] = useState<string>('')

    const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        props.dispatch(addPostActionCreator(text))
        setText('')
    }

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.currentTarget.value)
    }
    let postElements = props.postsData.map((post) =>
        <UserPost_item
            text={post.message}
            likeCount={post.likeCount}/>
    )
    return (
        <div className={style.UsersPosts}>
            <div className={style.UserTextarea}>
                <textarea value={text} onChange={onChangeHandler} className={style.UserTextarea_input}/>
                <button onClick={onClickHandler} className={style.UserTextarea_button}>
                    Send
                </button>
            </div>
            {postElements}
        </div>
    )
}

