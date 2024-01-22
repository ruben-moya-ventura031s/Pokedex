import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"


const SelectType = ({ setTypeSelected }) => {
  const url = "https://pokeapi.co/api/v2/type"

  const [types, getTypes] = useFetch(url)

  useEffect(() => {
    getTypes()
  }, [])

  const handleChange = e => {
    setTypeSelected(e.target.value)
  }
  console.log(types)

  return (
    <div className="item__allPokemons">
      <select className=" principal__secun" onChange={handleChange}>
        <option value="allPokemons">All pokemons</option>
        {
          types?.results.map(typeInfo => (
            <option key={typeInfo.url} value={typeInfo.url}>{typeInfo.name}</option>))
        }
      </select>
     
    </div>
  )
}

export default SelectType