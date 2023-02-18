import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import {AiOutlineMail} from 'react-icons/ai';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import Link from 'next/link';

export const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <p className='uppercase text-sm tracking-widest text-gray-600'>LET'S BUILD SOMETHING TOGETHER</p>
                 <h1 className='py-4 text-gray-700'>
                 Hi, Im <span className='text-[#1e90ff]'>Kaushal</span>
                 </h1>
                 <h1 className='py-2 text-gray-700'>
                    A Front-End Web Developer
                 </h1>
                 <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
                 As a Front End specialist with a passion for learning, I have honed my skills in creating visually appealing and user-friendly interfaces. My previous project, DietCalc, showcases my ability to develop functional web applications. In DietCalc, I utilized my skills to create a platform where users can calculate their diet plan based on their age, weight, height, and gender.
                 </p>
                 
                 <div className='flex items-center justify-between max-w-[300px] m-auto py-4'>
                  <Link href='https://www.linkedin.com/in/kaushal-kurpad-945330260/'>
                    <div className='rounded-full shadow-lg shadow-black p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <FaLinkedin />
                    </div>
                    </Link>
                    <Link href='https://github.com/KaushalKurpad'>
                    <div className='rounded-full shadow-lg shadow-black p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <FaGithub />
                    </div>
                    </Link>
                    <Link href='mailto:Kaushal@techoptimum.org'>
                    <div className='rounded-full shadow-lg shadow-black p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <AiOutlineMail />
                    </div>
                    </Link>
                    <Link href='https://docs.google.com/document/d/1VIUCqroRK_PIC2egFvWmWjphK9W6ts0D6fC19NhBKwI/edit?usp=sharing'>
                    <div className='rounded-full shadow-lg shadow-black p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <BsFillPersonLinesFill />
                    </div>
                    </Link>
                 </div>
            </div>
            
        </div>
    </div>
    
  )
}

export default Main