import React from 'react'

export const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-black'>About</p>
                <h2 className='py-4'>Who I Am</h2>
                <p className='py-2 text-gray-500'>//I am a Passion Driven Web Developer</p>
                <p className='py-2 text-black'>
                 I am a sophomore at Edina High School. My story is unique in a way. I have been experimenting with different programming languages since 7th grade and found my favorite language to program this year: HTML and CSS.
                </p>
                <p className='py-2'>
                 I have spent many hours improving my knowledge of HTML and CSS. It was an easy-to-understand language compared to Java, which required many statements to execute a simple command. I am currently learning different frameworks, such as NextJS, ChakraUI, and ReactJS, as well as various databases, such as PostgreSQL and MongoDB. I understand that being a front-end developer only takes me so far, which is why I am also learning the back-end to become a more valuable asset in the tech industry. 
                </p>
                <p className='py-2 text-gray-600 underline cursor-pointer'>Check out my projects</p>
                
            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <img className='rounded-xl' src="https://media.discordapp.net/attachments/1054199086519165019/1069142096243593226/C33BE7D5-991A-4A5F-BBDF-23315BA53A5F.jpg?width=502&height=662" alt="/" />
            </div>
        </div>
    </div>
  )
}

export default About