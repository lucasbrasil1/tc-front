import React, { useState } from 'react'

const imgs = [
  [
    [
      "orange/allcitiesnojitter.png",
      "orange/allcitieshalfjitter.png",
      "orange/allcitiesfulljitter.png"
    ],
    [
      "orange/allcitiesnojittercolorYear.png",
      "orange/allcitieshalfjittercolorYear.png",
      "orange/allcitiesfulljittercolorYear.png"
    ],
    [
      "orange/allcitiesnojittercolorDeaths.png",
      "orange/allcitieshalfjittercolorDeaths.png",
      "orange/allcitiesfulljittercolorDeaths.png"
    ],
  ],
  [
    [
      "orange/dengue/forestgray0.png",
      "orange/dengue/forestgray50.png",
      "orange/dengue/forestgray100.png",
    ],
    [
      "orange/dengue/forestyear0.png",
      "orange/dengue/forestyear50.png",
      "orange/dengue/forestyear100.png",
    ],
    [
      "orange/dengue/forestdeaths0.png",
      "orange/dengue/forestdeaths50.png",
      "orange/dengue/forestdeaths100.png",
    ]
  ]
]

const PadraoDengue = () => {
  const [jitter, setJitter] = useState(0);
  const [color, setColor] = useState(0);
  const [algoritm, setAlgoritm] = useState(0);

  return (
    <div className='flex flex-col justify-center gap-2 p-1'>

      <p>Identificação de padrões sobre notificações de <b>dengue</b>  nos municípios:</p>

      <div className='flex gap-2'>
        <p>Algoritmo: <button className='bg-gray-300 p-2 rounded hover:bg-gray-400 shadow-md' onClick={() => setAlgoritm(!algoritm ? 1 : 0)}>{!algoritm ? "kNN" : "Random Forest"}</button></p>
      </div>
      <div className='flex gap-2'>
        <p>Variação: {jitter}</p>
        <div className='flex'>
          {!!jitter && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" onClick={() => setJitter(jitter - 1)} className="w-6 h-6 cursor-pointer">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>}
          {jitter < 2 && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" onClick={() => setJitter(jitter + 1)} className="w-6 h-6 cursor-pointer">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>}
        </div>
      </div>
      <div className='flex gap-3 items-center'>
        <p>Cor: </p>
        <button className={` p-2 rounded ${color == 0 ? 'bg-gray-400' : 'bg-gray-300'}`} onClick={() => setColor(0)}>Sem cor</button>
        <button className={` p-2 rounded ${color == 1 ? 'bg-gray-400' : 'bg-gray-300'}`} onClick={() => setColor(1)}>Cor por ano</button>
        <button className={` p-2 rounded ${color == 2 ? 'bg-gray-400' : 'bg-gray-300'}`} onClick={() => setColor(2)}>Mortes</button>
      </div>

      <img className='max-w-6xl' src={imgs[algoritm][color][jitter]} />

    </div >
  )
}

export default PadraoDengue