import React from 'react';
import Image from 'next/image';

function Slide1() {
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
            <div className="w-[80%] mt-5 text-left text-gray-800">
                <h1 className="text-2xl mb-2">Introduction</h1>
                <p>
                    The traditional bail process is often time-consuming and inefficient. Our innovative solution, 
                    the Bail Reckoner, is designed to address these challenges by providing customized interfaces 
                    for different stakeholders: police, undertrial prisoners, judicial aid providers, and judicial authorities.
                </p>

                <h2 className="text-xl mt-5 text-gray-700">Features of the Bail Reckoner</h2>

                <h3 className="text-lg mt-4 text-gray-600">Customized Interfaces</h3>
                <ul className="list-disc pl-5">
                    <li><strong>Police:</strong> Simplifies the processing of bail applications.</li>
                    <li><strong>Undertrial Prisoners:</strong> Provides easy access to bail eligibility and application procedures.</li>
                    <li><strong>Judicial Aid Providers:</strong> Facilitates accurate preparation and submission of bail applications.</li>
                    <li><strong>Judicial Authorities:</strong> Streamlines the evaluation process for quicker decisions.</li>
                </ul>

                <h3 className="text-lg mt-4 text-gray-600">Efficiency Improvements</h3>
                <p>
                    <strong>Administrative Tasks:</strong> Automates and manages documents, reducing workload for judiciary and legal professionals.<br />
                    <strong>Communication:</strong> Enhances document handling and communication between stakeholders, improving overall efficiency.
                </p>

                <h3 className="text-lg mt-4 text-gray-600">Legal Aid Provider Services</h3>
                <p>
                    <strong>Charged Services:</strong> Providers can access references and customized applications based on case requirements.
                </p>

                <h3 className="text-lg mt-4 text-gray-600">Citizen Access</h3>
                <p>
                    <strong>Community Access:</strong> Citizens can connect with legal aid providers for a fee, gaining access to professional assistance.
                </p>
            </div>
        </div>
    );
}

export default Slide1;
