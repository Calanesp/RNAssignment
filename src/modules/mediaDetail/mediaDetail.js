import React, {Component} from 'react';
import {View, Text, Dimensions, Image, FlatList, ScrollView} from "react-native";
import {connect} from "react-redux";


const windowHeight = Dimensions.get('window').height;

class MediaDetail extends Component {

    render() {
        let media = this.props.mediaDetail.mediaDetail;
        console.log(this.props);
        let title = this.props.mediaType === 'movie' ? media.title : media.name;
        let titleSize = title.length < 26 ? 40 : 30;
        return (
            <ScrollView style={{flex: 1, backgroundColor: '#3e3a3b'}}>
                <View style={styles.topContainer}>
                    <View style={styles.metadataContainer}>
                        <Text style={[styles.title, {fontSize:titleSize}]}>{title}</Text>
                        <Text style={styles.tagline}>{media.tagline}</Text>
                        <Text style={[styles.tagline,{paddingTop:10}]}>Vote average: {media.vote_average}</Text>
                    </View>
                    <View style={styles.imageContainer}>
                        <Image source={{uri: 'http://image.tmdb.org/t/p/w342' + media.poster_path}}
                               style={styles.poster}
                               resizeMode={'contain'}/>
                    </View>
                </View>
                <View style={styles.descriptionContainer}>
                    <Text style={[styles.title,{fontSize:30}]}>Description</Text>
                    <Text style={styles.description}>{media.overview}</Text>
                </View>
            </ScrollView>
        )
    }


}

const styles = {
    topContainer: {
        height: windowHeight * 0.4,
        flexDirection: 'row',
    },
    metadataContainer: {
        flex: 1,
        flexDirection: 'column',
        padding: 10,
        paddingTop:30

    },
    imageContainer: {
        flex: 1,
        paddingTop:20
        // justifyContent: 'center',
        // alignItems: 'center'
    },
    poster: {
        flex: 1,
    },
    title: {
        color: 'white',
        fontFamily:'Wanted M54',
        paddingBottom:10,
        textAlign: 'center'
    },
    tagline: {
        fontSize: 15,
        color: 'white',
        paddingBottom: 10,
        fontFamily: 'Chapaza'
    },
    descriptionContainer: {
        padding:10,
        paddingTop: 40
    },
    description:{
        fontSize: 15,
        color: 'white',
        //fontFamily: 'Chapaza',
        paddingTop: 20,
        textAlign:'justify'
    }
};

const mapStateToPros = state => {
    return {
        mediaDetail: state.mediaDetailReducer,
    }
};

const mapStateToPropsAction = {};

export default connect(mapStateToPros, mapStateToPropsAction)(MediaDetail);