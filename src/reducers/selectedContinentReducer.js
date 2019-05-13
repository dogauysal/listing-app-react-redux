export default (selectedContinent= null, action) => {
    if(action.type === 'CONTINENT_SELECTED') {
        return action.payload;
    }

    return selectedContinent;
}