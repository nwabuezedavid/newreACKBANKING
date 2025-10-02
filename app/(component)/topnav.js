"use client";
import Link from 'next/link'
import React, { useContext, useState } from 'react'
import { uniVersalc } from './uni'
import { UserButton } from '@clerk/nextjs';

const TopNav = () => {
  const {setnavtiog,navtiog} = useContext(uniVersalc)
  const [searchvisible, setsearchvisible] = useState(true)
  const [bell, setbell] = useState(true)
  return (
    <main className='flex w-full h-[90px] relative items-baseline max-md:p-2 justify-between md:px-10 max-md:mt-[20px]  '>
      
      <form action="" className={`flex gap-3   ${ !searchvisible && 'max-md:w-full  max-md:absolute max-md:left-0 max-md:h-full max-md:bg-white max-md:shadow-sm p-2'} ${!setnavtiog && '-z-30'} items-center w-1/4     `}>
<h3 onClick={()=>setnavtiog(!navtiog)} className='bg-red-600 cursor-pointer flex flex-col mr-3   top-10 -right-2 p-2 text-white rounded-md'>
  <i className=" bi bi-justify"></i>
</h3>
        <i className='bi bi-search   text-gray-500' onClick={()=>setsearchvisible(!searchvisible)}></i>
        <input type="text" placeholder='Search anything...'  className={`w-full outline-none max-md:block ${searchvisible && 'max-md:hidden'} p-3 border-none focus-within:border-none focus:border-none`} />
        <i onClick={()=>setsearchvisible(!searchvisible)} className={` max-md:block text-red-500 hidden bi bi-x w-[20px] h-[20px] ${searchvisible && 'max-md:hidden'}`}></i>
      </form>
      <div className={`flex w-[40%] ${!searchvisible && 'max-md:hidden'} max-md:w-full capitalize  gap-2 justify-center items-center`}>
        <Link className='fex w-fit px-2 py-1 rounded text-xs bg-gray-100'  href={'/'}>deposit</Link>
        <Link  className='fex w-fit px-2 py-1 rounded text-xs bg-gray-100' href={'/'}> transfer </Link>
        <Link  className='fex w-fit px-2 py-1 rounded text-xs bg-purple-700 text-white' href={'/'}>loan </Link>
        <button className='relative ' > <i className='bi bi-bell !z-[-900]' onClick={()=>setbell(!bell)}></i> <p className='w-2 h-2 absolute top-0 -right-0 animate-bounce rounded-full bg-red-500'></p> <BellNo bell={bell}  /></button>
        <div className="w-fit h-fit items-center min-h-6 min-w-6 flex  rounded-full bg-red-500"><UserButton  afterSignOutUrl="/" /></div>
      </div>
    </main>
  )
}




 

export const BellNo = ({bell}) => {
  return (
    <div className={`w-[300px] ${!bell && 'transition-all !flex z-10 '} hidden    items-center justify-center  place-self-center mt-[38px] h-fit p-3 absolute border border-gray-400/50 -top-[0px] right-0   bg-purple-50 rounded shadow-md shadow-black-400/50    `}>
        <ul className='flex  w-full flex-col gap-2  h-fit text-xs *:border   *:pb-2  items-center justify-center'>
          <header className='w-full text-md uppercase border-none'>Notification </header>
          <li className='flex w-full text-[80%] gap-2 object-cover justify-between items-center h-fit text-center'>
<b className="w-[20px] h-[20px]   flex items-center justify-center bg-red-200  rounded-full p-2 border border-red-500">w</b>
<p className="truncate"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt eaque odit repudiandae, necessitatibus ex saepe voluptatum. Laborum deserunt obcaecati qui facilis ipsam tempora nobis hic dolores, a suscipit cumque modi?</p>
<Link href={'/'} className='text-[8px] flex w-full break-keep text-red-500'>Read More...</Link>
          </li>
          <li className='flex w-full text-[80%] gap-2 object-cover items-center'>
<b className="w-[20px] h-[20px] flex items-center justify-center bg-red-200  rounded-full p-2 border border-red-500">w</b>
<p className="truncate"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt eaque odit repudiandae, necessitatibus ex saepe voluptatum. Laborum deserunt obcaecati qui facilis ipsam tempora nobis hic dolores, a suscipit cumque modi?</p>
<Link href={'/'} className='text-[8px] flex w-full break-keep text-red-500'>Read More...</Link>
          </li>
         
        </ul>
    </div>
  )
}

export default TopNav