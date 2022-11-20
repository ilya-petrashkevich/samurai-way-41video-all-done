// import React from 'react';
import {ActionsTypes, PostsType, ProfilePageType} from "./state";

export const profileReducer = (state: ProfilePageType, action: ActionsTypes) => {

    switch (action.type) {
        case "ADD-POST":
            let newPost: PostsType = {
                id: state.posts.length + 1, // или просто номер вставлять вручную
                message: action.postMessage, //state.profilePage.newPostText,
                likesCount: 0
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state; //break; тут каждый case завершается return-ом иначе надо бы было ставить в конце каждого case brake;
        case "UPDATE-NEW-POST-TEXT":
            state.newPostText = action.newText;
            return state;
        default:
            return state
    }

    // ВНИМАНИЕ ВАЖНЫЙ КОММЕНТ К КОДУ!!!!! ниже это то что было то того как мы использовали switch case, в редюсерах видимо принято использовать switch case!!!
    // if (action.type === 'ADD-POST') {
    //     let newPost: PostsType = {
    //         id: state.posts.length + 1, // или просто номер вставлять вручную
    //         message: action.postMessage, //state.profilePage.newPostText,
    //         likesCount: 0
    //     }
    //     state.posts.push(newPost);
    //     state.newPostText = '';
    // store._state.profilePage.posts.push(newPost);
    // store._state.profilePage.newPostText = '';
    // this._onChange();
    // } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
    //     state.newPostText = action.newText;
    //     // this._onChange();
    // }

    // return state;
};

export const addPostAC = (postMessage: string)/*: AddPostActionType*/ => {
    return {
        type: "ADD-POST",
        postMessage: postMessage
    } as const
}

export const updateNewPostTextAC = (newText: string)/*: UpdateNewPostTextActionType*/ => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: newText
    } as const
}

// export default profileReducer;