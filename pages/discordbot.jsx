import Image from 'next/image';
import React from 'react';
import hyphonz from '../public/assets/projects/hyphonz.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';
import Head from 'next/head';

const discordbot = () => {
  return (
    

    <div className='w-full'>
      <Head>
        <title>Discord Bot</title>
        <link rel="icon" href="/discord.ico" />
      </Head>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={hyphonz}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Hyphonz</h2>
          <h3>Discord.JS / JavaScript / MySQL</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            This is Hyphonz, My first team project. Hyphonz is fairly a begineer friendly challenge, Me and the team had plans to make Hyphonz a successfull discord bot but due to time and school, we decided to stop it. But lets talk about Hyphonz, Hyphonz is a discord leveling bot that has slash commands and has advanced leveling features such as giving a role if you reach levels (which you may assign using slash commands) and you may also Adjust the XP and we even added a little card when someone runs /rank, it shows their pfp, their discord status and a XP Bar we also used MySQL to save the ranks and XP.
          </p>
          <a
            href='https://github.com/ProHyphonzDaCoder/discord-leveling-bot'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8 bg-black'>Code</button>
          </a>
         
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Languages used</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> JavaScript
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> DiscordJS
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> MySQL
              </p>
              
              
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  );
};

export default discordbot;