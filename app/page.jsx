
import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Head from 'next/head'

export const  App= () => {
  return (
    <div>
      <Head>
        <title>Telepole</title>
      </Head>
      <div className='bg-lightblue w-full h-[100vh]'>
        <Navbar />
        <Hero />
      </div>
    </div>

  )
}
export default App
