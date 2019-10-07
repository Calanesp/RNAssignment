const INITIAL_STATE = {
    mediaDetail: {}
};


//Ejmplo
export default (state = INITIAL_STATE, action) => {
    console.log(action);
    switch (action.type) {
        case "UPDATE_DETAIL": {
            return {
                ...state,
                mediaDetail: action.payload
            }
        }
        default:
            return state
    }
}