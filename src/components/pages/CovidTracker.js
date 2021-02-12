import { connect } from 'react-redux';
import React, { Component } from 'react'
import {covidTracker} from '../../actions'

class CovidTracker extends Component {
    componentDidMount() {
        this.props.covidTracker();
    }
    render() {
        if (this.props.covid.data) {
            return (
                <div>
                    <p>Last Updated: {this.props.covid.last_updated}</p>
                    <p>Cases Today: {this.props.covid.data[0].change_cases}</p>
                    <p>Deaths Today: {this.props.covid.data[0].change_fatalities}</p>
                    <p>Recoveries Today: {this.props.covid.data[0].change_recoveries}</p>
                    <p>Vaccinations Today: {this.props.covid.data[0].change_vaccinations}</p>
                    <p>Total Cases: {this.props.covid.data[0].total_cases}</p>
                    <p>Total Deaths: {this.props.covid.data[0].total_fatalities}</p>
                    <p>Total Recoveries: {this.props.covid.data[0].total_recoveries}</p>
                    <p>Total Vaccinations: {this.props.covid.data[0].total_vaccinations}</p>
                    <p>Total Cases: {this.props.covid.data[0].total_cases}</p>
                </div>
            )
        } else {
            return (
                <div>
                    <p>Loading...</p>
                </div>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {covid: state.covid}
}

export default connect(mapStateToProps, {covidTracker})(CovidTracker)