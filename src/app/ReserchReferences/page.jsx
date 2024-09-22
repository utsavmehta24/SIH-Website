import React from 'react';
import Image from 'next/image';

const Slide5 = () => {
    return (
        <div className="flex items-center justify-center h-[70vh] bg-white">
            <div className="w-[65%] flex justify-center items-center">
                <Image 
                    src="/ReserchReferences.jpg" 
                    alt="Slide 1" 
                    width={800} 
                    height={600} 
                    className="max-w-full h-auto border-2 border-black"
                />
            </div>
        </div>
    );
}

export default Slide5;
