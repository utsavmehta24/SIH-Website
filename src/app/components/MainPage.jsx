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
                                <p className="text-base text-black font-normal">Problem & Solution</p>
                                <p className="text-base leading-relaxed text-black font-normal">
                                    Write a brief about the problem in about 50 words.
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

            <Link href="/SolutionUserFlow">
                <div className="slide1">
                    <div className="w-full bg-white p-4">
                        <div className="flex flex-wrap sm:flex-no-wrap items-center justify-between w-full border border-gray-500 rounded-lg">
                            <div className="w-full sm:w-1/3 h-64 bg-green-700 rounded-tl-lg rounded-bl-lg overflow-hidden">
                                <Image src="/IntroAndUserFlow.jpg" alt="slide1" width={500} height={300} className="w-full h-full object-cover" />
                            </div>
                            <div className="w-full sm:w-2/3 h-64 bg-white rounded-tr-lg rounded-br-lg p-4 relative">
                                <p className="text-xl text-gray-800 font-bold">User Flow</p>
                                <p className="text-base text-black font-normal">Problem & Solution</p>
                                <p className="text-base leading-relaxed text-black font-normal">
                                    Write a brief about the problem in about 50 words.
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
                                <p className="text-base text-black font-normal">Problem & Solution</p>
                                <p className="text-base leading-relaxed text-black font-normal">
                                    Write a brief about the problem in about 50 words.
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
                                <p className="text-xl text-gray-800 font-bold">Feasiblity and Viability</p>
                                <p className="text-base text-black font-normal">Problem & Solution</p>
                                <p className="text-base leading-relaxed text-black font-normal">
                                    Write a brief about the problem in about 50 words.
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
                                <p className="text-base text-black font-normal">Problem & Solution</p>
                                <p className="text-base leading-relaxed text-black font-normal">
                                    Write a brief about the problem in about 50 words.
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
                                <p className="text-base text-black font-normal">Problem & Solution</p>
                                <p className="text-base leading-relaxed text-black font-normal">
                                    Write a brief about the problem in about 50 words.
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
