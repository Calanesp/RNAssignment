import React, {Component} from 'react';
import {View, Dimensions, TextInput} from "react-native";
import {connect} from "react-redux";
import {getMovieDetailAction} from "../mediaDetail/actions/mediaDetailAction";
import {cleanSearcherAction, updateSearcherAction} from "./actions/searcherAction";
import {Carousel} from "../listView/element/carousel";


const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

class Searcher extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }

    }

    componentWillUnmount(): void {
        this.props.cleanSearcherAction();
    }


    render() {

        return (
            <View>
                <TextInput
                    style={{paddingLeft: 20}}
                    placeholder={'Search...'}
                    onChangeText={(text) => {
                        this.setState({text: text})
                    }}
                    onSubmitEditing={() => this.props.updateSearcherAction(this.state.text)}
                />
                <View style={{height:'100%',backgroundColor: '#3e3a3b'}}>
                    <Carousel title={'Search Results'} data={this.props.search.searchResult} type={'movie'}
                              action={(movieId) => this.props.getMovieDetailAction(movieId, 'movie')}/>
                </View>
            </View>
        )
    }


}

const styles = {};

const mapStateToPros = state => {
    return {
        search: state.searcherReducer
    }
};

const mapStateToPropsAction = {updateSearcherAction, getMovieDetailAction, cleanSearcherAction};

export default connect(mapStateToPros, mapStateToPropsAction)(Searcher);