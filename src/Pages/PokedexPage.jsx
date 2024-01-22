import { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import useFetch from '../hooks/useFetch'
import PokeCard from '../components/PokedexPage/PokeCard'
import SelectType from '../components/PokedexPage/SelectType'

const PokedexPage = () => {
    const [inputValue, setInputValue] = useState("")
    const [typeSelected, setTypeSelected] = useState('allPokemons')
    const trainer = useSelector(store => store.trainer)
    const inputSearch = useRef()
    const url = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=500'
    const [pokemons, getPokemons, getTypePokemon] = useFetch(url)

    useEffect(() => {
        if (typeSelected === "allPokemons") {
            getPokemons()
        } else {
            getTypePokemon(typeSelected)
        }

    }, [typeSelected])

    const handleSearch = (e) => {
        e.preventDefault()
        setInputValue(inputSearch.current.value.trim().toLowerCase())
    }
    const pokeFiltered = pokemons?.results.filter(poke => poke.name.includes(inputValue))

    const [currentPage, setCurrentPage] = useState(1)
    const pokemonsPerPage = 12

    const lastIndex = pokemonsPerPage * currentPage
    const firstIndex = lastIndex - pokemonsPerPage

    const pokemonsPaginated = pokemons?.results.length


    return (
        <div className='card__principal'>
            <div className='card__imagen'>

                <img className="card__image__header" src="/headerPokeListImg.svg" alt="" />
                <img className="card__image__poke" src="/public/pokedexHeaderForm.svg" alt="" />

            </div>
            <header className='card__item' >
                <p className='card__title'>

                    <span className='card__wel'> Welcome {trainer} </span>,  here you can find your favorite pokemon
                </p>
                <form className='form' onSubmit={handleSearch}>
                    <input className="input__item" placeholder="Search a pokemon" ref={inputSearch} type="text" />
                    <button className='btn__item'>Search</button>

                </form>



                <SelectType setTypeSelected={setTypeSelected} />


            </header>

            <div className='card__secun'>
                {
                    pokeFiltered?.slice(firstIndex, lastIndex, pokemonsPaginated).map(poke => (
                        <PokeCard
                            key={poke.url}
                            url={poke.url} />))


                }
            </div>
            <div className='btn'>
                <button className='btn__Back' onClick={() => setCurrentPage(currentPage - 1)}>Back</button>
                <button className='btn__Next' onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
            </div>
        </div>

    )

}

export default PokedexPage