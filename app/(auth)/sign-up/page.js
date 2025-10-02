'use client'

import { SignUp, useUser } from '@clerk/nextjs'

export default function page() {
  const { isSignedIn } = useUser()

  
    return <SignUp />
 

 
}