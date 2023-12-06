import React from 'react'
import HomeScreen from './HomeScreen'
import AboutMe from './AboutMe'
import Skills from './Skills'
import Latest from './Latest'
import Footer from './Footer'
import Services from './Services'

const Page = () => {
  return (
    <div>
        <HomeScreen/>
        <AboutMe/>
        <Services/>
        <Skills/>
        <Latest/>
        <Footer/>
    </div>
  )
}

export default Page