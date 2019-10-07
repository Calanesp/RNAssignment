import React, {Component} from 'react';
import {View} from 'react-native';
import {connect} from "react-redux";
import {getMostPopularMedia} from "../listView/action/listViewAction";


class reduxPresis extends Component {

    //Update de general state with the needed movies and shows
    async componentDidMount(): void {
        this.props.getMostPopularMedia();
    }


    render(){
        return(
        <View style={{flex:1}}>
        </View>
        )

    }
}


const mapStateToPros = state => {
    return {
    }
};

const mapStateToPropsAction = {getMostPopularMedia};

export default connect(mapStateToPros, mapStateToPropsAction)(reduxPresis);
