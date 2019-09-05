import React, { Component } from 'react';
import {
    InputGroupAddon,
    InputGroupText,
    Input
} from 'reactstrap';
import { FaSistrix } from "react-icons/fa";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";


class SearchToComponent extends Component {
    constructor(props) {
        super(props)
    }
    updateSearchWord = event => {
        this.props.updateSearchWordTo(event.target.value)
    }

    render() {
        console.log(this.props.searchWordTo, 'from Reducer');

        return (
            <div className="SearchToComponent">
                <p style={{ color: 'orangered', fontSize: "18px" }}>Search at the place of arrival:</p>
                <InputGroupAddon addonType="append" size="normal">
                    <Input
                        type="text"
                        placeholder="Search..."
                        value={this.props.searchWordTo}
                        onChange={this.updateSearchWord}
                        // onChange={props.changedTo}
                        onBlur={this.props.handleBlur}
                    />
                    <InputGroupText
                    >
                        <FaSistrix />
                    </InputGroupText>

                </InputGroupAddon>
            </div>
        )
    }

}
const mapStateToProps = state => {
    return {
        searchWordTo: state.searchToReducer.searchWordTo
    };
};

const mapDispatchToProps = dispatch => {
    return {
        updateSearchWordTo: searchWordTo => {
            dispatch({ type: "UPDATE_SEARCHED_WORD_TO", payload: searchWordTo });
        }

    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchToComponent))