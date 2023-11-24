import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectSelectedCity } from '../features/map/mapSlice'
import { notifications } from '../data/notifications'

const anos = [2010,
    2011,
    2012,
    2013,
    2014,
    2015,
    2016,
    2017,
    2018,
    2019,
    2020,
    2021,
    2022,
    2023]

const DadosDengue = () => {
    const selectedCity = useSelector(selectSelectedCity)
    const selecionados = selectedCity ?? 'Todos'
    const [mostrarObitos, setMostrarObitos] = useState(false);
    const btnObitosClass = `text-xs  p-2 rounded box-shadow-xl ${mostrarObitos ? 'bg-red-400' : 'bg-red-200'}`

    const data = selecionados === 'Todos' ? notifications : notifications.filter(n => n.city === selecionados);

    const table = <table className='p-1'>
        <thead>
            <tr>
                <th>
                    <button onClick={() => setMostrarObitos(!mostrarObitos)} className={btnObitosClass}>
                        {mostrarObitos ? 'Ocultar' : 'Mostrar óbitos'}
                    </button>
                </th>
                {anos.map(a => <th className='border-l p-1'>{a}</th>)}
            </tr>
        </thead>
        <tbody>
            {data.map(city => <tr className='border-t'>
                <th>{city.city}</th>
                {city.data.map(d => <td className='justify-between border-l p-1'>{mostrarObitos ? d.deaths : d.notifications}</td>)}
            </tr>)}
        </tbody>
    </table>

    return (
        <div className='flex flex-col gap-2 w-full bg-gray-100 p-3 rounded box-shadow-xl'>
            {table}
        </div>
    )
}

export default DadosDengue