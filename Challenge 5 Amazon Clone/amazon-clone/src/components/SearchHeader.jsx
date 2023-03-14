
import { MenuIcon, SearchIcon, ShoppingCartIcon } from '@heroicons/react/solid'
import React, { useEffect, useState } from 'react'

const SearchHeader = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
          if (window.pageYOffset > 0) {
            setIsScrolled(true);
          } else {
            setIsScrolled(false);
          }
        };
        
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        }
      }, []);
  return (<>
    {isScrolled?(
        <div className='lg:hidden sticky top-0 h-[8vh] bg-black z-[999999] text-white flex items-center justify-evenly'>
        <MenuIcon className="h-8" />
        <div className="bg-white flex h-3/5 rounded-lg w-3/4 ">
      <input
            type="text"
            name="search-input"
            className="p-2 w-full ml-1 outline-none text-black bg-white rounded-l-full lg:rounded-none"
            placeholder="Search Amazon"
          />
       <button className="search-button bg-yellow-400 p-2.5 px-4 hover:bg-yellow-500 rounded-lg ">
          <SearchIcon className="h-5 text-black  " />
        </button>



      </div>
      <ShoppingCartIcon className="h-8" />
      
   



</div>
    ):(<></>)}
    
    </>
  )
}

export default SearchHeader