import * as actionTypes from  "../actionTypes";

export const wakeupServer = () => (dispatch) => {
    dispatch({type: actionTypes.WAKE_UP_SERVER, });
}
