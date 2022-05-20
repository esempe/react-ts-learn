import React from 'react';
import style from './Dialogs.module.css'
import СonversationItem from "./СonversationItem/СonversationItem";
import MessagesWrapper from "./MessagesWrapper/MessagesWrapper";
import DialogsTextareaContainer from "./dialogsTextarea/dialogsTextareaContainer"

const Dialogs = () => {

    let         dialogs= {
            messageData: [  //входные данные
                {id: 1, message: 'Hy h1w are you??'},
                {id: 2, message: 'bebra karpacho!'},
                {id: 3, message: 'noo way'},
                {id: 4, message: 'magick is dred'},
                {id: 5, message: 'falco and gabby'},
                {id: 6, message: 'my first message!!!'},
            ],
            conversationsData: [ //входные данные
                {id: 1, name: 'Rocky'},
                {id: 2, name: 'Anrew'},
                {id: 3, name: 'Anorick'},
                {id: 4, name: 'Anatoly'},
                {id: 5, name: 'Rocky'},
                {id: 6, name: 'Rocky'},
                {id: 7, name: 'Ramen'},
                {id: 8, name: 'Denzlo'},
            ],
            newMessageText: ''
        }


    let messageElements = dialogs.messageData.map( (message) =>
        <MessagesWrapper message={message.message}/>
    );
    let conversationsElements = dialogs.conversationsData.map((conversation) =>
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
                    <DialogsTextareaContainer/>
                </div>
            </div>
        </div>
    )
}
export default Dialogs;

