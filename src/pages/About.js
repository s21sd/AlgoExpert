import React from 'react'
import desktop from '../img/desktop.avif';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { transition1 } from '../tranistion';
const About = () => {
  return (

    <motion.section
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '100%' }}
      transition={transition1}
      className='section '
    >
      <div className='container mx-auto h-full relative'>
        <div className='flex flex-row justify-between'>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ type: 'spring', stiffness: 100, damping: 10 }}
            className='pt-10'
          >
            <motion.img
              whileHover={{ scale: 1.1 }}
              transition={transition1}
              className='w-[400px] rounded-3xl mt-10 p-3'
              src={desktop}
              alt='desktopimage'
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: '-50%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-50%' }}
            transition={{ type: 'spring', stiffness: 100, damping: 10 }}
            className='w-full pt-36 flex flex-col items-center '
          >
            <h1 className='h1'>About Section</h1>
            <Link to={'/contact'} className='ml-3 w-[70px] text-center bg-black rounded-2xl text-white text-sm hover:bg-white hover:text-black'>About</Link>
          </motion.div>


        </div>
      </div>
    </motion.section>
  )
}

export default About
