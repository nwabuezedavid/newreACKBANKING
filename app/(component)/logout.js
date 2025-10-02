"use client";

import { useClerk } from "@clerk/nextjs";

export default function LogoutButton() {
  const { signOut } = useClerk();

  return (
    <button
      onClick={() => signOut()}
     className='w-[90%] p-3 gap-3   capitalize   font-light text-gray-600 text-md  shadow-2 shadow-md hover:bg-white rounded-md  hover:text-black'>
    <i className="bi bi-toggles"></i>
    <h3>  Logout</h3>
      
    </button>
  );
}
