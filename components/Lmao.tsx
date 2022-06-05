import Link from "next/link"


function Lmao() {
  return (
      <div>
    <div className='w-full h-screen text-center'>
    
    <div>
       
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          
          <h1 className='py-4 text-gray-700'>
            Hi, I'm <span className='text-[#5651e5]'> Aryan</span>
          </h1>
          <h1 className='py-2 text-gray-700'>An IT Student</h1>
          <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
          Currently engaging with Web Development projects and Cyber Security challenges,
      I aspire to become a full stack web developer and/or cyber security researcher!
          </p>
          <nav className="flex justify-center space-x-4">
 
  <Link href = "https://discord.gg/CT764uegKa">
  <a target="_blank" >
      <img
          src="https://www.freepnglogos.com/uploads/discord-logo-png/discord-logo-logodownload-download-logotipos-1.png"
          width={50}
          height={0}
          alt=""
          className="cursor-pointer rounded"
        />
        </a>
         </Link>

         <Link href = "https://www.instagram.com/asiancreep_/">
         <a target="_blank" >
      <img
          src="https://www.freepnglogos.com/uploads/instagram-logo-png-transparent-0.png"
          width={50}
          height={0}
          alt=""
          className="cursor-pointer rounded"
        />
         </a>
         </Link>
        

         <Link href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ">
         
      <img
          src="https://www.logo.wine/a/logo/Tinder_(app)/Tinder_(app)-Flame-White-Dark-Background-Logo.wine.svg" 
          
          width={50}
          height={0}
          alt=""
          className="cursor-pointer rounded"
        />
        
         </Link>
       
</nav>
    
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>

  )
}

export default Lmao