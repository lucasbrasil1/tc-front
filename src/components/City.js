import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectSelectedCity, setCity } from '../features/map/mapSlice';

const City = ({id, name, d}) => {
    const dispatch = useDispatch();
	const selectedCity = useSelector(selectSelectedCity)

	const handleHover = (e) => {
	}

	const handleLeave = () =>{
	}

	const handleClick = (e) => {
		const name = e.target.getAttribute("name");
        dispatch(setCity(name));
	}

	const cityClass = `${selectedCity === name ? 'fill-blue-500' : 'fill-blue-50  hover:fill-blue-400'} cursor-pointer`

  return (
    <path id={id} name={name} d={d} onMouseOver={handleHover} onMouseLeave={handleLeave} onClick={handleClick} class={cityClass} />
  )
}

export default City