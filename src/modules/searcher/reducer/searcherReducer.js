const INITIAL_STATE = {
    searchResult: []
};


//Ejmplo
export default (state = INITIAL_STATE, action) => {
    console.log(action);
    switch (action.type) {
        case "UPDATE_SEARCH": {
            return {
                ...state,
                searchResult: action.payload
            }
        }
        case "CLEAN_SEARCHER": {
            return {
                ...state,
                searchResult: []
            }
        }
        default:
            return state
    }
}