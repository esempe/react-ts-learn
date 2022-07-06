import React, {ChangeEvent, useState} from 'react';
import style from './Dialogs.module.css'
import СonversationItem from "./СonversationItem/СonversationItem";
import MessagesWrapper from "./MessagesWrapper/MessagesWrapper";
import { AddMessageActionType, AddPostActionType, DialogsType} from "../../redux/storeOLD";
import {addMessageActionCreator} from "../../redux/dialogsReducer";


type DialogsPropsType = {
    dialogs: DialogsType
    dispatch: (action: AddPostActionType | AddMessageActionType) => void
}

const Dialogs = (props: DialogsPropsType) => {
    const [message,setMessage] = useState<string>('')

    let messageElements = props.dialogs.messageData.map((message) =>
        <MessagesWrapper message={message.message}/>
    );
    let conversationsElements = props.dialogs.conversationsData.map((conversation) =>
        <СonversationItem name={conversation.name} id={conversation.id}/>
    );

    const onChangeHandler = (e:ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.currentTarget.value)
    }
    const onClickHandler = (e:React.MouseEvent<HTMLDivElement>) => {
        props.dispatch(addMessageActionCreator(message))
        setMessage('')
    }
    return (
        <div>
            <div className={style.tittle}>
                DIALOGS
            </div>
            <div className={style.dialogsWrapper}>
                <div className={style.conversationsList}>
                    {conversationsElements} {/*insert array of dialogs*/}
                </div>
                <div className={style.conversation}>
                    {messageElements} {/*insert array of messages*/}
                    <div className={style.UserTextarea}>
                        <textarea
                            onChange={onChangeHandler}
                            value={message}
                            className={style.UserTextarea_input}/>
                        <div className={style.UserTextarea_button}
                        onClick={onClickHandler}
                        >
                            Send
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Dialogs;

