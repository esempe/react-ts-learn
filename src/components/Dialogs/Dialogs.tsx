import React from 'react';
import style from './Dialogs.module.css'
import СonversationItem from "./СonversationItem/СonversationItem";
import MessagesWrapper from "./MessagesWrapper/MessagesWrapper";
import DialogsTextareaContainer from "./dialogsTextarea/dialogsTextareaContainer"
import DialogsTextarea from "./dialogsTextarea/dialogsTextarea";
import {DialogsType} from "../../redux/state";



type DialogsPropsType ={
    dialogs:DialogsType
}

const Dialogs = (props:DialogsPropsType) => {



    let messageElements = props.dialogs.messageData.map( (message) =>
        <MessagesWrapper message={message.message}/>
    );
    let conversationsElements = props.dialogs.conversationsData.map((conversation) =>
        <СonversationItem name={conversation.name} id={conversation.id} />
    );
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
                    <DialogsTextarea/>
                </div>
            </div>
        </div>
    )
}
export default Dialogs;

