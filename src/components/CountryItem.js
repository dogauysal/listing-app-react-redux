import React from 'react';

class CountryItem extends React.Component {

    convertPopulation(population) {
        return Math.round(population).toLocaleString(navigator.language, { minimumFractionDigits: 0 })
    }

    render() {

        const { country  } = this.props;

        return (
            
            <div className="card">
                <div className="content">
                    <img className="right floated mini ui image" src={country.flag} alt=""/>
                    <div className="header">
                        {country.name}
                    </div>
                    <div className="meta">
                        Capital: {country.capital}
                    </div>
                    <div className="description">
                        <label>Population: {this.convertPopulation(country.population)}</label><br/>
                        <label>Region: {country.region}</label><br/>
                        <label>Subregion: {country.subregion}</label>
                    </div>
                </div>
          </div>
        )
    }
}

export default CountryItem;