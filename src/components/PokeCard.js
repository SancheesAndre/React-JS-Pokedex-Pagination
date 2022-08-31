import './PokeCard.css'

const PokeCard = (props) => {
    const { pokemon } = props

    return (
        <div className='pokeCard'>
            <img className='PokeImg' src={pokemon.sprites.front_default} alt={pokemon.name} />
            <h1>{pokemon.name}</h1>
            <p>{pokemon.types.type}</p>
            
        </div>
    )
}

export default PokeCard