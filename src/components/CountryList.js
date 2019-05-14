import React from 'react';
import CountryItem from './CountryItem';
import { connect } from 'react-redux';

class CountryList extends React.Component {

    renderList() {
        return this.props.countries.map(country => {
            return (
                <CountryItem country={country} />
            )
        })
    }

    render() {

        if(this.props.countries.length === 0)
            return <div className="loading">Select a continent to view countries</div>

        return (
            <div className="ui cards">{this.renderList()}</div>
        )
    }
}

const mapStateToProps = state => {
    return { countries: state.countries }
}

export default connect(
    mapStateToProps
)(CountryList);