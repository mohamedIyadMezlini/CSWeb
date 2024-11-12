import NavBar from './components/NavBar/NavBar.js'
import './App.css'
import Home from './components/Home/Home.js'
import About from './components/About/about.js'
import Up from './assets/icons8-arrow-20.png'
import Stastic from './components/Stastic/stastic.js'
import Event from './components/Event/event.js'
import Contact from './components/Contact/contact.js'
import Footer from './components/footer/footer.js'


const App = ()=>{
  return (
    <>
      <NavBar/>
      <Home/>
      <img src={Up} className='up' onClick={ ()=> document.getElementById('home').scrollIntoView()} alt=''/>
      <About/>
      <Stastic/>
      <Event/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App