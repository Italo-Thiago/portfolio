import React from 'react';

import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';

import { Home }  from '../../pages/home'
import { About } from '../../pages/about'
import { Projects } from '../../pages/projects'
import { Blog } from '../../pages/blog'
import { Contact } from '../../pages/contact'

const MainRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='/blog' element={<Blog />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </Router>
    )
}

export { MainRoutes }