import React from 'react'
import desktop from '../img/desktop.avif';
import girl from '../img/girl.jpeg'
import girl2 from '../img/girl2.jpeg'
import girl3 from '../img/girl3.jpg'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { transition1 } from '../tranistion';
const Portfolio = () => {
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
                        <div className='grid gap-1 items-center mt-10 ml-10'>
                            <div className='flex'>

                                <motion.img
                                    whileHover={{ scale: 1.1 }}
                                    transition={transition1}
                                    className='w-[100px] rounded-3xl'
                                    src={desktop}
                                    alt='desktopimage'
                                />
                                <motion.img
                                    whileHover={{ scale: 1.1 }}
                                    transition={transition1}
                                    className='w-[100px] rounded-3xl'
                                    src={girl}
                                    alt='desktopimage'
                                />
                            </div>

                            <div className='flex'>
                                <motion.img
                                    whileHover={{ scale: 1.1 }}
                                    transition={transition1}
                                    className='w-[100px] rounded-3xl'
                                    src={girl2}
                                    alt='desktopimage'
                                />
                                <motion.img
                                    whileHover={{ scale: 1.1 }}
                                    transition={transition1}
                                    className='w-[100px] rounded-3xl'
                                    src={girl3}
                                    alt='desktopimage'
                                />
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: '-80%' }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: '-80%' }}
                        transition={{ type: 'spring', stiffness: 100, damping: 10 }}
                        className='w-full pt-36 flex flex-col items-center ml-[100px]'
                    >
                        <h1 className='h1'>Portfolio Section</h1>
                        <Link to={'/contact'} className='ml-3 w-[70px] text-center bg-black rounded-2xl text-white text-sm hover:bg-white hover:text-black'>About</Link>
                    </motion.div>


                </div>
            </div>
        </motion.section>
    )
}

export default Portfolio
