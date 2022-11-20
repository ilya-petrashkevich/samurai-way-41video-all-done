// import React from 'react';
import {ActionsTypes, DialogsPageType} from "./state";

export const dialogsReducer = (state: DialogsPageType, action: ActionsTypes) => {

    switch (action.type) {
        case "UPDATE-NEW-MESSAGE-BODY":
            state.newMessageBody = action.body;
            return state;
        case "SEND-MESSAGE":
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id: state.messages.length + 1/*6*/, message: body});
            return state;
        default:
            return state
    }

    // ВНИМАНИЕ ВАЖНЫЙ КОММЕНТ К КОДУ!!!!! ниже это то что было то того как мы использовали switch case, в редюсерах видимо принято использовать switch case!!!
    // if (action.type === 'UPDATE-NEW-MESSAGE-BODY') {
    //     state.newMessageBody = action.body;
    //     // this._onChange();
    // } else if (action.type === 'SEND-MESSAGE') {
    //     let body = state.newMessageBody;
    //     state.newMessageBody = '';
    //     state.messages.push({id: state.messages.length + 1/*6*/, message: body});
    //     // this._onChange();
    // }

    // return state
};

export const updateNewMessageBodyAC = (body: string) => {
    return {
        type: 'UPDATE-NEW-MESSAGE-BODY',
        body: body
    } as const
}

export const sendMessageAC = () => {
    return {
        type: 'SEND-MESSAGE'
    } as const
}

// export default dialogsReducer;