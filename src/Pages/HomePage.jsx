import { useRef } from "react"
import { setTrainerSlice } from "../store/slices/trainer.slice"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"


const HomePage = () => {

  const inputTrainer = useRef()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleTrainer = e => {
    e.preventDefault()
    dispatch(setTrainerSlice(inputTrainer.current.value.trim()))
    navigate('/pokedex')


  }


  return (
    <div className="poke">

      <div className="poke__image">
        <img className="poke__item__image" src="/pokedex.svg" alt=""></img>

      </div>


      <div><h2 className="poke__title">¡Hi trainer!</h2>
        <p className="poke__subtitle">To start, please, enter your trainer name</p>
        <form className="poke__on" onSubmit={handleTrainer}>
          <input className="poke__name" placeholder="Your name..." ref={inputTrainer} type="text" />
          <button className="poke__btn">Start</button>

        </form>
      </div>
      <img className="poke__footer" src="/public/homeFooter.svg" alt=""></img>
    </div>
  )
}

export default HomePage