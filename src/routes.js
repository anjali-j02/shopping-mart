import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from 'pages/Home/home'
import AboutUs from 'pages/AboutUs/about-us'
import PageNotFound from 'pages/PageNotFound/page-not-found'

const browerRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<AboutUs />} />
            <Route path='*' element={<PageNotFound />} />
        </Routes>
    )
}

export default browerRoutes
