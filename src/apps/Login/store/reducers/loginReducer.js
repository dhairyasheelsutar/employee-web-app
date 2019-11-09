import * as actionTypes from '../actions';

const initialState = {
    username: "",
    password: "",
    requestFailed: undefined,
    formSubmitted: false
};

const loginReducer = (state = initialState, action) => {

    switch (action.type){
        case actionTypes.INPUT_CHANGE:
            return{
                ...state,
                ...action.value
            };

        default:
            return{
                ...state
            }
    }

};

export default loginReducer;

