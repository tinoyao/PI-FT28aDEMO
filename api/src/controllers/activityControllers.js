const { Router } = require('express');
const { Country, Activity } = require('../db');
const router = Router();

router.get('', async (req, res, next) => {
    try {
        const findActivity = await Activity.findAll({             
           include: {
               model: Country,

            }
        })
        return res.json(findActivity)
    } catch (error) {
        next(error)
    }
});

router.post('', async (req, res, next) => {

    try {
        const { name, difficulty, duration, season, country } = req.body

        const newActivity = await Activity.create({
            name,
            difficulty,
            duration,
            season
        })
        country.map( async (count) => {
            const countryDb = await Country.findOne({
                where: {
                    name: count
                }
            })
            newActivity.addCountry(countryDb)
        })
        //res.json(newActivity)
        res.status(200).send('Activity created successfully') 
    } catch (error) {
        next(error)
    } 
});


module.exports = router;