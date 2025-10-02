"use client";
import { createContext, useState } from "react"


 



export const uniVersalc = createContext()

 

export const UnivContext = ({children}) => {
    const [navtiog, setnavtiog] = useState(true)
  return (
    <uniVersalc.Provider value={{setnavtiog,navtiog}}>
         {children} 

    </uniVersalc.Provider>
  )
}

 