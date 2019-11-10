import * as actionTypes from  "../actionTypes";

export const updateDevMode = bool => (dispatch) => {
    dispatch({type: actionTypes.UPDATE_DEV_MODE, bool});
}