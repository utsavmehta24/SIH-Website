import React from 'react';
import Image from 'next/image';

const Slide2 = () => {
    return (
        <div className="flex flex-col items-center justify-start h-[70vh] bg-white pt-12">
            <div className="w-[65%] flex justify-center items-center">
                <Image 
                    src="/TechincalApproach.jpg" 
                    alt="Slide 2" 
                    width={800} 
                    height={600} 
                    className="max-w-full h-auto border-2 border-black" 
                />
            </div>
            <div className="w-[80%] mt-5 text-left text-gray-800">
                <h1 className="text-2xl mb-2">Frontend Interface Design & User Interaction</h1>
                <h2 className="text-xl mt-5">Technologies Used:</h2>
                <ul className="list-disc pl-5">
                    <li><strong>ReactJS & NextJS:</strong> Used for dynamic routing, ensuring fast, intuitive, and responsive applications. ReactJS provides a smooth UI, while NextJS supports server-side rendering for better performance and SEO.</li>
                    <li><strong>Figma:</strong> Used for creating user-centric dashboards, facilitating collaboration among designers and developers to ensure an intuitive interface.</li>
                </ul>
                <p><strong>Example:</strong> A dynamic interface allows easy navigation through bail application steps with seamless transitions between pages.</p>

                <h1 className="text-2xl mt-5 mb-2">Backend Process & Data Management</h1>
                <h2 className="text-xl mt-5">Technologies Used:</h2>
                <ul className="list-disc pl-5">
                    <li><strong>Django, FastAPI, Flask:</strong> Handle backend logic like processing bail requests, fetching data from external databases, and managing authentication and sessions.</li>
                    <li><strong>Workflow Optimization:</strong> Designed to process requests efficiently, reducing bail application review and processing time.</li>
                </ul>
                <p><strong>Example:</strong> When a bail application is submitted, the backend handles the request, communicates with external databases, and ensures an efficient workflow.</p>

                <h1 className="text-2xl mt-5 mb-2">Data Flow & API Integration</h1>
                <h2 className="text-xl mt-5">External System Communication:</h2>
                <ul className="list-disc pl-5">
                    <li><strong>Data Repository:</strong> MongoDB/MySQL is used to store, retrieve, and update bail data, including case details and court proceedings.</li>
                </ul>
                <p><strong>Example:</strong> Updates in the E-Court system are retrieved in real-time and reflected in the user interface.</p>

                <h1 className="text-2xl mt-5 mb-2">Security Protocols</h1>
                <ul className="list-disc pl-5">
                    <li><strong>End-to-End Encryption & Tokenization:</strong> Ensures data is encrypted during transmission and storage to prevent unauthorized access.</li>
                    <li><strong>HTTPS (TLS/SSL) & Secure Shell:</strong> Protects data integrity and security during exchanges between users and servers.</li>
                </ul>
                <p><strong>Example:</strong> Legal professionals access case information securely to ensure privacy and confidentiality.</p>

                <h1 className="text-2xl mt-5 mb-2">Cloud and Machine Learning Integration</h1>
                <ul className="list-disc pl-5">
                    <li><strong>Google Cloud Storage:</strong> Provides scalability, reliability, and uptime for handling large amounts of data.</li>
                    <li><strong>Machine Learning (PyTorch & TensorFlow):</strong> Used for predictive analytics to assess bail conditions and predict outcomes based on historical data.</li>
                </ul>
                <p><strong>Example:</strong> Analyzing historical bail decisions to suggest conditions or outcomes to judges.</p>
            </div>
        </div>
    );
}

export default Slide2;
