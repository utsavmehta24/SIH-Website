"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Mammoth from 'mammoth';

function Slide1() {
    const [content, setContent] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    const chunkSize = 1500;

    useEffect(() => {
        const fetchFile = async () => {
            try {
                // Fetch the Word file from the public folder
                const response = await fetch('/Slide_2.docx');  // Adjust the file path as necessary
                const arrayBuffer = await response.arrayBuffer();  // Convert the response to array buffer
                const result = await Mammoth.convertToHtml({ arrayBuffer });  // Convert to HTML
                
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
                    src="/IntroAndUserFlow.jpg"
                    alt="Slide 1"
                    width={800}
                    height={600}
                    className="max-w-full border-2 border-black rounded"
                />
            </div>
            {/* Increase font size for the entire content area */}
            <div className="w-[80%] mt-5 text-left text-gray-800 text-lg">
                <h1 className="text-3xl mb-2">Introduction</h1>
                <p>
                    The traditional bail process is fraught with inefficiencies, delays, and complexities, making it difficult for undertrial prisoners, judicial authorities, and the police to effectively handle cases in a timely manner. These issues create substantial backlogs in the justice system, contribute to overcrowded prisons, and deny speedy justice to many individuals.
                </p>

                <h2 className="text-2xl mt-5 text-gray-700">A. Challenges in the Traditional Bail Process</h2>
                <p>Key challenges include:</p>
                <ul className="list-disc pl-5">
                    <li><strong>Inefficiencies in the Manual Process:</strong> The manual bail process involves multiple steps, from documentation to coordination, which slows down the process significantly.</li>
                    <li><strong>Time Delays Affecting Undertrial Prisoners:</strong> Many undertrial prisoners remain in jail for extended periods, contributing to prison overcrowding.</li>
                    <li><strong>Complexities Faced by Judicial Authorities:</strong> Judicial authorities face challenges like case overload and inconsistent risk assessments, complicating their decisions.</li>
                    <li><strong>Impact on Police and Investigative Authorities:</strong> Police face delays in submitting charge sheets and experience coordination challenges, which lead to further delays.</li>
                </ul>
                
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

export default Slide1;
