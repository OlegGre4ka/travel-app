import React from 'react';
import {
    InputGroupAddon,
    InputGroupText,
    Input
} from 'reactstrap';
import { FaSistrix } from "react-icons/fa";

const SearchFromComponent = props => {
  
    return (
        <div className="SearchFromComponent">
           <p style={{color:'orangered',fontSize:"18px"}}>Search by place of departure:</p> 
            <InputGroupAddon addonType="append" size="normal">
                <Input
                    type="text"
                    placeholder="Search..."
                    value={props.searchWordFrom}
                    onChange={props.changedFrom}
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