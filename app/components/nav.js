import React from 'react'
import Link from 'next/link';
import { UserButton, useUser } from '@clerk/nextjs';

const Navbar = () => {
    const {user , isLoaded} =  useUser
      return (
      <nav className="bg-gray-800 p-4">
        <div className="flex items-center justify-between">
          <div>
            <Link href="/" className="text-white font-bold text-lg">Next Auth</Link>
          </div>
          <div>
            {
                isLoaded && user && 
                <>
                
        <Link href="/Dashboard" className="text-white mr-4">Dashboard</Link>
                  <UserButton afterSignOutUrl='/'  />
              
        </>
            }
           
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
