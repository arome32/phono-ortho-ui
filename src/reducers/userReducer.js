 import initalState from '../initalState'
 import actionTypes from '../actionTypes'

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
         
         default:
            return state
     }
 }