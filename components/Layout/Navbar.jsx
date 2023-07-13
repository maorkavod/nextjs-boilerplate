import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <header>
      {/* Other header content */}
      <nav>
        <ul>
          <li>
            <Link href="/about">
             About
            </Link>
          </li>
          {/* Other navigation links */}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
