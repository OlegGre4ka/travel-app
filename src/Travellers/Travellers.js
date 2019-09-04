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
            CopyTravellers: [],
            message: false,
            spinner: true,
            searchWordFrom: '',
            searchWordTo: '',
        };
    }

    componentDidMount() {
        this.gettingListTravellers();

    }
    onSearchFromInputChange = event => {
    
        this.setState({
            searchWordFrom: event.target.value
        }, () => {
            this.setState({ searchWordFrom: this.state.searchWordFrom });

            const searchFrom = this.state.CopyTravellers.filter(item => {
                return item.fromName.toLowerCase().includes(this.state.searchWordFrom.trim().toLowerCase())
            });

            if (searchFrom.length === 0) {
                this.setState({
                    message: true,
                    travellers: searchFrom,
                    searchWordFrom: ''
                });
                setTimeout(
                    () => {
                        this.setState({
                            message: false,
                            travellers: this.state.CopyTravellers,
                        });
                    }, 2500
                )
            } else {
                this.setState({
                    travellers: searchFrom
                })
            }
        })

    }

      onSearchToInputChange = event => {
    
        this.setState({
            searchWordTo: event.target.value
        }, () => {
            this.setState({ searchWordTo: this.state.searchWordTo });

            const searchTo = this.state.CopyTravellers.filter(item => {
                return item.toName.toLowerCase().includes(this.state.searchWordTo.trim().toLowerCase())
            });

            if (searchTo.length === 0) {
                this.setState({
                    message: true,
                    travellers: searchTo,
                    searchWordTo: ''
                });
                setTimeout(
                    () => {
                        this.setState({
                            message: false,
                            travellers: this.state.CopyTravellers,
                        });
                    }, 2500
                )
            } else {
                this.setState({
                    travellers: searchTo
                })
            }
        })
    }

    async gettingListTravellers() {
        const response = await fetch(
            'http://localhost:4000/travellers'
        );
        const data = await response.json();
        console.log(data, 'data from json0server');
        this.setState({
            travellers: data,
            CopyTravellers: data,
            spinner: false
        });

    }

    handerBlur =()=>{
        this.setState({
            searchWordFrom: '',
            searchWordTo: '',
            travellers: this.state.CopyTravellers,
        });
    }

    render() {
        return (
            <div className="Travellers">
                <h1><i>Travellers</i></h1>
                <div className="SearchRow row">
                    <div className="col-6">
                        <SearchFromComponent 
                        handleBlur = {this.handerBlur}
                        searchWordFrom={this.state.searchWordFrom} 
                        changedFrom={this.onSearchFromInputChange} />
                    </div>
                    <div className="col-6">
                        <SearchToComponent 
                        handleBlur = {this.handerBlur}
                        searchWordTo={this.state.searchWordTo} 
                        changedTo={this.onSearchToInputChange} />
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