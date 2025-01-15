import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className='hidden lg:block'>
       <div className='container'>
          <div className='flex w-fit gap-10 mx-auto font-medium py-4 text-blackish'>
            <Link className='navbar__link relative' href="#">HOME</Link>
            <Link className='navbar__link relative' href="#">SALE</Link>
            <Link className='navbar__link relative' href="#">LIPSTICK</Link>
            <Link className='navbar__link relative' href="#">FOUNDATION</Link>
            <Link className='navbar__link relative' href="#">BLUSH</Link>
            <Link className='navbar__link relative' href="#">EYESHADOW</Link>
            <Link className='navbar__link relative' href="#">ABOUT US</Link>
          </div>
       </div>
    </div>
  );
};

export default Navbar;

