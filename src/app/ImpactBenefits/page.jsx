// import React from 'react';
// import Image from 'next/image'; // Import the Next.js Image component

// const Slide3 = () => {
//     return (
//         <div className="flex flex-col items-center justify-start h-[70vh] bg-white pt-12">
//             <div className="w-[65%] flex justify-center items-center">
//          
//             </div>
//             <div className="w-[80%] mt-5 text-left text-gray-800 flex flex-col space-y-10">
//                 <div className="impact">
//                     <h1 className="text-2xl mb-2">Impact</h1>
//                     <h2 className="text-xl mt-5">Streamlining the process and minimizing waiting times:</h2>
//                     <p>The system helps speed up the bail application process, reducing the time spent waiting for approvals.</p>
//                     <h2 className="text-xl mt-5">Recommendation as per nature of offense & related previous case:</h2>
//                     <p>The system can provide recommendations based on the type of offense and prior similar cases, aiding judicial decisions.</p>
//                     <h2 className="text-xl mt-5">Simplifying application preparation and submission:</h2>
//                     <p>It streamlines the preparation and submission of bail applications, making the process more efficient and user-friendly.</p>
//                     <h2 className="text-xl mt-5">Streamlines workflow with real-time data access:</h2>
//                     <p>The system offers real-time access to legal data, ensuring smoother workflow across the judicial process.</p>
//                     <h2 className="text-xl mt-5">Make faster in decision-making:</h2>
//                     <p>Faster decision-making is possible through improved data access and automation, reducing human error and delays.</p>
//                 </div>
//                 <div className="benefits">
//                     <h1 className="text-2xl mb-2">Benefits</h1>
//                     <h2 className="text-xl mt-5">Saves time for legal aid providers, judicial authorities, and undertrial prisoners:</h2>
//                     <p>By automating the process, the system saves time for key stakeholders, including legal aid providers, judges, and prisoners awaiting bail.</p>
//                     <h2 className="text-xl mt-5">Cuts down on paper waste by digitizing the bail process:</h2>
//                     <p>The system digitizes the bail application process, reducing the need for physical paperwork, thus being more eco-friendly.</p>
//                     <h2 className="text-xl mt-5">Fairness and transparency in the bail process due to access to legal information:</h2>
//                     <p>The system provides easy access to critical legal information, promoting fairness and transparency in the bail process.</p>
//                     <h2 className="text-xl mt-5">Implements encryption and secure cloud storage, protecting sensitive legal data:</h2>
//                     <p>Sensitive legal data is protected through encryption and secure cloud storage, ensuring compliance with security standards and protecting personal information.</p>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Slide3;
"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Mammoth from 'mammoth';

function Slide3() {
    const [content, setContent] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    const chunkSize = 1500;

    useEffect(() => {
        const fetchFile = async () => {
            try {
                // Fetch the Word file from the public folder
                const response = await fetch('/Slide_5.docx');  // Adjust the file path as necessary
                const arrayBuffer = await response.arrayBuffer();  // Convert the response to array buffer

                // Options to retain hyperlinks
                const options = {
                    convertImage: Mammoth.images.imgElement((image) => {
                        return image.read("base64").then(function (imageBuffer) {
                            return { src: "data:" + image.contentType + ";base64," + imageBuffer };
                        });
                    }),
                    styleMap: [
                        "p[style-name='Heading 1'] => h1:fresh",
                        "p[style-name='Heading 2'] => h2:fresh",
                        "p[style-name='Hyperlink'] => a"
                    ],
                    includeDefaultStyleMap: true
                };

                const result = await Mammoth.convertToHtml({ arrayBuffer }, options);  // Convert to HTML

                // Split the content into chunks
                const contentChunks = [];
                for (let i = 0; i < result.value.length; i += chunkSize) {
                    contentChunks.push(result.value.slice(i, i + chunkSize));
                }

                setContent(contentChunks);  // Set the content chunks
                setIsLoading(false);  // Stop loading
            } catch (error) {
                console.error('Error fetching Word file:', error);
            }
        };

        fetchFile();  // Call the function when the component mounts
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const [entry] = entries;
            if (entry.isIntersecting && currentIndex < content.length) {
                setCurrentIndex((prevIndex) => prevIndex + 1);  // Load the next chunk
            }
        });

        const sentinel = document.getElementById('sentinel');
        if (sentinel) observer.observe(sentinel);

        return () => {
            if (sentinel) observer.unobserve(sentinel);
        };
    }, [content, currentIndex]);

    return (
        <div className="flex flex-col items-center justify-start bg-white pt-12">
            <div className="flex justify-center items-center">
                <Image
                    src="/ImpactBenefits.jpg" // Adjust the path if necessary (must be in the "public" directory)
                    alt="Slide 3"
                    width={800}  // Specify width
                    height={600} // Specify height
                    className="max-w-full h-auto border-2 border-black"
                />
            </div>
            {/* Increase font size for the entire content area */}
            <div className="w-[80%] mt-5 text-left text-gray-800 text-lg">
                {/* Render the current content chunk and apply font size to the dynamically loaded content */}
                {content.slice(0, currentIndex + 1).map((chunk, idx) => (
                    <div key={idx} dangerouslySetInnerHTML={{ __html: chunk }} style={{ fontSize: '18px' }} />
                ))}

                {/* Sentinel element for observing when to load more */}
                {currentIndex < content.length - 1 && (
                    <div id="sentinel" style={{ height: '30px', backgroundColor: 'transparent' }}></div>
                )}

                {/* Show loading indicator */}
                {isLoading && <p>Loading...</p>}
            </div>
        </div>
    );
}

export default Slide3;
