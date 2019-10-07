import React, {Component} from 'react';
import {View, Dimensions, Image, TouchableOpacity, ScrollView} from "react-native";
import {connect} from "react-redux";
import {Carousel} from './element/carousel'
import {getMovieDetailAction, getTVShowDetailAction} from "../mediaDetail/actions/mediaDetailAction";
import {Actions} from 'react-native-router-flux';


const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

class ListView extends Component {

    _renderItem(item) {
        return (
            <View style={{width: windowWidth * 0.5, marginRight: 5, marginLeft: 5}}>
                <Image source={{uri: 'http://image.tmdb.org/t/p/w342' + item.poster_path}} style={{flex: 1}}
                       resizeMode={'contain'}/>
            </View>
        )
    }

    render() {
        console.log(this.props.mostPopularMedia.movieList);
        return (
            <View>
                <ScrollView style={{backgroundColor: '#3e3a3b'}}>
                    <Carousel title={'Most Popular Movies'} data={this.props.mostPopularMedia.movieList} type={'movie'}
                              action={(movieId) => this.props.getMovieDetailAction(movieId, 'movie')}/>
                    <Carousel title={'Most Popular TV Shows'} data={this.props.mostPopularMedia.tvShowList}
                              type={'TVShow'} action={(TVShowId) => this.props.getTVShowDetailAction(TVShowId, 'TV')}/>
                    <Carousel title={'Most Popular Documentaries'} data={this.props.mostPopularMedia.documentaryList}
                              type={'genre'} action={(movieId) => this.props.getTVShowDetailAction(movieId, 'genre')}/>
                    <Carousel title={'Most Popular Family Shows'} data={this.props.mostPopularMedia.familyList}
                              type={'genre'} action={(movieId) => this.props.getTVShowDetailAction(movieId, 'movie')}/>
                </ScrollView>
                <TouchableOpacity style={styles.button} onPress={() => {Actions.Searcher()}}>
                    <Image source={require('../../../assets/images/loupe.png')} resizeMode={'contain'} style={{width: 50, height: 50}}/>
                </TouchableOpacity>
            </View>

        )

    }


}

const styles = {
    title: {
        fontSize: 30,
        textAlign: 'center',
        fontFamily: 'Wanted M54',
        marginBottom: 20,
        marginTop: 10,
        color: 'white'
    },
    button: {
        position: 'absolute',
        bottom: 30,
        right: 30,
        width: 70,
        height: 70,
        borderRadius:65/2,
        backgroundColor: 'white',
        alignItems:'center',
        justifyContent:'center'
    }
};

const mapStateToPros = state => {
    return {
        mostPopularMedia: state.listViewReducer,
    }
};

const mapStateToPropsAction = {getMovieDetailAction, getTVShowDetailAction};

export default connect(mapStateToPros, mapStateToPropsAction)(ListView);