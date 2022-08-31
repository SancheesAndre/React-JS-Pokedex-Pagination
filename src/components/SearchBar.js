import './SearchBar.css'
import PokeCard from './PokeCard'
import SearchPokemon from './SearchPokemon'
import { useState } from 'react'

const SearchBar = (props) => {
    const {onSearch, pokemon} = props
    const [search, setSearch] = useState()


    const onChangeHandler = (e) => {
        console.log("Pokemon: ", e.target.value)
        setSearch(e.target.value)

    }

    const onButtonClickHandler = () => {
        onSearchHandler(search)

    }

    const onSearchHandler = async () => {
       await SearchPokemon(pokemon)
    }

    return (
        <div>
            <div className="SearchBarContainer">
                <div className="SearchBar">
                    <input
                        placeholder="  Search Pokémon"
                        type="text"
                        onChange={onChangeHandler} />
                </div>
                <div className='SearchBarBtnContainer'>
                    <button className="SearchBarBtn" onClick={onButtonClickHandler}> 🔎 </button>
                </div>


            </div>
            {pokemon ? (
                <PokeCard pokemon={pokemon}/>
            ) : null}
        </div>
    )
}

export default SearchBar