import {FlatList, Text, View} from "react-native";
import React from "react";
import {MediaDisplay} from "./mediaDisplay";



export const Carousel = (props) => {
    let {title, data, type, action} = props;

    //General carousel which will show all the media
    return(
        <View style={styles.mainContainer}>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                style={{paddingBottom: '10%'}}
                horizontal={true}
                data={data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item, index}) => {
                    let itemTitle = (type === 'TVShow' || type === 'genre') ?  item.name : item.title;

                    return <MediaDisplay title={itemTitle} poster={item.poster_path} action={action}
                    id={item.id}/>
                }}
            />
        </View>
    )
};

const styles = {
    mainContainer: {
        paddingTop:20,
        borderWidth:2,
        borderBottomColor:'#5a5657'
    },
    title:{
        fontSize: 30,
        textAlign:'center',
        fontFamily:'Wanted M54',
        marginBottom: 20,
        paddingTop:10,
        color:'white'
    }
};