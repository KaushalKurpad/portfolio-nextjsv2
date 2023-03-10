import Image from 'next/image';
import Link from 'next/link';
import {useEffect, useState } from 'react';
import {AiOutlineClose, AiOutlineMenu, AiOutlineMail} from 'react-icons/ai';
import {FaGithub, FaLinkedin} from 'react-icons/fa';
import {BsFillPersonLinesFill} from 'react-icons/bs';


export const Navbar = () => {
    const [nav,setNav] = useState(false)
    const [shadow, setShadow] = useState(false)
    const [navBg] = useState('#ecf0f3')
    const [linkColor] = useState('#ecf0f3')
    
    
    const handleNav = () => {
        setNav(!nav)
    }

    useEffect(() => {
        const handleShadow = () => {
          if (window.scrollY >= 90) {
            setShadow(true);
          } else {
            setShadow(false);
          }
        };
        window.addEventListener('scroll', handleShadow);
      }, []);
    

     return (
        <div style={{backgroundColor: `${navBg}`}} className={shadow ? 'fixed w-full h-20 shadow-xl z-[100]' : 'fixed w-full h-20 z-[100]'}>
            <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
            <Image src="/assets/moony.png" alt="/" width={125} height={50} />
            <div>
                <ul style={{backgroundColor: `${linkColor}`}} className='hidden md:flex'>
                    <a href='/#home'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
                    </a>
                    <a href='/#about'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>About</li>
                    </a>
                    <a href='/#skills'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>Skills</li>
                    </a>
                    <a href='/#projects'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>Projects</li>
                    </a>
                    <a href='/#contactform'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>Contact</li>
                    </a>
                </ul>
                <div onClick={handleNav} className='md:hidden'>
                    <AiOutlineMenu size={25}/>
                </div>
            </div>
            </div>

            <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
            <div className={nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[30%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500' : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
            <div>
                <div className='flex w-full items-center justify-between'>
                <Image src='/assets/moony.png' width='87' height='35' alt='/' />
                 <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                    <AiOutlineClose />
                 </div>
                </div>
                <div className='border-b border-gray-300 my-4'>
                    <p className='w-[85%] md:w-[90%] py-4'>Lets achieve greatness together</p>
                </div>
            </div>
            <div className='py-4 flex flex-col'>
                <ul className='uppercase'>
                    <a href='/#home'>
                    <li onClick={() => setNav(false)} className='py-4 text-sm'>Home</li>
                    </a>
                    <a href='/#about'>
                    <li onClick={() => setNav(false)} className='py-4 text-sm'>About</li>
                    </a>
                    <a href='/#skills'>
                    <li onClick={() => setNav(false)} className='py-4 text-sm'>Skills</li>
                    </a>
                    <a href='/#projects'>
                    <li onClick={() => setNav(false)} className='py-4 text-sm'>Projects</li>
                    </a>
                    <a href='/#contactform'>
                    <li onClick={() => setNav(false)} className='py-4 text-sm'>Contact</li>
                    </a>
                </ul>
                <div className='pt-10'>
                    <p className='uppercase tracking-widest text-[#5651e5]'>Let's connect</p>
                </div>
                <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                    <Link href='https://www.linkedin.com/in/kaushal-kurpad-945330260'>
                    <div className='rounded-full shadow-lg shadow-black p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                     <FaLinkedin />
                    </div>
                    </Link>
                    <Link href='https://github.com/KaushalKurpad'>
                    <div className='rounded-full shadow-lg shadow-black p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                     <FaGithub />
                    </div>
                    </Link>
                    <Link href='mailto:Kaushal@techoptimum.org'>
                    <div className='rounded-full shadow-lg shadow-black p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                     <AiOutlineMail />
                    </div>
                    </Link>
                    <a href='/RESUME.pdf' download>
                    <div className='rounded-full shadow-lg shadow-black p-3 cursor-pointer hover:1scale-105 ease-in duration-300'>
                     <BsFillPersonLinesFill />
                    </div>
                    </a>
                    
                    
                </div>
            </div>
            </div>    
            </div>
        </div>
     )
}

export default Navbar
