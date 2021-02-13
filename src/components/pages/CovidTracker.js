import { connect } from 'react-redux';
import React, { Component } from 'react'
import {covidTracker} from '../../actions'
import '../styles/CovidTracker.css'

class CovidTracker extends Component {
    componentDidMount() {
        this.props.covidTracker();
    }
    render() {
        if (this.props.covid.data) {
            return (
                <div>
                    <div className={'casesToday'}>
                        <p className={'title'}>CASES TODAY</p>
                        <p className={'number'}>{this.props.covid.data[0].change_cases}</p>
                    </div>
                    <div className={'totalCases'}>
                        <p className={'titleGreen'}>TOTAL CASES</p>
                        <p className={'numberGreen'}>{this.props.covid.data[0].total_cases}</p>
                    </div>
                    <div className={'deathsToday'}>
                        <p className={'title'}>DEATHS TODAY</p>
                        <p className={'number'}>{this.props.covid.data[0].change_fatalities}</p>
                    </div>
                    <div className={'totalDeaths'}>
                        <p className={'titleBlue'}>TOTAL DEATHS</p>
                        <p className={'numberBlue'}>{this.props.covid.data[0].total_fatalities}</p>
                    </div>
                    <div className={'stats'}>
                        <p className={'text'}>LAST UPDATED: {this.props.covid.last_updated}</p>
                        <p className={'text'}>RECOVERIES TODAY: {this.props.covid.data[0].change_recoveries}</p>
                        <p className={'text'}>TOTAL RECOVERIES: {this.props.covid.data[0].total_recoveries}</p>
                        <p className={'text'}>VACCINATIONS TODAY: {this.props.covid.data[0].change_vaccinations}</p>
                        <p className={'text'}>TOTAL VACCINATIONS: {this.props.covid.data[0].total_vaccinations}</p>
                    </div>
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