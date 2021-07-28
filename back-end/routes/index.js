const express = require('express')
const router = express.Router()
const controller = require('../controllers/index')

router.get('/pokemon', controller.getAllPokemons)
router.get('/pokemon/:name', controller.getPokemon)

module.exports = router