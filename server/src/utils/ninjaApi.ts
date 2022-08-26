import countryNames from "./countryNames";


const randomInterval = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
};


export const RandomCountry = () => {
    const random = randomInterval(0, countryNames.length -1);
    console.log(random);
    const randomCountry = countryNames[random];
    console.log(countryNames[random]);
    return randomCountry
    
}

export const findCountry = (limit = 0) => {

    const foundCountries = countryNames.filter(country => {
    })
}