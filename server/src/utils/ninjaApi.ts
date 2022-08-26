import countryNames from "./countryNames";


const randomInterval = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
};


export const randomCountry = () => {
    const random = randomInterval(0, countryNames.length -1);
    const randomCountry = countryNames[random];
    return randomCountry
    
}

export const findCountry = ( search: string, limit = 0) => {

    const foundCountries = countryNames.filter(country => {
        //check if any of the countries include the search term
        //improve to return more relevant results
        return country.name.toLowerCase().includes(search.toLowerCase());
    })

    return foundCountries;
}

export const countryExists = (search: string) => {
    return countryNames.find(country => country.code.toLowerCase() === search.toLowerCase()) !== undefined;
}