import React from 'react'
import { motion } from 'framer-motion';
import { transition1 } from '../tranistion';
const Contact = () => {
    return (

        <motion.section className='flex'>
            <form className='grid justify-between mt-10'>
                <h1>Contact Me</h1>
                <br />
                <input type='text' placeholder='Enter name' />
                <br />
                <input type='email' placeholder='Enter email' />
                <br />
                <input type='message' placeholder='Enter message' />
                <br />
            </form>
        </motion.section>
    )
}

export default Contact
