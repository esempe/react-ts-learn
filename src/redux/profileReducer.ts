

const ADD_POST = "ADD-POST";

export type postTextType = {
    id: number;
    message: string;
    likeCount: string;
}
// export type ProfilePage = Array<postTextType>;

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

export type initialStateProfileReducerType = typeof initialState
export const ProfileReducer = (state:initialStateProfileReducerType = initialState,
                               action: AddPostActionType):initialStateProfileReducerType => {
    switch (action.type){
        case ADD_POST :
            const newPost: postTextType =
                {
                    id: 9,
                    message: action.postMessage,
                    likeCount: '0'
                }
            if(newPost.message.trim()){
                return {...state,postsData: [newPost,...state.postsData] };
            }else return state;


        default:
            return state;
    }
}
export type AddPostActionType = ReturnType<typeof addPostActionCreator>

export const addPostActionCreator = (postMessage: string) => ({
    type: ADD_POST,
    postMessage: postMessage
} as const)