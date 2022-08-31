import React, { useEffect, useState } from 'react'
import PokemonThumb from './PokemonThumb'

const Pokedex = () => {
    const [allPokemons, setAllPokemons] = useState([])
    const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0')

    const getAllPokemons = async () => {
        const res = await fetch(loadMore)
        const data = await res.json()


        await setLoadMore(data.next)

        function createPokemonObject(results) {
            results.forEach(async pokemon => {
                const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
                const data = await res.json()
                setAllPokemons(currentList => [...currentList, data])
                allPokemons.sort((a, b) => a.id - b.id)
            })
        }
        createPokemonObject(data.results)
    }

    useEffect(() => {
        getAllPokemons()
    }, [])

    return (
        <div className="app-contaner">

            <div className="pokemon-container">
                <div className="all-container">
                    {allPokemons.map((pokemonStats, index) =>
                        <PokemonThumb
                            key={index}
                            id={pokemonStats.id}
                            image={pokemonStats.sprites.other.dream_world.front_default}
                            name={pokemonStats.name}
                            type={pokemonStats.types[0].type.name}
                        />)}

                </div>
                <button className="load-more" onClick={() => getAllPokemons()}>Load more</button>
            </div>
        </div>
    );
}

export default Pokedex;

