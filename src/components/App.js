import React from 'react';
import ContinentList from './ContinentList';
import CountryList from './CountryList';

const App = () => {
    return (
        <div className="app"> 
            <div className="ui container grid">
                <div className="ui row">
                    <div className="column six wide">
                        <ContinentList />
                    </div>
                    <div className="column ten wide">
                        <CountryList />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default App;