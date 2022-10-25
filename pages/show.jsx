import React from 'react'
import Layout from '../components/layout/Layout'

export default function show() {
  return (
    <Layout>
        <div className='flex items-center justify-center gap-20'>
            <div className=''>
                <p className='text-2xl font-bold uppercase'>titre :</p>
                <p className='text-xl font-medium uppercase'>description :</p>
                <p><span className='font-semibold'>Rôle :</span> Développeur front React</p>
                <p><span className='font-semibold'>Stack :</span>React/Tailwindcss/fontawesome/git</p>
                <a href="#" className='border-2 border-gray-500'>Voir le projet</a>
            </div>
            <div className='shadow-2xl px-20 w-[50%]'>
                <img src="img/react-code-du-travail-screen.png" alt="" />
            </div>
        </div>
    </Layout>
  )
}
