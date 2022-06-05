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
      <div className = "flex items-center space-x-4 md:space-x-15 ">

    
      <img
          src="https://freesvg.org/img/turtle.png"
          width={100}
          height={20}
          className="cursor-pointer object-contain"
        />
        <ul className="hidden space-x-24 md:flex">    
       
            <a  href="/Home" className="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900" target="_blank">Home</a>
  <a href="/Profile" className="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900" target="_blank">Profile</a>
  <a href="/About" className="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900" target="_blank" >About</a>
  <a href="/Portfolio" className="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900" target="_blank" >Portfolio</a>
  <a href="/Contact" className="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900" target="_blank" >Contact</a>
           
            
        </ul>
    </div>
     
     
     

      <div className='flex items-center space-x-4 text-sm font-light cursor-pointer rounded'>
      <Link href = 'Homepage'>
      <MoonIcon className=" h-6 w-6"/>
      </Link>
      
      <MailIcon className="h-6 w-6"/>
      <Link href = "Homepage">
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