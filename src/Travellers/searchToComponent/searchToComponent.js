import React from 'react';
// import './contacts.scss';
import {
    InputGroupAddon,
    InputGroupText,
    Input
} from 'reactstrap';
import { FaSistrix } from "react-icons/fa";

const SearchToComponent = props => {
    return (
        <div className="SearchToComponent">
            Search at the place of arrival:
            <InputGroupAddon addonType="append" size="normal">
                <Input
                    type="text"
                    placeholder="Search..."
                    value={props.searchWordTo}
                    onChange={props.changedTo}
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

export default SearchToComponent