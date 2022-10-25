import React from 'react'
import CardRealisation from './cards/CardRealisation'

export default function SectionShow() {
    const datas = [
        {
          img: 'img/react-code-du-travail-screen.png',
          description: 'Code du travail avec ',
          description2: 'React',
          id : 1,
        },
        {
          img: 'img/To-do-list-screen.png',
          description: 'To-do-list en ',
          description2: 'html-css-js',
          id : 2,
        },
        {
          img: 'img/Blog-Mito-screen.png',
          description: 'Un blog avec ',
          description2: 'laravel',
          id : 3,
        },
        {
          img: 'img/volvo-screen.png',
          description: 'Le site volvo avec ',
          description2: 'WordPress',
          id : 4,
        },
      ]
  return (
    <div className='mt-36'>
        <h1 className='uppercase font-bold text-3xl text-center mt-24'>Screen de mes projets</h1>
        <div className='grid grid-cols-2 space-x-5'>
            {
                datas.map((data) => (
                <CardRealisation key={data.id} img={data.img} description={data.description} description2={data.description2}/>
            ))}
        </div>
    </div>
  )
}
