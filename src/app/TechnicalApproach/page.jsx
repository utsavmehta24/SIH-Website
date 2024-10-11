"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Mammoth from 'mammoth';

function Slide2() {
    const [content, setContent] = useState([]);  // Store chunks of content
    const [currentIndex, setCurrentIndex] = useState(0);  // Track the current chunk
    const [isLoading, setIsLoading] = useState(true);  // Loading state for content

    const chunkSize = 1500;  // Define chunk size for content splitting

    useEffect(() => {
        const fetchFile = async () => {
            try {
                // Fetch the Word file from the public folder
                const response = await fetch('/Slide_6.docx');  // Adjust the file path as necessary
                const arrayBuffer = await response.arrayBuffer();  // Convert to array buffer
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

    // Intersection Observer to load content as user scrolls
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
            <div className="w-[65%] flex justify-center items-center">
                <Image
                    src="/TechincalApproach.jpg"
                    alt="Slide 2"
                    width={800}
                    height={600}
                    className="max-w-full h-auto border-2 border-black"
                />
            </div>

            {/* Increase font size for the entire content area */}
            <div className="w-[80%] mt-5 text-left text-gray-800 text-lg">
                <h1 className="text-3xl mb-2">Frontend Interface Design & User Interaction</h1>

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

export default Slide2;
