import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

const MainPage = () => {

    return (
        <>
            <Link href="/intro">
                <div className="slide1">
                    <div className="w-full bg-white p-4">
                        <div className="flex flex-wrap sm:flex-no-wrap items-center justify-between w-full border border-gray-500 rounded-lg">
                            <div className="w-full sm:w-1/3 h-64 bg-green-700 rounded-tl-lg rounded-bl-lg overflow-hidden">
                                <Image src="/IntroSlide.jpg" alt="slide1" width={500} height={300} className="w-full h-full object-cover" />
                            </div>
                            <div className="w-full sm:w-2/3 h-64 bg-white rounded-tr-lg rounded-br-lg p-4 relative">
                                <p className="text-xl text-gray-800 font-bold">Introductory Slide and User Flow</p>
                                <p className="py-2 text-base text-blue-700 font-bold">EquaTech Innovators aims to leverage technology to solve societal issues, focusing on innovative solutions for a more equitable future.
                                </p>
                                <p className="text-base leading-relaxed text-black font-normal">
                                    EquaTech Innovator&apos;s introduction page highlights their mission to develop tech solutions addressing societal issues.The platform fosters innovation by combining technology with real-world applications. Their expertise spans AI, finance, web development, and more, contributing to creating a more equitable society through their projects. The team focuses on problem-solving and forward-thinking approaches.
                                </p>
                                <Image
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQzJwEWX_dApGOwOmyzlDXKt6iw7utAb3FSg&s="
                                    alt="arrow"
                                    width={32}
                                    height={32}
                                    className="absolute bottom-4 right-4"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Link >

            <Link href="/SolutionUserFlow">
                <div className="slide1">
                    <div className="w-full bg-white p-4">
                        <div className="flex flex-wrap sm:flex-no-wrap items-center justify-between w-full border border-gray-500 rounded-lg">
                            <div className="w-full sm:w-1/3 h-64 bg-green-700 rounded-tl-lg rounded-bl-lg overflow-hidden">
                                <Image src="/IntroAndUserFlow.jpg" alt="slide1" width={500} height={300} className="w-full h-full object-cover" />
                            </div>
                            <div className="w-full sm:w-2/3 h-64 bg-white rounded-tr-lg rounded-br-lg p-4 relative">
                                <p className="text-xl text-gray-800 font-bold">User Flow</p>
                                <p className="py-2 text-base text-blue-700 font-bold">The platform addresses traditional bail process challenges, highlighting inefficiencies and the need for a streamlined, tech-driven approach.</p>
                                <p className="text-base leading-relaxed text-black font-normal">
                                    The Solution User Flow page outlines challenges in the traditional bail process, such as inefficiencies, delays, and complexities faced by undertrial prisoners, judicial authorities, and police. It explains how these issues contribute to case backlogs and prison overcrowding, while highlighting the need for a more streamlined, technology-driven system to improve coordination and reduce delays.
                                </p>
                                <Image
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQzJwEWX_dApGOwOmyzlDXKt6iw7utAb3FSg&s="
                                    alt="arrow"
                                    width={32}
                                    height={32}
                                    className="absolute bottom-4 right-4"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Link>

            <Link href="/TechnicalApproach">
                <div className="slide1">
                    <div className="w-full bg-white p-4">
                        <div className="flex flex-wrap sm:flex-no-wrap items-center justify-between w-full border border-gray-500 rounded-lg">
                            <div className="w-full sm:w-1/3 h-64 bg-green-700 rounded-tl-lg rounded-bl-lg overflow-hidden">
                                <Image src="/TechincalApproach.jpg" alt="slide1" width={500} height={300} className="w-full h-full object-cover" />
                            </div>
                            <div className="w-full sm:w-2/3 h-64 bg-white rounded-tr-lg rounded-br-lg p-4 relative">
                                <p className="text-xl text-gray-800 font-bold">Technical Approach</p>
                                <p className="py-2 text-base text-blue-700 font-bold">EquaTech&apos;s technical framework prioritizes user-friendly design and robust backend processes to enhance efficiency and security in the bail system.</p>
                                <p className="text-base leading-relaxed text-black font-normal">
                                    The Technical Approach page explains the technological framework behind EquaTech&apos;s solution, focusing on frontend design for user interaction and backend processes to streamline operations.It emphasizes building a seamless interface while incorporating security measures and ensuring scalability. The approach aims to enhance efficiency in the bail process by automating tasks and improving data flow across all stakeholders.
                                </p>
                                <Image
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQzJwEWX_dApGOwOmyzlDXKt6iw7utAb3FSg&s="
                                    alt="arrow"
                                    width={32}
                                    height={32}
                                    className="absolute bottom-4 right-4"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Link>

            <Link href="/FeasibilityViability">
                <div className="slide1">
                    <div className="w-full bg-white p-4">
                        <div className="flex flex-wrap sm:flex-no-wrap items-center justify-between w-full border border-gray-500 rounded-lg">
                            <div className="w-full sm:w-1/3 h-64 bg-green-700 rounded-tl-lg rounded-bl-lg overflow-hidden">
                                <Image src="/FeasibilityViability.jpg" alt="slide1" width={500} height={300} className="w-full h-full object-cover" />
                            </div>
                            <div className="w-full sm:w-2/3 h-64 bg-white rounded-tr-lg rounded-br-lg p-4 relative">
                                <p className="text-xl text-gray-800 font-bold">Feasibility and Viability</p>
                                <p className="py-2 text-base text-blue-700 font-bold">
                                    The analysis confirms the practicality and sustainability of EquaTech&apos;s solution, emphasizing its potential to improve the judicial system.
                                </p>
                                <p className="text-base leading-relaxed text-black font-normal">
                                    The Feasibility and Viability page explores the practical implementation of EquaTech&apos;s solution, examining its potential impact on the judicial system. It assesses both technical and economic feasibility, emphasizing the efficiency and scalability of the model. The analysis demonstrates how their innovative approach can address real-world challenges while ensuring long-term sustainability and benefits for all stakeholders.
                                </p>
                                <Image
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQzJwEWX_dApGOwOmyzlDXKt6iw7utAb3FSg&s="
                                    alt="arrow"
                                    width={32}
                                    height={32}
                                    className="absolute bottom-4 right-4"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Link>

            <Link href="/ImpactBenefits">
                <div className="slide1">
                    <div className="w-full bg-white p-4">
                        <div className="flex flex-wrap sm:flex-no-wrap items-center justify-between w-full border border-gray-500 rounded-lg">
                            <div className="w-full sm:w-1/3 h-64 bg-green-700 rounded-tl-lg rounded-bl-lg overflow-hidden">
                                <Image src="/ImpactBenefits.jpg" alt="slide1" width={500} height={300} className="w-full h-full object-cover" />
                            </div>
                            <div className="w-full sm:w-2/3 h-64 bg-white rounded-tr-lg rounded-br-lg p-4 relative">
                                <p className="text-xl text-gray-800 font-bold">Impact And Benefits</p>
                                <p className="py-2 text-base text-blue-700 font-bold">EquaTech&apos;s solution aims to enhance judicial coordination, reduce delays, and create a more efficient, equitable justice system.</p>
                                <p className="text-base leading-relaxed text-black font-normal">
                                    The Impact and Benefits page outlines how EquaTech&apos;s solution will improve the bail process by enhancing coordination between judicial authorities and police, reducing delays, and easing case backlogs. The platform&apos;s efficiency-driven approach aims to reduce prison overcrowding, provide quicker justice, and ultimately create a more equitable judicial system through streamlined technology.
                                </p>
                                <Image
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQzJwEWX_dApGOwOmyzlDXKt6iw7utAb3FSg&s="
                                    alt="arrow"
                                    width={32}
                                    height={32}
                                    className="absolute bottom-4 right-4"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Link>

            <Link href="/ReserchReferences">
                <div className="slide1">
                    <div className="w-full bg-white p-4">
                        <div className="flex flex-wrap sm:flex-no-wrap items-center justify-between w-full border border-gray-500 rounded-lg">
                            <div className="w-full sm:w-1/3 h-64 bg-green-700 rounded-tl-lg rounded-bl-lg overflow-hidden">
                                <Image src="/ReserchReferences.jpg" alt="slide1" width={500} height={300} className="w-full h-full object-cover" />
                            </div>
                            <div className="w-full sm:w-2/3 h-64 bg-white rounded-tr-lg rounded-br-lg p-4 relative">
                                <p className="text-xl text-gray-800 font-bold">Reserch and References</p>
                                <p className="py-2 text-base text-blue-700 font-bold">This section presents essential studies and resources that support the development of EquaTech&apos;s technology-driven judicial solutions.</p>
                                <p className="text-base leading-relaxed text-black font-normal">
                                    The Research References page lists key studies and resources used to inform the development of EquaTech&apos;s solution. These references focus on judicial inefficiencies, prison overcrowding, and how technological interventions can streamline legal processes. It underscores the importance of data-driven research in building effective, scalable solutions that address critical issues within the criminal justice system.
                                </p>
                                <Image
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQzJwEWX_dApGOwOmyzlDXKt6iw7utAb3FSg&s="
                                    alt="arrow"
                                    width={32}
                                    height={32}
                                    className="absolute bottom-4 right-4"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    );
};

export default MainPage;
