import React from 'react'
import UserTextarea from "./UserTextarea";

const UserTextareaContainer = (props) => {
 /*   let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }*/

/*    let onPostChange = (postMessage) => {
        let action = updateNewPostTextActionCreator(postMessage)
        props.store.dispatch(action);
    }*/
    return (
        <UserTextarea addPost={1}
                      updateNewPostText={1}
                      newPostText={1 /*props.store.getState().userProfile.newPostText*/}

        />
    )
}

export default UserTextareaContainer
