import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Cookie Stand Admin</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <header className="flex items-center justify-between p-4 bg-gray-500 text-black-50">
        <h1 className='text-4xl'>Eight Ball</h1>
        <p>1 question answered</p>
      </header>
      <main className="">
      </main>

      <footer className="">
 
      </footer>
    </div>
  )
}

export default Home
