import '../css/style.css';
import React from 'react';
import { connect } from 'react-redux';

class ContinentList extends React.Component {

    render() {
        return  this.props.continents.map(continent => {
            return (
                <div className="ui card  custom-card">
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
    return { continents: state.continents }
}

export default connect(
    mapStateToProps
)(ContinentList);