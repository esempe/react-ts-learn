import React from 'react'
import style from './UserTextarea.module.css'


const DialogsTextarea = (props: any) => {
    ////////

    ////////
    return (
        <div className={style.UserTextarea}>
            <textarea className={style.UserTextarea_input}/>
            <div className={style.UserTextarea_button}>
                Send
            </div>
        </div>
    )
}

export default DialogsTextarea
