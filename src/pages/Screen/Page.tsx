
import HomeScreen from './HomeScreen'
import AboutMe from './AboutMe'
import Skills from './Skills'
import Latest from './Latest'
import Footer from './Footer'
import Services from './Services'
import Blogs from './Blogs'


const Page = () => {
  return (
    <div>
      
        
        <HomeScreen/>
        <br/>
        <br/>
       <AboutMe />  
       <br/>
        <br/>
        <Services/>
     
        <br/>
        <br/>

        <Skills/>
        <br/>
        <br/>
        <Latest/>
        <br/>
        <br/>
       <Blogs />
       <br/>
        <br/>
        <br/>
        <Footer/>
       </div>
  
  )
}

export default Page