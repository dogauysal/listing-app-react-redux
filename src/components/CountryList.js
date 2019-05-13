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