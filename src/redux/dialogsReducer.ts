import {AddMessageActionType, AddPostActionType, DialogsType, messageType} from "./storeOLD";
const ADD_MESSAGE = 'ADD-MESSAGE';

export const addMessageActionCreator = (message: string): AddMessageActionType => ({
    type: ADD_MESSAGE, messageBody: message
})

const initialState = {
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
        {id: 8, name: 'Ramen'},
        {id: 9, name: 'Denzlo'},
    ],
    newMessageText: '1'
}


export const DialogsReducer = (state:DialogsType = initialState,action: AddPostActionType | AddMessageActionType):DialogsType => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage: messageType =
                {
                    id: 1,
                    message: action.messageBody,
                }
            let allMessages = state.messageData
            if (newMessage.message.trim()) {
                allMessages = [...allMessages, newMessage]
            }
            state.messageData = allMessages
            return state;
        default:
            return state;
    }

}