import React, { Component } from 'react';
import './contacts.scss';

class Contacts extends Component {
    render() {
        return (
            <div className="Contacts">
                <h1><i>Contacts</i></h1>
                <p style={{ color: 'orangered', fontSize: '20px' }}>For advertising, please contact our office: </p>
                <div className="row">
                    <div className="Col-5 col-md-5"></div>
                    <div>
                        <p style={{ textAlign: 'left', margin: 'auto' }}><i>TravelApp <br /> 11301<br />
                            West Olympic Boulevard<br /> Apt. 100<br /> Los Angeles, CA 90064 <br />USA </i></p>
                    </div>
                </div>


            </div>
        )
    }
}
export default Contacts