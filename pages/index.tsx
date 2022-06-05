import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Lmao from '../components/Lmao'
import Header from '../components/Header'



const Home: NextPage = () => {
  return (
    <div className="relative h-screen bg-gradient-to-b from-blue-800/10 to -[#010551] lg:h-[140vh]">
      <Head>
        <title>Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        
        <Header/>
      </Head>
     
      <Lmao/>
      
      

    
    </div>
    
  )
}

export default Home
