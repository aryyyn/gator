import { LinkIcon, MailIcon, MoonIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import { useEffect, useState} from 'react'

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className={`${isScrolled && 'bg-[#141414]'}`}>
      <div className = "flex items-center space-x-2 md:space-x-10 ">

    
      <img
          src="https://freesvg.org/img/turtle.png"
          width={100}
          height={20}
          className="cursor-pointer object-contain"
        />
        <ul className="hidden space-x-24 md:flex">    
            <li className="headerLink">Home</li>
            <li className="headerLink">Profile</li>
            <li className="headerLink">About</li>
            <li className="headerLink">Education</li>
            <li className="headerLink">Contact</li>
            
           
            
        </ul>
    </div>
     
     
     

      <div className='flex items-center space-x-4 text-sm font-light cursor-pointer rounded'>

      <MoonIcon className=" h-6 w-6"/>
      
      <MailIcon className="h-6 w-6"/>
      <Link href = "homepage">
      <img
          src="https://freesvg.org/img/turtle.png"
          width={50}
          height={0}
          alt=""
          className="cursor-pointer rounded"
        />
      
      </Link>
      </div>
  </header>
  )
}

export default Header