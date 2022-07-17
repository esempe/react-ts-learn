import React from 'react';
import {addMessageActionCreator, DialogsType} from "../../redux/dialogsReducer";
import {Dialogs} from "./Dialogs";
import {AppRootStateType, StoreType} from "../../redux/store";
import {connect} from "react-redux";
import {Dispatch} from "redux";



export type mapStateToPropsType = {
    dialogs: DialogsType
}
export type mapDispatchToPropsType = {
    addMessage: (messageText: string) => void;
}


const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
    return {
        dialogs: state.DialogsPage
    }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        addMessage: (messageText: string) => {
            dispatch(addMessageActionCreator(messageText))
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);



