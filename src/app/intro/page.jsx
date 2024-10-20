"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Mammoth from 'mammoth';

function IntroSlide() {
    const [content, setContent] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    const chunkSize = 1500;

    useEffect(() => {
        const fetchFile = async () => {
            try {
                // Fetch the Word file from the public folder
                const response = await fetch('/Slide_1.docx');  // Adjust the file path as necessary
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
                    src="/IntroSlide.jpg" // Adjust the path if necessary (must be in the "public" directory)
                    alt="Intro Slide"
                    width={900}  // Specify width
                    height={900} // Specify height
                    className="border-2 border-black rounded"
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

export default IntroSlide;