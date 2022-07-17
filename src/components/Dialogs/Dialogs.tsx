import React, {ChangeEvent, useState} from 'react';
import style from './Dialogs.module.css'
import СonversationItem from "./СonversationItem/СonversationItem";
import MessagesWrapper from "./MessagesWrapper/MessagesWrapper";
import {mapDispatchToPropsType, mapStateToPropsType} from './DialogsContainer';


type DialogsPropsType = mapStateToPropsType & mapDispatchToPropsType

export const Dialogs = (props: DialogsPropsType) => {
    const [message, setMessage] = useState<string>('')
    let messageElements = props.dialogs.messageData.map((message) =>
        <MessagesWrapper key={Math.random()} message={message.message}/>
    );
    let conversationsElements = props.dialogs.conversationsData.map((conversation) =>
        <СonversationItem key={Math.random()} name={conversation.name} id={conversation.id}/>
    );

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.currentTarget.value)
    }
    const onClickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
        props.addMessage(message)
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

