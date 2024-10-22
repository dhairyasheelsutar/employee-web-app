import * as actionTypes from '../actions';

const initialState = {
    email: "",
    firstName: "",
    lastName: "",
    mobile: "",
    photo: "",
    requestFailed: undefined,
    person: "",
    formSubmitted: false,
    selectError: false,
    fileError: false
};

const registerReducer = (state = initialState, action) => {

    switch (action.type){

        case actionTypes.onInputChange:
            return{
                ...state,
                ...action.value
            };

        case actionTypes.RESET_FORM:
            return{
                ...state,
                formSubmitted: false,
                requestFailed: undefined
            };

        default:
            return{
                ...state
            }

    }

};

export default registerReducer;