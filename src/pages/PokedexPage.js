import Navbar from "../components/Navbar"
import SearchBar from "../components/SearchBar"
import Pokedex from "../components/Pokedex"


const PokedexPage = () => {

    const onSearchHandler = (pokemon) => {
        console.log('search ', pokemon)
    }
    

    return (
        <div>
            <Navbar />
            <SearchBar 
                onSearch={onSearchHandler} 

            />
            <Pokedex />
        </div>
    )
}

export default PokedexPage