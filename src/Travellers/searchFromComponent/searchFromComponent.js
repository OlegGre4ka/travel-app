import React from 'react';
// import './contacts.scss';
import {
    InputGroupAddon,
    InputGroupText,
    Input
} from 'reactstrap';
import { FaSistrix } from "react-icons/fa";

const SearchFromComponent = props => {
    // if(props.InputFrom.blur()){
    //     props.searchWordFrom = ''   
    // }
    return (
        <div className="SearchFromComponent">
            Search by place of departure:
            <InputGroupAddon addonType="append" size="normal">
                <Input
                    type="text"
                    placeholder="Search..."
                    value={props.searchWordFrom}
                    onChange={props.changedFrom}
                    // onKeyPress={props.changedFrom}
                    // ref={input => {
                    //     props.InputFrom = input}}
                    onBlur={props.handleBlur}
                />
                <InputGroupText
                >
                    <FaSistrix />
                </InputGroupText>

            </InputGroupAddon>
        </div>
    )
}
export default SearchFromComponent