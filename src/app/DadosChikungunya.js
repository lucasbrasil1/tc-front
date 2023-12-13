import React from 'react'
import { chikungunya } from '../data/notifications'
import { useSelector } from 'react-redux'
import { selectSelectedCity } from '../features/map/mapSlice'

const anos = [
    2015,
    2016,
    2017,
    2018,
    2019,
    2020,
    2021,
    2022,
    2023]

    

const DadosChikungunya = () => {
    const selectedCity = useSelector(selectSelectedCity)
    const selecionados = selectedCity ?? 'Todos'

    const data = selecionados === 'Todos' ? chikungunya : chikungunya.filter(n => n.city === selecionados);

    const table = <table className='p-1'>
        <thead>
            <tr>
                <th>
                    
                </th>
                {anos.map(a => <th className='border-l p-1'>{a}</th>)}
            </tr>
        </thead>
        <tbody>
            {data.map(city => <tr className='border-t'>
                <th>{city.city}</th>
                {city.data.map(d => <td className='justify-between border-l p-1'>{d.notifications}</td>)}
            </tr>)}
        </tbody>
    </table>

    return (
        <div className='flex flex-col gap-2 w-full bg-gray-100 p-3 rounded box-shadow-xl'>
            {table}
        </div>
    )
}

export default DadosChikungunya