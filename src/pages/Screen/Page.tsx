import React from 'react'
import HomeScreen from './HomeScreen'
import AboutMe from './AboutMe'
import Skills from './Skills'
import Latest from './Latest'
import Footer from './Footer'
import Services from './Services'
import Blogs from './Blogs'
import Testimonials from './Testimonials'
import Header from '../../Components/common/Header'

const Page = () => {
  return (
    <div>
        <Header/>
        <HomeScreen/>
       <AboutMe />  
        <Services/>
        <Skills/>
        <Latest/>
        <Blogs/>
        <Footer/>
    </div>
  )
}

export default Page