import * as actionTypes from '../actions';

const initialState = {
    email: "",
    firstName: "",
    lastName: "",
    photo: "",
    requestFailed: false
};

const registerReducer = (state = initialState, action) => {

    switch (action.type){

        case actionTypes.onInputChange:
            const obj = {...state};
            obj[action.key] = action.value;
            return obj;

        case actionTypes.requestStatus:
            return {
                ...state,
                requestFailed: action.status
            };


    }

    return state;

};

export default registerReducer;