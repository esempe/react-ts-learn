import {AddMessageActionType, AddPostActionType, postTextType, ProfilePage} from "./storeOLD";

const ADD_POST = "ADD-POST";




const initialState ={
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
    }


export const ProfileReducer = (state:ProfilePage = initialState,action: AddPostActionType | AddMessageActionType):ProfilePage => {
    switch (action.type){
        case ADD_POST :
            const newPost: postTextType =
                {
                    id: 1,
                    message: action.postMessage,
                    likeCount: '0'
                }
            let allPosts = state.postsData

            if (newPost.message.trim()) {
                allPosts = [newPost, ...allPosts]
            }
            state.postsData = allPosts
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = (postMessage: string): AddPostActionType => ({
    type: ADD_POST,
    postMessage: postMessage
})