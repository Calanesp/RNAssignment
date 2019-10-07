import {Dimensions, Image, View, Text,TouchableOpacity} from "react-native";
import React from "react";

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;


export const MediaDisplay = (props) => {
    let {title, poster,id ,action} = props;

    //Individual render of carousel's items
    return(
        <TouchableOpacity style={styles.mainContainer} onPress={()=>{action(id)}}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{title}</Text>
            </View>
            {poster !== null ?
                <Image source={{uri: 'http://image.tmdb.org/t/p/w342' + poster}} style={styles.poster}
                       resizeMode={'cover'}/> :
                <Image source={require('../../../../assets/images/no-image-icon.png')} style={[styles.poster,{alignSelf:'center'}]}
                       resizeMode={'contain'}/>
            }
        </TouchableOpacity>
    )
};

const styles = {
    mainContainer:{
        width:windowWidth*0.5, height: windowHeight*0.6,
        paddingRight:5,
        paddingLeft:5,
        flexDirection:'column',
        alignSelf:'center',
        borderWidth:2,
        borderColor:'#5a5657',
        backgroundColor: '#3e3a3b',
    },
    titleContainer:{
        paddingTop:2,
        height:'30%',
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        textAlign:'center',
        fontSize: 20,
        fontFamily: 'Chapaza',
        color:'#e3e1e2'
    },
    poster:{
        flex:1,
        marginLeft:5,
        marginRight: 5
    }
};