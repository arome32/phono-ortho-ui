import actionTypes from '../actionTypes'
import axios from 'axios';
import initalState from '../initalState';

export const wakeupReducer = (state = initalState.wakeup, action) => {
    switch (action.type) {
        case actionTypes.WAKE_UP_SERVER: {
           axios.get(`https://phono-ortho-spelling-backend.herokuapp.com/wakeup`, {
              headers: {"Access-Control-Allow-Origin": "*"}, responseType: 'json',})
              .then(res => {
                 console.log(res);
                 console.log(res.data);
            }).catch(err => {
               console.log(err)
            });
            return true;
         }
        default:
           return state
    }
}