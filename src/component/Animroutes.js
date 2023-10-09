import React from 'react'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Portfolio from '../pages/Portfolio'
import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
const Animroutes = () => {
    const location = useLocation();
    return (

        <AnimatePresence initial={true} mode='wait'>

            <Routes key={location.pathname} Location={location}>
                <Route path='/' Component={Home} />
                <Route path='/about' Component={About} />
                <Route path='/contact' Component={Contact} />
                <Route path='/Portfolio' Component={Portfolio} />
            </Routes>
        </AnimatePresence>

    )
}

export default Animroutes
