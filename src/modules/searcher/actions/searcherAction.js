import axios from "axios";
import {
    getSearchMovieRoute,
} from "../../../services/route/routes";
import variables from "../../../../variables";

//Action to update the searcher reducer with the result of the search
export const updateSearcherAction = (textToSearch) => async (dispatch, getState) => {

    let searchResult = await axios.get(getSearchMovieRoute(textToSearch, variables.apiV4))
        .then(function (response) {
            return response;
        })
        .catch(function (error) {
            return error.response
        });

    dispatch({
        type:'UPDATE_SEARCH',
        payload:searchResult.data.results
    })



};

//Action to clean the searcher reducer
export const cleanSearcherAction = () => async (dispatch, getState) => {
    dispatch({
        type:'CLEAN_SEARCHER'
    })
};


