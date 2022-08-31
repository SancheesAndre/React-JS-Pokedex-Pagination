import { useState } from 'react'
import axios from 'axios'

const SearchPokemon = async () => {
    const [search, setSearch] = useState()
    const [pokemon, setPokemon] = useState("")
    await axios.get(`https://pokeapi.co/api/v2/pokemon/${search}`)
        .then(async response => {
            await setPokemon(response.data)

        })
        .catch(error => console.log(error))
}

export default SearchPokemon