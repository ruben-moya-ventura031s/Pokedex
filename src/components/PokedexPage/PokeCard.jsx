import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import { useNavigate } from 'react-router-dom'
import './styles/PokeCard.css'

const PokeCard = ({ url }) => {
    const [pokemon, getPokemon] = useFetch(url)

    const navigate = useNavigate()
    useEffect(() => {
        getPokemon()
    }, [])

    const handleNavigate = () => {
        navigate(`/pokedex/${pokemon.id}`)
    }
    const firstType = pokemon?.types[0].type.name
    return (
        <article className={`card ${firstType}-border`} onClick={handleNavigate}>
            <header className={`card__header ${firstType}-gradient`}>
                <img className='card__image'
                    src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
            </header>
            <section className='card__body'>
                <h3 className='card__name'>{pokemon?.name}</h3>
                <ul className='card__types'>{
                    pokemon?.types.map(typeInfo => (
                        <li className='card__typename' key={typeInfo.type.url}>{typeInfo.type.name}</li>
                    ))
                }
                </ul>
                <hr className='card__hr' />
                <ul className='card__stats'>
                    {
                        pokemon?.stats.map(statInfo => (
                            <li className='card__stat' key={statInfo.stat.url}>
                                <span className='card__stat__name' >{statInfo.stat.name}</span>
                                <span className='card__stat__value'>{statInfo.base_stat}</span>
                            </li>
                        ))
                    }
                </ul>
            </section>
        </article>

    )
}

export default PokeCard