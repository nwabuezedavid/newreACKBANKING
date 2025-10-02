 "use client"
 
import React, { useRef, useState } from 'react'
import Link from 'next/link'
import ChartDashboard from './chart'
import CreditCard from './card'
import ConvertCur from './covertcur'
import TransactionsTable from './table'
import TransferFund from './transfer'

const MaB = () => {
  return (
    <section
    
    className="bg-white flex flex-row   max-md:flex-col p-11 max-md:p-2 flex-1 w-full  ">
        
<main className='flex-1   w-full flex flex-col'>
    <div className="flex w-full max-md:flex-wrap" >
    <div className="flex w-fit max-sm:w-full flex-col max-sm:ml-4  max-sm:mt-[30px] ">
        <h3 className='text-gray-500 text-sm  '>
            Total Balance in USD
        </h3>
        <p className='text-[50px] text-black font-bold font-ap  '>$300,000</p>
        <div className='flex *:w-fit *:h-fit *:flex *:gap-1 *:text-xs gap-1 *:rounded-md *:p-1 justify-start '>
            <Link href={'/sd'} className="bg-purple-200 text-purple-700 capitalize hover:bg-white">
            <i className=' font-bold bi bi-arrow-up text-[10px]'></i>
            <p>send</p>
            </Link>
            <Link href={'/sd'} className="text-gray-600 bg-gray-100/50 capitalize hover:bg-white">
            <i className=' font-bold bi bi-arrow-down text-[10px]'></i>
            <p>request</p>
            </Link>
            <Link  href={'/sd'} className="text-gray-600 bg-gray-100/50 capitalize hover:bg-white">
            <i className=' font-bold bi bi-plus text-[10px]'></i>
            <p>top up</p>
            </Link>
        </div>
    </div>
    <div className="flex flex-col w-[100%] h-fit p-3   capitalize">
<h3 className='font-ap1 font-bold text-gray-600'>quick Transcation </h3>
<Dssdss/>
    </div>
    </div>
 
    <ChartDashboard/>
    <TransactionsTable/>
    
   
</main> 

<main className='w-[30%] max-md:w-full  '>
<p className="flex w-full h-fit mt-4 text-3xl font-sans font-bold p-3">My Card</p>
    <CreditCard/>
     <ConvertCur/>
</main>
    </section>
  )
}

export const Dssdss = () => {
    

const maincon = useRef()
const left = useRef()
const right = useRef()
const fir = useRef()

  function scrollLeft() {
    maincon.current.scrollLeft -= 200;
  }
  function scrollRight() {
    maincon.current.scrollLeft += 200;
  }



let isdrag   = false,prevPageX,PrevScrollLeft
function drage(e) {
    console.log( e.pageX );
    if(!isdrag) return ;
   e.preventDefault();
   let ppostion =  e.pageX - prevPageX
   maincon.current.scrollLeft =  PrevScrollLeft - ppostion  
    
}
function dragestart(e) {
   isdrag=true
   
   prevPageX =  e.pageX 
   PrevScrollLeft =  maincon.current.scrollLeft
   
}
function dragestop(e) {
  isdrag=false
   
}

 
const [isOpen, setIsOpen] = useState(false);

  return (
  <main className="flex w-full   flex-grow flex-1   h-full     relative p-3">
   
    <main  ref={maincon} onMouseMove={(e)=>drage(e)} onMouseDown={dragestart} onMouseUp={dragestop} className='transition-all delay-150  cursor-grab overflow-x-hidden  w-[340px] flex-grow'>

    <div   className='flex w-full felx-1 gap-2 '>

    <button  onClick={() => setIsOpen(true)} className='w-fit p-2 h-[90px] border rounded-md capitalize  flex flex-col items-center   justify-center '>
        <i className="bi bi-plus w-[20px] h-[20px] border-purple-400 bg-purple-100 border-2 p-5 border-dashed b rounded-full flex items-center  justify-center text-center "> </i>
           <h1 className='text-md'>Transfer</h1>   
           <p  className='text-xs text-gray-400'>Manuel</p>  
    </button>
    <button className=' cursor-pointer p-2 h-[90px] border rounded-md capitalize  flex flex-col bg-slate-50 w-[80px] items-center  justify-center '>
        <i className="bi bi-person w-[20px] h-[20px] border p-5 border-dashed b rounded-full flex items-center  justify-center text-center "> </i>
           <h1 className='text-[10px]'>michale</h1>   
           <p  className='text-xs text-gray-400'>03701278</p>  
    </button>
    <button className=' cursor-pointer p-2 h-[90px] border bg-slate-50 w-[80px] rounded-md capitalize  flex flex-col items-center  justify-center '>
        <i className="bi bi-person w-[20px] h-[20px] border p-5 border-dashed b rounded-full flex items-center  justify-center text-center "> </i>
           <h1 className='text-[10px]'>james</h1>   
           <p  className='text-xs text-gray-400'>3242343</p>  
    </button>
    <button className=' cursor-pointer p-2 h-[90px] border bg-slate-50 w-[80px] rounded-md capitalize  flex flex-col items-center  justify-center '>
        <i className="bi bi-person w-[20px] h-[20px] border p-5 border-dashed b rounded-full flex items-center  justify-center text-center "> </i>
           <h1 className='text-[10px]'>james</h1>   
           <p  className='text-xs text-gray-400'>3242343</p>  
    </button>
    <button className=' cursor-pointer p-2 h-[90px] border bg-slate-50 w-[80px] rounded-md capitalize  flex flex-col items-center  justify-center '>
        <i className="bi bi-person w-[20px] h-[20px] border p-5 border-dashed b rounded-full flex items-center  justify-center text-center "> </i>
           <h1 className='text-[10px]'>james</h1>   
           <p  className='text-xs text-gray-400'>3242343</p>  
    </button>
    <button className=' cursor-pointer p-2 h-[90px] border bg-slate-50 w-[80px] rounded-md capitalize  flex flex-col items-center  justify-center '>
        <i className="bi bi-person w-[20px] h-[20px] border p-5 border-dashed b rounded-full flex items-center  justify-center text-center "> </i>
           <h1 className='text-[10px]'>james</h1>   
           <p  className='text-xs text-gray-400'>3242343</p>  
    </button>
    <button className=' cursor-pointer p-2 h-[90px] border bg-slate-50 w-[80px] rounded-md capitalize  flex flex-col items-center  justify-center '>
        <i className="bi bi-person w-[20px] h-[20px] border p-5 border-dashed b rounded-full flex items-center  justify-center text-center "> </i>
           <h1 className='text-[10px]'>james</h1>   
           <p  className='text-xs text-gray-400'>3242343</p>  
    </button>
    <button className=' cursor-pointer p-2 h-[90px] border bg-slate-50 w-[80px] rounded-md capitalize  flex flex-col items-center  justify-center '>
        <i className="bi bi-person w-[20px] h-[20px] border p-5 border-dashed b rounded-full flex items-center  justify-center text-center "> </i>
           <h1 className='text-[10px]'>james</h1>   
           <p  className='text-xs text-gray-400'>3242343</p>  
    </button>
    <button className=' cursor-pointer p-2 h-[90px] border bg-slate-50 w-[80px] rounded-md capitalize  flex flex-col items-center  justify-center '>
        <i className="bi bi-person w-[20px] h-[20px] border p-5 border-dashed b rounded-full flex items-center  justify-center text-center "> </i>
           <h1 className='text-[10px]'>james</h1>   
           <p  className='text-xs text-gray-400'>3242343</p>  
    </button>
    </div>
    <div className='absolute md:hidden right-2 *:bg-red-600 gap-1   text-white py-3 flex  '>
      <i className='bi bi-chevron-left hover:bg-purple-600' onClick={scrollLeft}></i>
      <i className='bi bi-chevron-right hover:bg-purple-600' onClick={ scrollRight}></i>
    </div>
  </main> 
  {isOpen && (<TransferFund isOpen = {isOpen}   setIsOpen ={setIsOpen} />)}
   
    </main>

  )
}
export default MaB

 

