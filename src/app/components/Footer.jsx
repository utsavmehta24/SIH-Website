import React from 'react';
import Image from 'next/image';  // Importing the Image component

const Footer = () => {
    return (
        <div className="w-full bg-white">
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
                <div className="text-center pb-12">
                    <h2 className="text-base font-bold text-indigo-600">
                        Providing Equality Through Technology.
                    </h2>
                    <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-800">
                        Check our awesome team members
                    </h1>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="w-full bg-gray-100 rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row border border-gray-800">
                        <div className="w-full md:w-2/5 h-80">
                            {/* Replacing <img> with <Image /> */}
                            <Image
                                className="object-center object-cover w-full h-full"
                                src="https://media.licdn.com/dms/image/v2/D5603AQFROfH5oc35Wg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1725718450273?e=1732752000&v=beta&t=mqSzQYd8HLsNcLNtkPVHEG_zdS2bGIKHzkGP06xzfNc" 
                                alt="photo" 
                                width={400} 
                                height={400} 
                            />
                        </div>
                        <div className="w-full md:w-3/5 text-left p-4 md:p-4 space-y-2">
                            <p className="text-xl text-gray-800 font-bold">Utsav Mehta</p>
                            <p className="text-base text-gray-600 font-normal">Live life to the fullest</p>
                            <p className="text-base leading-relaxed text-gray-500 font-normal">
                                Full Stack Developer | Aspiring Data Scientist & Software Project Manager | Expert in Building End-to-End Web Solutions | Proficient in Python, SQL, APIs, Frontend & Backend | AI & Finance Enthusiast
                            </p>
                            <div className="flex justify-start space-x-2">
                                <a target="_blank" href="https://www.facebook.com/utsav.mehta.566148" className="text-gray-600 hover:text-gray-800">
                                    {/* SVG icons remain unchanged */}
                                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                                    </svg>
                                </a>
                                <a target="_blank" href="https://www.instagram.com/lucid24by7.io?igsh=MWJmZXp6dThuYTRjbw==" className="text-gray-600 hover:text-gray-800">
                                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Repeat similar blocks for other team members */}

                </div>
            </section>
        </div>
    );
}

export default Footer;


{/* <img src="./EquaTechInnovators.jpg" className="border border-black p-2 mt-5 rounded " alt="EquaTechInnovators" /> */}