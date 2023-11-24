import React, { useState } from 'react'
import Map from '../components/Map'
import { useSelector } from 'react-redux';
import { selectSelectedCity } from '../features/map/mapSlice';
import DadosDengue from './DadosDengue';
import MapCityInfo from '../components/MapCityInfo';

const Dados = () => {
    const [selectedDisease, setSelectedDisease] = useState(0);

    return (
        <div className='flex flex-col'>
            <div className='flex'>
                <Map />
                <MapCityInfo />
            </div>
            <div className='flex w-full flex-col p-1'>
                <div className='flex w-full gap-1 justify-around'>
                    <button onClick={() => setSelectedDisease(0)} className={`p-2 rounded-t w-full text-center bg-gray-${!selectedDisease ? '300' : '200'}`}>Dengue</button>
                    <button onClick={() => setSelectedDisease(1)} className={`p-2 rounded-t w-full text-center bg-gray-${selectedDisease ? '300' : '200'}`}>Chikungunya</button>
                </div>
                <div className='flex w-full bg-gray-300 p-3'>
                    {!selectedDisease ?
                        <DadosDengue />
                        : <p>
                            Chikungunya

                        </p>}
                </div>
            </div>
        </div>
    )
}

export default Dados