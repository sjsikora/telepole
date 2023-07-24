import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

export const  App= () => {
  return (
    <div>
      <Head>
        <title>Telepole</title>
        <meta name='description' content='Telepole' />
      </Head>
      <div className='bg-lightblue w-full h-[100vh]'>
        hello world
        <Link className="text-spgreen underline" href="./auth/signup">Sign up</Link>
      </div>

      
    </div>

  )
}
export default App
