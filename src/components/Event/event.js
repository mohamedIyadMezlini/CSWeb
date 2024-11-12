import './event.css'
import left_arrow from '../../assets/icons8-arrow-50.png'
import right_arrow from '../../assets/icons8-arrow-30.png'
import image0 from '../../assets/gallery/IMG_E0582.png'
import image1 from '../../assets/gallery/IMG_E0583.png'
import image2 from '../../assets/gallery/IMG_E0589.png'
import image3 from '../../assets/gallery/IMG_E0603.png'
import image4 from '../../assets/gallery/IMG_E0604.png'
import image5 from '../../assets/gallery/IMG_E06051.png'
import image6 from '../../assets/gallery/IMG_E0606.png'

import imagea from '../../assets/bizerte/IMG_E0607.png'
import imageb from '../../assets/bizerte/IMG_E0610.png'
import imagec from '../../assets/bizerte/IMG_E0618.png'
import imaged from '../../assets/bizerte/IMG_E0625.png'
import imagee from '../../assets/bizerte/IMG_E0629.png'
import imagef from '../../assets/bizerte/IMG_E0627.png'


let n=0;
let choufli=[image0,image1,image2,image3,image4,image5,image6]
function plus(){
  n += 1;
  if (n >= choufli.length) {
    n = 0;
  }
  document.getElementById('pic_choufli').style=`background-image: url(${choufli[n]})`
}

function minus(){
  n-=1;
  if (n < 0) {
    n = choufli.length - 1;
    }
  document.getElementById('pic_choufli').style=`background-image: url(${choufli[n]})`
  
}

let x=0;
let bizerte=[imagea,imageb,imagec,imaged,imagee,imagef]

function plus1(){
  x += 1;
  if (x >= bizerte.length) {
    x = 0;
  }
  document.getElementById('pic_bizerte').style=`background-image: url(${bizerte[x]})`
}

function minus1(){
  x-=1;
  if (x < 0) {
    x = bizerte.length - 1;
    }
  document.getElementById('pic_bizerte').style=`background-image: url(${bizerte[x]})`
}

function Event(){
  return(
    <>
      <div className="event">
        <h1>Events</h1>
        <div className="choufli">
          <div className="scroll">
            <img src={left_arrow} className='icon left' onClick={() => minus()} alt=''/>
            <div id='pic_choufli' style={{  backgroundImage: `url(${image0})`}}></div>
            <img src={right_arrow} className='icon right' onClick={() => plus()} alt=''/>
          </div>
          <div className="text">
            <h2>Choufli Code</h2>
            <p>Organized by the IEEE CS ISSATM SBC.... Dive headfirst into a universe of limitless potential at the Choufli Code Hackathon -with a theme taken from the most famous comedy show EVER- a breathtaking showcase of individual brilliance and collective ingenuity. This exclusive gathering brings together passionate coders who crave the challenge of pushing boundaries and redefining what is possible in the realm of computer science.</p>
          </div>
        </div>
      </div>
      <div className="Bizerte">
        <div className="text">
          <h2>Bizerte Tcodi</h2>
          <p>BIZERTE TCODI is a dynamic and innovative problem-solving hackathon. This event is a collaborative effort organized by three IEEE branches: IEEE ISET Bizerte, IEEE ENIB, and IEEE ISSATM. The hackathon aims to bring together talented individuals from diverse backgrounds to engage in intense, solution-oriented activities designed to tackle real-world problems through technology and creative thinking.</p>
        </div>
        <div className="scroll">
          <img src={left_arrow} className='icon right1' onClick={() => minus1()} alt=''/>
          <div id='pic_bizerte' style={{  backgroundImage: `url(${imagea})`}}></div>
          <img src={right_arrow} className='icon left1' onClick={() => plus1()} alt=''/>
        </div>
      </div>
    </>
  )
}
export default Event