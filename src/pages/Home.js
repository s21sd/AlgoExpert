import React from 'react';
import desktop from '../img/desktop.avif';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { transition1 } from '../tranistion';

const Home = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={transition1}
            className='section '
        >
            <div className='container mx-auto h-full relative'>
                <div className='flex flex-row justify-between'>
                    <motion.div
                        initial={{ opacity: 0, y: '-50%' }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: '-50%' }}
                        transition={{ type: 'spring', stiffness: 100, damping: 10 }}
                        className='w-full pt-36 flex flex-col mr-4'
                    >
                        <h1 className='h1 ml-3'>photographer<br />Film maker</h1>
                        <Link to={'/contact'} className=' ml-3 w-[70px] pl-1.5 bg-black rounded-2xl text-white text-sm hover:bg-white hover:text-black'>Let's Start</Link>
                    </motion.div>

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
                </div>
            </div>
        </motion.section>
    );
};

export default Home;
