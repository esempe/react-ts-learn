import React from 'react';
import style from "./MessageWrapper.module.css";

type props = {
    message:string;
}
const MessagesWrapper = (props:props) => {

    return (
        <div className={style.messagesWrapper}>
            <div className={style.senderInfo}>
                <div className={style.senderAvatar}>
                    ʕ•́ᴥ•̀ʔ
                </div>
                <div className={style.senderNickname}>
                    Bebra
                </div>
            </div>
            <div className={style.messageItem}>
                {props.message}
            </div>
        </div>
    );
};

export default MessagesWrapper;