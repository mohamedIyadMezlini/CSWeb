import logo from '../../assets/cslogo.png'
import './NavBar.css'

function navBar(){
  return(
    <nav className='navBar'>
      <img className='logo' src={logo} alt=""/>
      <div className='services'>
        <button onClick={ ()=> document.getElementById('home').scrollIntoView()} className="serve">Home</button>
        <button onClick={ ()=> document.getElementById('about').scrollIntoView()}  className="serve">About</button>
        <button onClick={ ()=> document.querySelector('.event').scrollIntoView()} className="serve">Events</button>
        <button onClick={ ()=> document.getElementById('contact').scrollIntoView()} className="serve">Contact</button>
      </div>
    </nav>
  )
}
export default navBar