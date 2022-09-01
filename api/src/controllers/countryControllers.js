const { Router } = require('express');
const { Op } = require("sequelize");
const { Country, Activity } = require('../db');
const router = Router();

router.get('', async (req, res, next) => {
    try {
        const name = req.query.name;
        const allCountry = await  Country.findAll({
          include: {
            model: Activity,
            attributes: ['name', 'difficulty', 'duration', 'season'],
            through: {
              attributes: []
            }
          }
        })
        if(name){
            const countryName = await  Country.findAll({
              where: {
                name: {[Op.iLike]: `%${name}%`}
              },
              include: {
                model: Activity,
                attributes: ['name', 'difficulty', 'duration', 'season'],
                through: {
                  attributes: []
                }
              }
            })
            countryName.length !== 0 ?
            res.status(200).send(countryName) :
            res.json({ err: 'NOT able to store data in database' });
        }else{
            res.status(200).send(allCountry)
        }
    } catch (error) {
        next(error)
    }
}) 

router.get('/:id', async (req,res, next) => {
    try {
      const id = req.params.id.toUpperCase();
      if(id) {
        let countryId = await Country.findByPk(id, {
          include: Activity
        })
        countryId?
        res.json(countryId) :
        res.json({ err: 'NOT able to store data in database' });
        /* res.send('Contry not found') */
      }
    } catch (error) {
      next(error)
    }
   
})

/* router.delete('/delete/:id', async (res, req) => {
  try {
    const id = req.params.id
    if(id){
      await Country.detroy({
        where : {id : id}
      })
    }
  } catch (error) {
    return error
  }
}) */

module.exports = router;

/* router.get('', async (req, res, next) => {
  try {
      const name = req.query.name
      const allCountry = await  uploadCountry();
      if(name){
          const countryName = await allCountry.filter(el => el.name.toLowerCase().includes(name.toLocaleLowerCase()))
          countryName.length?
          res.status(200).send(countryName) :
          res.json({ err: 'NOT able to store data in database' });
      }else{
          res.status(200).send(allCountry)
      }
  } catch (error) {
      next(error)
  }
}) 

router.get('/:id', async (req,res, next) => {
  try {
    const id = req.params.id;
    const countryTotal = await uploadCountry()
    if(id) {
      let countryId = await countryTotal.filter(el => el.id.toLowerCase() == id.toLowerCase())
      countryId.length?
      res.json(countryId) :
      res.send('Recipe not found')
    }
  } catch (error) {
    next(error)
  }
 
}) */