import Spline from '@splinetool/react-spline'
import { useRef, useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom'
import axios from 'axios'

import BlogList from './components/Home/BlogList/index'
import Home from './pages/Home/index'
import Homes from './Homes'
import Navbar from './Navbar'
import About from './About'
import Fruits from './Fruits'
import SeperateBlog from './components/Home/BlogList/BlogItem/SeperateBlog'

export default function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homes />} />

          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Fruits />} />
          <Route path="/blog/:slug" element={<Home />} />
          {/* New route for blog post with both slug and ID */}
          <Route path="/blog/:slug/:id" element={<SeperateBlog />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  )
}
