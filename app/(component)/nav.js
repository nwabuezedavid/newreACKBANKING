"use client";
import Link from 'next/link'
import { useContext } from 'react';
import { uniVersalc } from './uni';
import LogoutButton from './logout';
 

 
const NaV = () => {

    const {setnavtiog,navtiog} = useContext(uniVersalc)
  return (
    <>
   
    <main className={`bg-[#f3f1f5]   relative w-[20%] items-center flex h-full  max-sm:fixed z-10 ${navtiog && "z-[3000] translate-x-[-200vw]   transition-all delay-100  !w-0"} transition-all delay-100 flex-col max-sm:w-full`}>
<h3 onClick={()=>setnavtiog(!navtiog)}  className='bg-red-600 max cursor-pointer flex md:hidden flex-col max-md:right-1 absolute top-10 -right-2 p-2 text-white rounded-r-md'>
  <i className=" bi bi-x"></i>
</h3>

<span className='w-full p-4 px-7 border-b-black border-b-3 font-mono items-center text-center'>
  <h1 className='font-bold text-4xl max-sm:text-[180%] w-full max-md:text-[100%]'>
  FUNDWISE
  </h1>
  <hr className='mt-2 bg-black'/>
</span>
  <h4 className='text-gray-400 font-thin font-sans self-start p-2 '>General</h4>
<span className='flex flex-col w-full *:flex *:flex-row px-5 '>
  <Link href={'/'} className='w-[90%] p-3 gap-3   capitalize   font-light text-gray-600 text-sm  shadow-2 shadow-md hover:bg-white rounded-md border-2 hover:text-black'>
    <i className="bi bi-grid-1x2-fill"></i>
    <h3>  Dashboard</h3>
  </Link>
  <Link href={'/card/'} className='w-[90%] p-3 gap-3   capitalize   font-light text-gray-600 text-sm  shadow-2 shadow-md hover:bg-white rounded-md border-2 hover:text-black'>
    <i className="bi bi-grid-1x2"></i>
    <h3>  card</h3>
  </Link>
  <Link href={'/inter-transfer/'} className='w-[90%] p-3 gap-3 capitalize  font-light text-gray-600 text-md hover:shadow-2 hover:shadow-md hover:bg-white hover:rounded-md hover:border-2 hover:text-black'>
    <i className="bi bi-cash-coin text-xl"></i>
    <h3>InterTransfer</h3>
  </Link>
  <Link href={'/local-transfer/'} className='w-[90%] p-3 gap-3 capitalize  font-light text-gray-600 text-md hover:shadow-2 hover:shadow-md hover:bg-white hover:rounded-md hover:border-2 hover:text-black'>
    <i className="bi bi-credit-card text-xl"></i>
    <h3>Localtransfer</h3>
  </Link>
  <Link href={'/history/'} className='w-[90%] p-3 gap-3 capitalize  font-light text-gray-600 text-md hover:shadow-md hover:bg-white hover:rounded-md hover:border-2 hover:text-black'>
    <i className="bi bi-pie-chart text-xl"></i>
    <h3>History</h3>
  </Link>
  <Link href={'/profile/'} className='w-[90%] p-3 gap-3  capitalize   font-light text-gray-600 text-md  hover:shadow-md hover:bg-white hover:rounded-md hover:border-2 hover:text-black'>
    <i className="bi bi-person-circle text-xl"></i>
    <h3>profile</h3>
  </Link>
</span>

{/* support */}
  <h4 className='text-gray-400 font-thin font-sans self-start p-2 mt-2'>Support</h4>
<span className='mt-1 flex flex-col w-full *:flex *:flex-row px-5 '>
  <Link href={'/help/'} className='w-[90%] p-3 gap-3 capitalize  font-bold text-gray-600 text-md hover:shadow-2 hover:shadow-md hover:bg-white hover:rounded-md hover:border-2 hover:text-black'>
  <i className="bi bi-exclamation-circle-fill"></i>
    <h3>  Help</h3></Link>
  <Link href={'/feedback/'} className='w-[90%] p-3 gap-3 capitalize  font-bold text-gray-600 text-md hover:shadow-2 hover:shadow-md hover:bg-white hover:rounded-md hover:border-2 hover:text-black'>
  <i className="bi bi-chat-dots"></i>
    <h3>  feedback</h3></Link>
</span>



{/* logout */}
<span className=' h-full w-full *:flex *:flex-row px-5 flex-1 justify-end flex flex-col pb-[30%]'>
  
    <LogoutButton/>
</span>
    </main>
    </>
  )
}

export default NaV