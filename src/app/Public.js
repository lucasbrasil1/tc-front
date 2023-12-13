import React from 'react'
import TextTitle from '../components/TextTitle'

const Public = () => {
  return (
    <div className='flex flex-col gap-5 p-4'>
      <h1 className='text-3xl italic font-bold text-blue-600'>Arboviroses</h1>
      <p>As arboviroses são doenças transmitidas por artrópodes, sendo o mosquito <b>Aedes aegypti</b> um dos principais vilões. No Brasil, a dengue e a chikungunya são exemplos dessas infecções, exigindo uma atenção constante para prevenir sua propagação.</p>
      <hr />

      <TextTitle>

        Mosquito Aedes Aegypti
      </TextTitle>
      <div className='flex gap-2 p-2'>
        <img className='w-60' src='mosquito-clipart-aedes-7.png' />
        <p>
          O Aedes aegypti é o vetor responsável pela disseminação dessas doenças. Pequeno e escuro, ele se reproduz em água parada, encontrando condições ideais em recipientes como vasos de plantas, pneus, e garrafas. Eliminar esses criadouros é fundamental para interromper o ciclo de vida do mosquito.
        </p>
      </div>
      <hr />
      <TextTitle>Dengue</TextTitle>
      <div className='flex gap-2 p-2'>
        <p>
          A dengue é uma doença febril grave causada por um vírus transmitido pelo Aedes aegypti. Os sintomas incluem febre alta, dores de cabeça, dores musculares e, em casos mais graves, podem ocorrer complicações como hemorragias. A prevenção se concentra na eliminação de focos de reprodução do mosquito e no uso de repelentes e telas.
        </p>
        <img className='w-72' src='sintomasDengue.jpg' />
      </div>
      <hr />
      <TextTitle>Chikungunya</TextTitle>
      <p>
        A chikungunya também é transmitida pelo mesmo mosquito e apresenta sintomas semelhantes, como febre e dores articulares intensas. Embora raramente fatal, a doença pode causar sofrimento significativo. Medidas preventivas, como o uso de repelentes e o controle do mosquito, são cruciais para evitar a propagação da chikungunya.
      </p>
      <hr />
      <TextTitle>Prevenção</TextTitle>
      <p>É a chave para combater as arboviroses. A conscientização sobre o Aedes aegypti e a implementação de práticas simples, como eliminar criadouros e utilizar repelentes, são essenciais para proteger a saúde da comunidade. Juntos, podemos criar um ambiente mais seguro e saudável, reduzindo o impacto dessas doenças em nossas vidas.</p>
      {/* <hr/>
      <h1 className='text-3xl italic font-bold text-blue-600 mt-5'>Funcionalidades do Sistema</h1>
      <p>O sistema apresenta três páginas principais: Inicial, Dados e Padrões. É possível selecionar a página através do menu de navegação fixado no topo do site.</p> */}
    </div>
  )
}

export default Public