import '../css/style.css';
import React from 'react';
import { connect } from 'react-redux';
import { fetchCountriesByContinent } from '../actions';

class ContinentList extends React.Component {

    componentDidUpdate() {

    }

    render() {
        return  this.props.continents.map(continent => { 
            return (
                <div className="ui card  custom-card" onClick={() => this.props.fetchCountriesByContinent(continent.region)} >
                    <div className="content ">
                        <div className="center aligned description ">
                            <p>{continent.region}</p>
                         </div>
                    </div>
                </div>
            )
        })
    }
}

const mapStateToProps = state => {
    return { 
        continents: state.continents, 
        selectedContinent: state.selectedContinent  
    }
}

export default connect(
    mapStateToProps,
    { fetchCountriesByContinent }
)(ContinentList);