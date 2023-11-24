import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectSelectedYear } from '../features/map/mapSlice';

const YearSelector = () => {
    const dispatch = useDispatch();
    const selectedYear = useSelector(selectSelectedYear)
    
    return (
        <div className='flex gap-2 p-2'>
            <button className='p-2 bg-gray-300 rounded' >Todos</button>
            <div className='w-full flex flex-col'>
                <input type="range" className='w-full' min="2010" max="2023" step="1" />
                <div class="flex w-full justify-between">
                    <span>2010</span>
                    <span id="selectedYear">2010</span>
                    <span>2023</span>
                </div>
            </div>
        </div>
    )
}

export default YearSelector