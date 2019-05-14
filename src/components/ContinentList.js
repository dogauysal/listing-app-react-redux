import '../css/style.css';
import React from 'react';
import { connect } from 'react-redux';
import { fetchCountriesByContinent } from '../actions';

class ContinentList extends React.Component {

    state={
        active: null
    }

    render() {
        return  this.props.continents.map((continent,index) => {
            return (

                <div key={index} className={`ui card custom-card ${this.state.active === index ? `selected-card` : `` } `} onClick={() => {
                    this.props.fetchCountriesByContinent(continent.region)
                    this.setState(prevState=>{
                        return{
                            ...prevState,
                            active: index
                        }
                    })
                    }} >
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
        continents: state.continents
    }
}

export default connect(
    mapStateToProps,
    { fetchCountriesByContinent }
)(ContinentList);