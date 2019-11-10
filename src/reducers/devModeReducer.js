 import initalState from '../initalState'
 import actionTypes from '../actionTypes'

 export const devModeReducer = (state = initalState.devMode, action) => {
     switch (action.type) {
         case actionTypes.UPDATE_DEV_MODE: {
            return action.bool
         }
         
         default:
            return state
     }
 }