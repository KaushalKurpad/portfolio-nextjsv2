import Head from 'next/head'
import Image from 'next/image';
import Navbar from '../components/Navbar'
import { Main } from '@/components/Main'
import About from '../components/About'
import Skills from '@/components/Skills'
import Projects from '../components/Projects'
import ContactForm from '@/components/ContactForm';


export default function Home() {
  return (
    <div>
      <Head>
        <title>Kaushal&apos;s Portfolio</title>
        <meta name="description" content="My Portfolio, please come take a peek" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/corsair.ico" />
      </Head>

      <Navbar />
      <Main />
      <About />
      <Skills />
      <Projects />
      <ContactForm />
      
      
      
      
      
    </div>
  )
}
