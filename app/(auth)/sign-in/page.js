'use client'

import { SignIn, useUser } from '@clerk/nextjs'

export default function page() {
  const { isSignedIn } = useUser()

  if (!isSignedIn) {
    return <SignIn />
  }

 
}