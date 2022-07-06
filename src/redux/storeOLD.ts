import {ProfileReducer} from "./profileReducer";
import {DialogsReducer} from "./dialogsReducer";

export type postTextType = {
    id: number;
    message: string;
    likeCount: string;
}
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
export type ProfilePage = {
    postsData: Array<postTextType>;
}
export type rootStateTypes = {
    profilePage: ProfilePage;
    dialogsData: DialogsType
}
export type AddPostActionType = {
    type: 'ADD-POST'
    postMessage: string
}
export type AddMessageActionType = {
    type: 'ADD-MESSAGE'
    messageBody: string
}
export type storeRootType = {
    _state: rootStateTypes,
    getState: () => rootStateTypes
    //addPost: (postMessage: string) => void
    //addMassage: (messageBody: string) => void
    subscribe: (callback: () => void) => void
    _callSubscriber: () => void
    dispatch: (action: AddPostActionType | AddMessageActionType) => void
}
//////////////////////////////////типы


export const storeOLD: storeRootType = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, message: 'My new post', likeCount: '6'},
                {id: 2, message: 'I love to smell bebra', likeCount: '5'},
                {id: 3, message: '1 like and i will....', likeCount: '554'},
                {id: 4, message: 'aye salam basota', likeCount: '12'},
                {id: 5, message: 'magick is dred', likeCount: '1488'},
                {id: 6, message: 'falco and gabby', likeCount: '1327'},
                {id: 7, message: 'ramires little dirty', likeCount: '332'},
                {id: 8, message: 'my first post!!!', likeCount: '21'},
            ],
        },
        dialogsData: {
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

    },
    _callSubscriber() {
        console.log('state is changed')
    },

    getState() {
        return this._state
    },
    subscribe(callback) {
        this._callSubscriber = callback;
    },

    dispatch(action) {

        this._state.profilePage = ProfileReducer(this._state.profilePage,action)
        this._state.dialogsData = DialogsReducer(this._state.dialogsData,action)
        this._callSubscriber()

    },
}




const ADD_POST = "ADD-POST";
const ADD_MESSAGE = 'ADD-MESSAGE';

/*        if (action.type == 'ADD-POST') {
            const newPost: postTextType =
                {
                    id: 1,
                    message: action.postMessage,
                    likeCount: '0'
                }
            let allPosts = this._state.profilePage.postsData

            if (newPost.message.trim()) {
                allPosts = [newPost, ...allPosts]
            }
            this._state.profilePage.postsData = allPosts
            this._callSubscriber()
        } else if (action.type == 'ADD-MESSAGE') {
            let newMessage: messageType =
                {
                    id: 1,
                    message: action.messageBody,
                }
            let allMessages = this._state.dialogsData.messageData
            if (newMessage.message.trim()) {
                allMessages = [...allMessages, newMessage]
            }
            this._state.dialogsData.messageData = allMessages
            this._callSubscriber()
        }*/