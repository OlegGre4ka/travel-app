import React, { Component } from 'react';
import './travellers.scss';
import { Spinner } from 'reactstrap';
import {
    Card,
    CardBody,
    CardText
} from 'reactstrap';
import { Alert } from 'reactstrap';
import SearchFromComponent from './searchFromComponent/searchFromComponent';
import SearchToComponent from './searchToComponent/searchToComponent';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class Travellers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            travellers: [],
            CopyTravellers: [],
            message: false,
            spinner: true,
            searchWordFrom: '',
            // searchWordTo: '',
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

            const searchFrom = this.state.travellers.filter(item => {
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
                    }, 2700
                )
            } else {
                this.setState({
                    travellers: searchFrom
                })
            }
        })

    }
    // Метод котрый можна передвать как ссылку через props при испольщовании searchToComponent.js как функционального
    //   onSearchToInputChange = event => {

    //     this.setState({
    //         searchWordTo: event.target.value
    //     }, () => {
    //         this.setState({ searchWordTo: this.state.searchWordTo });

    //         const searchTo = this.state.CopyTravellers.filter(item => {
    //             return item.toName.toLowerCase().includes(this.state.searchWordTo.trim().toLowerCase())
    //         });

    //         if (searchTo.length === 0) {
    //             this.setState({
    //                 message: true,
    //                 travellers: searchTo,
    //                 searchWordTo: ''
    //             });
    //             setTimeout(
    //                 () => {
    //                     this.setState({
    //                         message: false,
    //                         travellers: this.state.CopyTravellers,
    //                     });
    //                 }, 2500
    //             )
    //         } else {
    //             this.setState({
    //                 travellers: searchTo
    //             })
    //         }
    //     })
    // }

    componentDidUpdate(prevProps) {
        if (prevProps.searchWordTo !== this.props.searchWordTo) {

            const searchTo = this.state.travellers.filter(item => {
                return item.toName.toLowerCase().includes(this.props.searchWordTo.trim().toLowerCase())
            });

            if (searchTo.length === 0) {

                this.setState({
                    message: true,
                    travellers: searchTo,
                });

                setTimeout(
                    () => {
                        this.setState({
                            message: false,
                            travellers: this.state.CopyTravellers,
                        });
                    }, 2700
                )
                this.props.updateSearchWordTo('');
            } else {
                this.setState({
                    travellers: searchTo
                })
            }
        }
    }

    async gettingListTravellers() {
        const response = await fetch(
            'http://localhost:4000/travellers'
        );
        const data = await response.json();
        this.setState({
            travellers: data,
            CopyTravellers: data,
            spinner: false
        });

    }

    handerBlur = () => {
        this.props.updateSearchWordTo('');

        this.setState({
            searchWordFrom: '',
            travellers: this.state.CopyTravellers,
        });
    }

    render() {
        return (
            <div className="Travellers">
                <h1><i>Travellers</i></h1>
                <div className="SearchRow row">
                    <div className="col-md-6">
                        <SearchFromComponent
                            handleBlur={this.handerBlur}
                            searchWordFrom={this.state.searchWordFrom}
                            changedFrom={this.onSearchFromInputChange} />
                    </div>
                    <div className="col-md-6">
                        <SearchToComponent
                            handleBlur={this.handerBlur}
                        />
                    </div>
                </div>

                {this.state.spinner && <Spinner color="success" style={{ width: '5rem', height: '5rem', marginTop: '8rem' }} />}

                <div className="Row row" style={{ padding: '10px' }}>
                    {this.state.message && <Alert style={{ color: 'red', fontSize: '24px', margin: 'auto' }}>According to the entered data there is no place of departure!</Alert>}
                    {this.state.travellers.map((traveller, i) => (
                        <div key={i} className="col-md-4"  >

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
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Travellers))