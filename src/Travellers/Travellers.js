import React, { Component } from 'react';
import './travellers.scss';
import { Spinner } from 'reactstrap';
import {
    Card,
    CardBody,
    CardText
} from 'reactstrap';
import SearchFromComponent from './searchFromComponent/searchFromComponent';
import SearchToComponent from './searchToComponent/searchToComponent';

class Travellers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            travellers: [],
            CopyTravellers:[],
            message: false,
            spinner: true,
            searchWord: ''
        };
    }

    componentDidMount() {
        this.gettingListTravellers();

    }

    onSearchFromInputChange = event => {
        this.setState({
            searchWord: event.target.value
        }, () => {
            this.setState({ searchWord: this.state.searchWord });
        })

        const searchFrom = this.state.travellers.filter(item => {
            return item.fromName.toLowerCase().includes(this.state.searchWord.trim().toLowerCase())
        });

        if (searchFrom.length === 0) {
            this.setState({
                message: true,
                travellers: searchFrom
            });
            setTimeout(
                () => {
                    this.setState({
                        message: false,
                        travellers: this.state.CopyTravellers
                    });
                }, 3000
            )
        } else {
            this.setState({
                travellers: searchFrom
            })
        }

        console.log(this.state.travellers, 'newArray-SearchFrom');

        if (event.key === "Enter") {
            this.setState({
                searchWord: ''
            })
        }

    }

    async gettingListTravellers() {
        const response = await fetch(
            'http://localhost:4000/travellers'
        );
        const data = await response.json();
        console.log(data, 'data from json0server');
        this.setState({
            travellers: data,
            CopyTravellers:data,
            spinner: false
        });

    }
    render() {
        return (
            <div className="Travellers">
                <h1><i>Travellers</i></h1>
                <div className="SearchRow row">
                    <div className="col-6">
                        <SearchFromComponent searchWord={this.state.searchWord} changedFrom={this.onSearchFromInputChange} />
                    </div>
                    <div className="col-6">
                        <SearchToComponent />
                    </div>
                </div>

                {this.state.spinner && <Spinner color="success" style={{ width: '5rem', height: '5rem', marginTop: '8rem' }} />}

                <div className="Row row" style={{ padding: '10px' }}>
                    {this.state.message && <p style={{ color: 'red', fontSize: '24px', margin: 'auto' }}>According to the entered data there is no place of departure!</p>}
                    {this.state.travellers.map((traveller, i) => (
                        <div key={i} className="Col-4 col-md-4"  >

                            <Card className="Card" key={i} style={{ marginBottom: '10px' }} >

                                <CardBody className="CardBody">
                                    <CardText className="CardText">From: {traveller.fromName}</CardText>
                                    <CardText className="CardText">To: {traveller.toName}</CardText>
                                    <CardText className="CardText">Depart at: {traveller.departAt}</CardText>
                                    <CardText className="CardText">Vehicle: {traveller.vehicle}</CardText>
                                </CardBody>
                            </Card>
                        </div>))
                    }
                </div>
            </div>
        )
    }
}
export default Travellers