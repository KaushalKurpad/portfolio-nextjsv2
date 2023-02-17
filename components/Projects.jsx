import React from 'react'
import Image from 'next/image'
import dietcalc from '../public/assets/projects/dietcalc.png'
import Link from 'next/link';
import ProjectItem from './ProjectItem';
import hyphonz from '../public/assets/projects/hyphonz.png'
import ProjectItem1 from './ProjectItem1'

export const Projects = () => {
  return (
    <div id='projects' className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
    <p className='text-xl  tracking-widest uppercase text-black'>Projects</p>
    <h2 className='py-4'>What I've Worked On</h2>
    <div className='grid md:grid-cols-2 gap-8'>
    <ProjectItem title='Diet Calculator' backgroundImg={dietcalc} projectUrl='/dietcalc' />
    <ProjectItem1 title='Discord Leveling Bot' backgroundImg={hyphonz} projectUrl='/discordbot' />
    
    </div>
    </div>
    </div>
  )
}

export default Projects