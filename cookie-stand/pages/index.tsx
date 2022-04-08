import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Form from '../components/Form'
import Header from '../components/Header'
import Main from '../components/Main'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>
      <header className="flex items-center justify-between p-4 bg-blue-500 text-black-50">
        <h1 className='text-4xl'>Cookie Stand Admin</h1>
      </header>
      <main>
        <Form />
        <h1>
        Report Table Coming Soon...
        </h1>
        <h1>{"{'location':'Barcelona','minCustomer':2,'maxCustomers':4,'avgCookies':2.5}"}</h1>
      </main>

      <Footer />
    </div>
  )
}

export default Home
