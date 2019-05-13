import restCountries from '../apis/restCountries';

export const selectContinent = (continent) => {
    return {
        type: 'CONTINENT_SELECTED',
        payload: continent
    };
};

export const fetchCountriesByContinent = (continent) => async dispatch => {
    const response = await restCountries.get(`/region/${continent}`); 

    dispatch({ type: 'FETCH_COUNTRIES', payload: response.data });
}
