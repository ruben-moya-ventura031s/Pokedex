import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'





const PokedexidPage = () => {

    const { id } = useParams()

    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const [pokemon, getPokemon] = useFetch(url)

    useEffect(() => {
        getPokemon()
    }, [id])

    console.log(pokemon)

    return (

        <div>

            <img className="card__image__header" src="/headerPokeListImg.svg" alt="" />
            <img className="card__image__poke" src="/public/pokedexHeaderForm.svg" alt="" />

            <div className='back'>
                <a href='http://localhost:5173/#/pokedex' class="btn">Back</a>
            </div>
            <div className="card__card">

                <div className="card__item__principal">

                    <header className={`card__item__header ${pokemon?.types[0].type.name}-gradient`}>

                        <img className="card__item__image" src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
                    </header>
                    <section className='card__section__first'>
                        <span className='card__item__orders'>
                            <h3 className='card__item__order'># {pokemon?.order}</h3>
                        </span>
                        <h2 className='card__item__name'>{pokemon?.name}</h2>

                        <ul className='card__item__dimensions'>
                            <span className='card__height'> Height</span>

                            <li className='card__item__height'>{pokemon?.height}</li>

                            <span className='card__weight'> Weight </span>
                            <li className='card__item__weight'>{pokemon?.weight}</li>

                        </ul>
                        <div className='card__abilities__type'>
                            <h3 className='card__abilities'>Abilities</h3>
                            <ul className='card__item__abilities'>

                                {
                                    pokemon?.abilities.map(abilitieInfo => (

                                        <li className='card__item__li' key={abilitieInfo.ability.url}>{abilitieInfo.ability.name}</li>

                                    ))
                                }
                            </ul>
                            <h3 className='card__type'> Type</h3>
                            <ul className='card__item__type'>

                                {
                                    pokemon?.types.map(typeInfo => (
                                        <li className='card__item__li' key={typeInfo.type.url}>{typeInfo.type.name}</li>
                                    ))
                                }


                            </ul>
                        </div>
                        <h3 className='card__item__stat'>Stats</h3>
                        <ul className='card__item__stats'>
                            <li className='card__item__hp'>Hp</li>
                            <li className='card__item__style'>
                                <span className="card__style1" style={{ '--w': `${pokemon?.stats[0].base_stat}%` }}>%</span> <span className='style__por'> {pokemon?.stats[0].base_stat}/150</span>
                            </li>
                            <li className='card__item__hp'>Attack</li>
                            <li className='card__item__style'>
                                <span className="card__style1" style={{ '--w': `${pokemon?.stats[1].base_stat}%` }}>%</span><span className='style__por'> {pokemon?.stats[1].base_stat}/150</span>
                            </li>
                            <li className='card__item__hp'>Defense</li>
                            <li className='card__item__style'>
                                <span className="card__style1" style={{ '--w': `${pokemon?.stats[2].base_stat}%` }}>%</span><span className='style__por'>{pokemon?.stats[2].base_stat}/150</span>
                            </li>
                            <li className='card__item__hp'>Special-Attack</li>
                            <li className='card__item__style'>
                                <span className="card__style1" style={{ '--w': `${pokemon?.stats[3].base_stat}%` }}>%</span><span className='style__por'>{pokemon?.stats[3].base_stat}/150</span>
                            </li>
                            <li className='card__item__hp'>Special-Defense</li>
                            <li className='card__item__style'>
                                <span className="card__style1" style={{ '--w': `${pokemon?.stats[4].base_stat}%` }}>%</span><span className='style__por'>{pokemon?.stats[4].base_stat}/150</span>
                            </li>
                            <li className='card__item__hp'>Speed</li>
                            <li className='card__item__style'>
                                <span className="card__style1" style={{ '--w': `${pokemon?.stats[3].base_stat}%` }}>%</span><span className='style__por'>{pokemon?.stats[5].base_stat}/150</span>
                            </li>

                            {/* {
                               pokemon?.stats.map(statsInfo => (
                                    <li className="card__item__statsli"key={statsInfo.stat.url}>{statsInfo.stat.name}</li>
                                ))
                            } */}
                        </ul>

                    </section>
                    <hr></hr>



                </div >
            </div>
            <div>
                <section className='card__section__second'>

                    <ul className='card__item__movements'>
                        <h2 className='card__item__title'>Movements</h2>
                        {
                            pokemon?.moves.map(movesInfo => (
                                <li className='card__group' key={movesInfo.move.url}>{movesInfo.move.name}</li>

                            ))
                        }
                    </ul>


                </section >
            </div>
        </div>
    )
}

export default PokedexidPage