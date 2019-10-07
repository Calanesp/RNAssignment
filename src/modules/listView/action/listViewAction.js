import axios from "axios";
import {
    getDocumentaryMediaRoute, getFamilyMediaRoute,
    getMostPopularMoviesRoute,
    getMostPopularTVRoute
} from "../../../services/route/routes";
import variables from "../../../../variables";
import {Actions} from 'react-native-router-flux';


//Action to get all needed media from database
export const getMostPopularMedia = () => async (dispatch, getState) => {

    //Movies from database
    let mostPopularMovies = await axios.get(getMostPopularMoviesRoute(variables.apiV4))
        .then(function (response) {
            return response;
        })
        .catch(function (error) {
            return error.response
        });

    //TV shows from database
    let mostPopularTVShow = await axios.get(getMostPopularTVRoute(variables.apiV4))
        .then(function (response) {
            return response;
        })
        .catch(function (error) {
            return error.response
        });

    //Documentaries from database
    let documentaryMedia = await axios.get(getDocumentaryMediaRoute(variables.apiV4))
        .then(function (response) {
            return response;
        })
        .catch(function (error) {
            return error.response
        });

    //Family genre shows from database
    let familyMedia = await axios.get(getFamilyMediaRoute(variables.apiV4))
        .then(function (response) {
            return response;
        })
        .catch(function (error) {
            return error.response
        });


    console.log("movies: ", mostPopularMovies, 'TV: ', mostPopularTVShow, 'family: ', familyMedia, 'documentary: ', documentaryMedia);
    dispatch({
        type: 'UPDATE_MOVIES',
        payload: mostPopularMovies.data.results
    });
    dispatch({
        type: 'UPDATE_DOCUMENTARY',
        payload: documentaryMedia.data.results
    });
    dispatch({
        type: 'UPDATE_FAMILY',
        payload: familyMedia.data.results
    });

    dispatch({
        type: 'UPDATE_TVSHOW',
        payload: mostPopularTVShow.data.results
    });

    Actions.ListView();
};
