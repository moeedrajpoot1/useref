import "./navbar.css"
import React ,{useRef} from 'react'

const Navbar = () => {
    const menuRef=useRef()
    const openMenu=()=>{
        menuRef.current.style.right="0"
    }
    const closeMenu=()=>{
        menuRef.current.style.right="-350px"
    }
  return (
    <div className="main"  >
    <h1>Mr Lull</h1>
    <img onClick={openMenu} className="open" src="/images/list.png  "    />
    <ul ref={menuRef}>
    <img  onClick={closeMenu} className="close"  src="/images/close.png"  />
        <li>Home </li>
        <li> About </li>
        <li> Contact</li>
        <li> Privacy</li>
    </ul>
<div>
    <button className="b1">Click Me Bc</button>
</div>
    
    
    
    
    
    </div>
  )
}

export default Navbar