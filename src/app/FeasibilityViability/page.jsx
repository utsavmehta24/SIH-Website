import React from 'react';
import Image from 'next/image'; // Import the Next.js Image component

const Slide3 = () => {
    return (
        <div className="flex flex-col items-center justify-start h-[70vh] bg-white pt-12">
            <div className="w-[65%] flex justify-center items-center">
                <Image 
                    src='/FeasibilityViability.jpg' // Adjust the path if necessary (must be in the "public" directory)
                    alt="Slide 3" 
                    width={800}  // Specify width
                    height={600} // Specify height
                    className="max-w-full h-auto border-2 border-black"
                />
            </div>
            <div className="w-[80%] mt-5 text-left text-gray-800">
                <h1 className="text-2xl mb-2">Streamlined Bail Processing</h1>
                <h2 className="text-xl mt-5">Problem Addressed:</h2>
                <p>Indian courts handle thousands of bail applications daily.</p>
                <h2 className="text-xl mt-5">Proposed Solution:</h2>
                <p>The &quot;Bail Rocker&quot; system is designed to automate and expedite the bail application process.</p>
                
                <h2 className="text-xl mt-5">System Integration:</h2>
                <ul className="list-disc pl-5">
                    <li><strong>CourtListener:</strong> Offers free legal opinions and research materials.</li>
                    <li><strong>LIMBS (Legal Information Management &amp; Briefing System):</strong> Provides real-time access to the Indian judiciary&apos;s case data.</li>
                    <li><strong>ICJS (Interoperable Criminal Justice System):</strong> Facilitates seamless data transfer between police, courts, jails, and forensic institutions.</li>
                    <li><strong>E-Court:</strong> Digital court management for easier access to legal documents and case status.</li>
                </ul>

                <h1 className="text-2xl mt-5 mb-2">Scalable and Adaptive</h1>
                <p>The Indian judiciary handles a large caseload. A cloud-based infrastructure allows the system to scale efficiently, growing as needed.</p>
                <p><strong>Future Reforms:</strong> The system is designed to accommodate future legal reforms, making it adaptive.</p>

                <h1 className="text-2xl mt-5 mb-2">Legal Framework Compliance</h1>
                <p>The system is designed to comply with Indian judicial regulations, ensuring secure handling of sensitive data using encryption and tokenization.</p>
                <p><strong>Cloud Infrastructure:</strong> Uses secure platforms like Google Cloud and implements security protocols like HTTPS and SSH, which are in line with India&apos;s legal data security standards.</p>

                <h1 className="text-2xl mt-5 mb-2">Cost Efficiency &amp; Access to Justice</h1>
                <p>The system enhances access to justice for underprivileged sections of society by streamlining the bail process.</p>
                <p><strong>Remote Case Handling:</strong> It aids rural areas with limited access to physical courts, facilitating more transparent bail processes.</p>
                <p><strong>Automation Benefits:</strong> Automating routine tasks like tracking bail applications can reduce errors, improve the efficiency of judicial processes, and minimize manpower costs.</p>
            </div>
        </div>
    );
}

export default Slide3;
