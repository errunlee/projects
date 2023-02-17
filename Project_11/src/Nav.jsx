import {useState,useRef,useEffect} from 'react'
export default function Nav() {
  const [show,setShow]=useState(false)
  const toggle=()=>{
    setShow(!show)
  }
  const contRef=useRef(null)
  const linksRef=useRef(null)
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (show) {
      contRef.current.style.height = `${linksHeight}px`;
    } else {
      contRef.current.style.height = '0px';
    }
  }, [show]);
  return (
    <>
      <header>        
         <div className="title">
          ErrunLeee
        <button onClick={toggle} className={`toggle-btn`}><img src="../image.png"/></button>           
        </div>
        <div ref={contRef} className={`${show?'show':'hide'} items`}>
          <ul ref={linksRef} className='links'>
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
            <li>Profile</li>
          </ul>
        </div>       
        <div className="social-links">
          <img src='https://source.unsplash.com/random/40x40/' />
          <img src='https://source.unsplash.com/random/40x40/' />
          <img src='https://source.unsplash.com/random/40x40/' />
          <img src='https://source.unsplash.com/random/40x40/' />
        </div>
      </header>
    </>
  )
}