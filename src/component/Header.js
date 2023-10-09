import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../img/logo1.jpg'


const Header = () => {
    return (
        <header className='fixed w-full px-[14px] lg:px-[100px] z-30 h-[50px] lg:h-[130px] flex items-center'>
            <Link>
                <img className='w-[35px] rounded-3xl' src={logo} alt='logo' />
            </Link>
            <div className='flex lg:flex-row lg:items-center w-full justify-end text-sm'>

                <nav className='flex justify-end items-center px-2 gap-x-5'>
                    <Link to={'/'} className='text-[#696c9d] hover:text-primary transition'>
                        Home
                    </Link>

                    <Link to={'/about'} className='text-[#696c9d] hover:text-primary transition'>
                        About
                    </Link>

                    <Link to={'/contact'} className='text-[#696c9d] hover:text-primary transition'>
                        Contact
                    </Link>

                    <Link to={'/portfolio'} className='text-[#696c9d] hover:text-primary transition'>
                        Portfolio
                    </Link>
                </nav>
                
            </div>
           
        </header>
    )
}

export default Header
