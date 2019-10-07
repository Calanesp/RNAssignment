const INITIAL_STATE = {
    movieList: [],
    tvShowList: [],
    documentaryList: [],
    familyList:[]
};


//Ejmplo
export default (state = INITIAL_STATE, action) => {
    console.log(action);
    switch (action.type) {
        case "UPDATE_MOVIES": {
            return {
                ...state,
                movieList: action.payload
            }
        }
        case "UPDATE_TVSHOW": {
            return {
                ...state,
                tvShowList: action.payload
            }
        }case "UPDATE_DOCUMENTARY": {
            return {
                ...state,
                documentaryList: action.payload
            }
        }case "UPDATE_FAMILY": {
            return {
                ...state,
                familyList: action.payload
            }
        }
        default:
            return state
    }
}