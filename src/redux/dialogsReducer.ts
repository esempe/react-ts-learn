const ADD_MESSAGE = 'ADD-MESSAGE';

export type conversationsType = {
    id: number, name: string
}
export type messageType = {
    id: number, message: string
}
export type DialogsType = {
    messageData: Array<messageType>
    conversationsData: Array<conversationsType>
    newMessageText: string
}

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

export type initialStateDialogsReducerType = typeof initialState


export const DialogsReducer = (state: initialStateDialogsReducerType = initialState,
                               action: AddMessageActionType): initialStateDialogsReducerType => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage: messageType =
                {
                    id: 1,
                    message: action.messageBody,
                }
            if (newMessage.message.trim()) {
                return {...state, messageData: [...state.messageData, newMessage]};
            } else return state;

        default:
            return state;
    }

}

export type AddMessageActionType = ReturnType<typeof addMessageActionCreator>

export const addMessageActionCreator = (message: string) => ({
    type: ADD_MESSAGE, messageBody: message
} as const)