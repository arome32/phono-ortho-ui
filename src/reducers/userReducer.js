 import initalState from '../initalState'
 import actionTypes from '../actionTypes'
 import axios from 'axios';

 export const userReducer = (state = initalState.user, action) => {
     switch (action.type) {
         case actionTypes.CREATE_USER: {
            console.log(action.user);
            return action.user;
         }
         case actionTypes.PUSH_WORD: {
            state.pushWord(action.word)
            return state;
         }
         case actionTypes.POST_USER: {
            axios.post(`https://phono-ortho-spelling-backend.herokuapp.com/user`,  state)
            .then(res => {
              console.log(res);
              console.log(res.data);
            })
            return state
         }
         default:
            return state
     }
 }