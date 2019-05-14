import restCountries from '../apis/restCountries';

export const fetchCountriesByContinent = (continent) => async dispatch => {
    const response = await restCountries.get(`/region/${continent}`); 

    dispatch({ type: 'FETCH_COUNTRIES', payload: response.data });
}
