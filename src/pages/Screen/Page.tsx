import React from 'react'
import HomeScreen from './HomeScreen'
import AboutMe from './AboutMe'
import Skills from './Skills'
import Latest from './Latest'
import Footer from './Footer'

const Page = () => {
  return (
    <div>
        <HomeScreen/>
        <AboutMe/>
        <Skills/>
        <Latest/>
        <Footer/>
    </div>
  )
}

export default Page