"use client";

import { useEffect, useState } from "react";

import { useRouter } from "next/navigation";
import { UnivContext } from "../(component)/uni";
import NaV from "../(component)/nav";
import TopNav from "../(component)/topnav";
import MaB from "../(component)/main";
import { useUser } from "@clerk/nextjs";

 
 
 
 

export default function Home() {


  const { user, isLoaded } = useUser()
  useEffect(() => {

  }, [ ])

  return (
 

<MaB/>

 
  );
}
