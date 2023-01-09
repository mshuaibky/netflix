import React,{useState} from 'react';
import './Navbar.css';


function Navbar() {
  const [color,setColor]=useState(false)
const updateColor=()=>{
  if(window.scrollY>=100){
    setColor(true)
  }else{
    setColor(false)
  }
}

  window.addEventListener('scroll',updateColor)

  return (
    
    <div className={color?'newNav':'navbar'}>
      <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="logo" />
    <img className='avatar' src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="avtar" />
    
    </div>
  )
}

export default Navbar
