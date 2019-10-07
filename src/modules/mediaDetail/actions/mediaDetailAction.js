import axios from "axios";
import {Actions} from 'react-native-router-flux';
import {getMovieDetailRoute, getTVShowDetailRoute} from "../../../services/route/routes";
import variables from "../../../../variables";

//Action the get the details of movies
export const getMovieDetailAction = (movieId, type) => async (dispatch, getState) => {

    let movieDetail = await axios.get(getMovieDetailRoute(movieId, variables.apiV4))
        .then(function (response) {
            return response;
        })
        .catch(function (error) {
            return error.response
        });

    dispatch({
        type: 'UPDATE_DETAIL',
        payload: movieDetail.data
    });

    Actions.MediaDetail({mediaType:type});
};

//Action the get the details of TV shows
export const getTVShowDetailAction = (TVShowId) => async (dispatch, getState) => {

    let TVShowDetail = await axios.get(getTVShowDetailRoute(TVShowId, variables.apiV4))
            .then(function (response) {
                return response;
            })
            .catch(function (error) {
            return error.response
        });

    dispatch({
        type: 'UPDATE_DETAIL',
        payload: TVShowDetail.data
    });

    Actions.MediaDetail({mediaType:'TVShow'});

};
