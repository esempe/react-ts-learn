import React from 'react'
import style from './UserTextarea.module.css'


const UserTextarea = (props:any) => {

    let newPostElement = React.createRef();
    let addPost = () => {

    }
/*    let onPostChange = () => {
        let postMessage = newPostElement.current.value;
        props.updateNewPostText(postMessage)
    }*/
    return (
        <div className={style.UserTextarea}>
            <textarea className={style.UserTextarea_input}/>
            <div className={style.UserTextarea_button}>
                Send
            </div>
        </div>
    )
}

export default UserTextarea
