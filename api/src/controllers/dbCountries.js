const axios = require('axios');
const { Country } = require('../db');


const getApiCount = async () => {
    try {
        const getCount = await axios.get('https://restcountries.com/v3/all');
        const getInfo = await getCount.data.map(el => {
            return {
                id: el.cca3,
                name: el.name.common,
                flags: el.flags[1],
                continents: el.continents? el.continents[0] : el.continents[0] = 'data not found',
                capital: el.capital? el.capital[0] : el.capital = 'data not found',
                subregion: el.subregion? el.subregion : el.subregion = 'data not found',
                area: el.area,
                population: el.population
            }
        })
        return getInfo
    } catch (error) {
        console.log(error)
    }
}

async function uploadCountry () {
    try {
        const countr = await getApiCount();
        const countDb = await Country.findAll();
        if(!countDb.length) {
            const createCount = await Country.bulkCreate(countr)
            return createCount
        }else{
            return countDb;
        }
    } catch (error) {
        console.log(error)
    }
    
}




module.exports = { uploadCountry }
