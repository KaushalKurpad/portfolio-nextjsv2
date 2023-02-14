import Head from 'next/head'
import Image from 'next/image';
import { Inter } from '@next/font/google'
import Navbar from '../components/Navbar'
import { Main } from '@/components/Main'
import About from '../components/About'
import Skills from '@/components/Skills'
import Projects from '../components/Projects'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
        <title>Kaushal's Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/corsair.ico" />
      </Head>

      <Navbar />
      <Main />
      <About />
      <Skills />
      <Projects />
      
      
      
    </div>
  )
}
