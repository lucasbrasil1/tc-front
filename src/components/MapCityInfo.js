import React from 'react'
import { selectSelectedCity, unsetCity } from '../features/map/mapSlice';
import { useDispatch, useSelector } from 'react-redux';
import { ibge } from '../data/ibge';

const MapCityInfo = () => {
    const dispatch = useDispatch();
    const selectedCity = useSelector(selectSelectedCity);

    return (
        <div className="flex flex-col rounded-r-md gap-2">
            <p className='font-semibold text-lg p-2'>Cidade selecionada: {!selectedCity && 'Nenhuma'}</p>
            {selectedCity &&
                <div className='flex flex-col'>
                    <div className='p-2 flex items-center'>
                        <div className='text-2xl'>
                            {selectedCity}
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" onClick={() => dispatch(unsetCity())} fill="white" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 m-1 hover:text-red-500 cursor-pointer">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <div className='p-2'>
                        {ibge.filter(c => c.nome === selectedCity).map(city => <table className='text-left '>
                            <tr>
                                <th className='p-2 text-lg'>Area</th>
                                <td className='p-2 text-lg'>{city.area}</td>
                            </tr>
                            <tr>
                                <th className='p-2 text-lg'>População</th>
                                <td className='p-2 text-lg'>{city.populacao}</td>
                            </tr>
                            <tr>
                                <th className='p-2 text-lg'>Densidade</th>
                                <td className='p-2 text-lg'>{city.densidade}</td>
                            </tr>
                            <tr>
                                <th className='p-2 text-lg'>Escolarização</th>
                                <td className='p-2 text-lg'>{city.escolarizacao}</td>
                            </tr>
                            <tr>
                                <th className='p-2 text-lg'>PIB</th>
                                <td className='p-2 text-lg'>{city.pib}</td>
                            </tr>
                        </table>)}
                    </div>
                </div>
            }
        </div>
    )
}

export default MapCityInfo