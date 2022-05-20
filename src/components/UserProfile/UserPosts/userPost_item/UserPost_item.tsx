import React from 'react'
import style from './UserPost_item.module.css'
const UserPost_item = (props:any) => {
    return (
        <div>
            <div className={style.post}>
                <div className={style.postAvatar}>
                </div>
                <div className={style.textWrapper}>
                    <div className={style.postText}>{props.text}</div>
                    <div className={style.postLikes}>{props.likeCount} likes</div>
                </div>
            </div>
        </div>
    )
}

export default UserPost_item
