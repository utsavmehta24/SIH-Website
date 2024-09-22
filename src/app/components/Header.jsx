import React from 'react';
import Image from 'next/image'; // Import Next.js Image component

const Header = () => {
    return (
        <header className="w-full bg-white flex items-center justify-between p-4 shadow-md">
            {/* Company Logo */}
            <div className="flex-shrink-0 w-1/3">
                <Image 
                    src="https://engg.dypvp.edu.in/images/logoDpu1.png" 
                    alt="Company Logo" 
                    width={100} // Set the width
                    height={48} // Set the height
                />
            </div>

            {/* Company Name */}
            <div className="flex-grow text-center md:text-left">
                <h1 className="text-4xl font-bold text-red-800">Dr. D. Y. Patil Institute of Technology</h1>
            </div>
        </header>
    );
};

export default Header;
