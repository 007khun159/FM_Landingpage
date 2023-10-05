import React from 'react'
import Logo  from '../images/logo.svg'

function navbar() {
  return (
    <header className='bg-white absolute top-0 left-0 h-auto z-10 w-full shadow-lg'>
      <div className='flex justify-between'>
        <img src={Logo}/>
        <div>
          <li><a>Home</a></li>
          <li><a>About</a></li>
          <li><a>Contact</a></li>
          <li><a>Blog</a></li>
          <li><a>Home</a></li>
          <li><a>Careers</a></li>
        </div>
        <div className='overlay'>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Blog</li>
            <li>Careers</li> 
        </div>

        <button>Request Invite</button>

        <div>
          <span>Menubar</span>
          <img/>
          <img/>
          
        </div>
      </div>
    </header>
  )
}

export default navbar