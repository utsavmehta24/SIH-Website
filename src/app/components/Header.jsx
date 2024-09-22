import React from 'react';

const Header = () => {
    return (
        <header className="w-full bg-white flex items-center justify-between p-4 shadow-md">
            {/* Company Logo */}
            <div className="flex-shrink-0 w-1/3">
                <img 
                    src="https://engg.dypvp.edu.in/images/logoDpu1.png" 
                    alt="Company Logo" 
                    className="h-12 w-auto"
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
