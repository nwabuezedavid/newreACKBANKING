import Link from 'next/link'
import React from 'react'

export const layout = ({children}) => {
  return (
    <div className='flex w-full items-center pt-[10%] gap-3 *:shadow-none h-full flex-col justify-center'>
<Link href={'/'} className='items-center text-center flex flex-col'>
      <img src="./vercel.svg" className='h-10 w-10 bg-red-500 rounded-full p-3' alt="" />
      <h1>BANK FCX WOLRD</h1>
</Link>
      {children}
      </div>
  )
}
export default  layout