import React, {Component} from 'react';
// import './contacts.scss';
import {
    InputGroupAddon,
    InputGroupText,
    Input
  } from 'reactstrap';
  import { FaSistrix } from "react-icons/fa";

class SearchToComponent extends Component {
render(){
    return(
        <div className="SearchToComponent">
            Search at the place of arrival:
            <InputGroupAddon addonType="append" size="normal">
                    <Input
                        type="text"
                        placeholder="Search..."
                    //   value={this.props.searchWord}
                    //   onChange={this.onSearchInputChange}
                    //   onKeyPress={this.onSearchInputChange}
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
export default SearchToComponent