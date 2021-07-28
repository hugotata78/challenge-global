const axios = require('axios')
const url = 'https://pokeapi.co/api/v2/pokemon'

async function Data(url) {
    try {
        return await axios.get(url).then(response => {
            return response.data
        })
    } catch (error) {
        return error
    }

}

async function getAllPokemons(req, res) {
    try {
        const response = await axios.get(url)
        const arr = await Promise.all(response.data.results.map(r => {
            return Data(r.url)
        }))
        res.json(arr)
    } catch (error) {
        console.log(error)
    }
}
async function getPokemon(req, res) {
    try {
        const response = await axios.get(`${url}/${req.params.name}`)
        res.json(response.data)
    } catch (err) {
        console.log(err)
    }

}
module.exports = {
    getAllPokemons,
    getPokemon
}