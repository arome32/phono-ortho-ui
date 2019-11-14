import * as actionTypes from  "../actionTypes";
import { User } from "../models/user";
import { Word } from "../models/word";

export const createUser = name => (dispatch) => {
    const user = new User(name);
    dispatch({type: actionTypes.CREATE_USER, user})
}

export const pushWord = (word, spelling) => (dispatch) => {
    const wordToAdd = new Word(word, spelling);
    dispatch({type: actionTypes.PUSH_WORD, word: wordToAdd});
}

export const postUser = () => (dispatch) => {
    dispatch({type: actionTypes.POST_USER});
}