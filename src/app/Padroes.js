import React, { useState } from 'react'
import PadraoDengue from './PadraoDengue';

const Padroes = () => {
    const [selectedDisease, setSelectedDisease] = useState(0);

    return (
        <div>
            <div className='flex w-full gap-1 justify-around'>
                <button onClick={() => setSelectedDisease(0)} className='p-2 rounded-t w-full text-center bg-white'>Dengue</button>
                <button onClick={() => setSelectedDisease(1)} className='p-2 rounded-t w-full text-center bg-white'>Chikungunya</button>
            </div>
            {!selectedDisease ?
                <PadraoDengue />
                : <p>
                    Chikungunya

                </p>}
        </div>
    )
}

export default Padroes