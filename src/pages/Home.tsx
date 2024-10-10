"use client";

import { Link } from "react-router-dom";
import VisitorCounter from "./VisitorCounter.tsx";
import { useEffect, useRef } from "react";

export default function App() {
    const customDivRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (customDivRef.current) {
            const div = customDivRef.current;
            // Set the custom attributes
            div.setAttribute("animduration", "6111");
            div.setAttribute("ns", "https://ignou-datesheet.netlify.app");
            div.setAttribute("bg", "transparent");
            div.setAttribute("color", "rgb(60, 40, 25)");
            div.setAttribute("startnumber", "100");
            div.setAttribute("updatenumber", "1");
            div.setAttribute("action", "rate");
            div.setAttribute("key", "sitewide");
            div.setAttribute("nolink", "true");
        }
    }, []);

    return (
        <>
            <div className="flex h-1 justify-center md:justify-end px-8 max-w-full">
                <div 
                    className="counterapi"
                    style={{maxHeight:"44px"}}
                    ref={customDivRef}
                >
                    <VisitorCounter />
                </div>
            </div>
            
            <div className="bg-white max-h-[calc(100dvh-18.5rem)] pb-8 md:pb-8">
                <div className="relative px-6 isolate lg:px-8">
                    <div
                        aria-hidden="true"
                        className="absolute inset-x-0 overflow-hidden -top-40 -z-10 transform-gpu blur-3xl sm:-top-80"
                    >
                        <div
                            style={{
                                clipPath:
                                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                            }}
                            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                        />
                    </div>
                    <div className="max-w-2xl pt-32 mx-auto ">
                        <div className="text-center">
                            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                                Welcome to IGNOU Datesheet website
                            </h1>
                            <p className="mt-6 text-lg leading-8 text-gray-700">
                                This website was created for quickly referencing
                                IGNOU MCA Datesheet (Term-End exam) for personal
                                use. But you are welcome to use it too if you're
                                already here :)
                            </p>
                            <br />
                            <p className="mt-6 text-sm leading-8 text-gray-500">
                                * This is not an official IGNOU website. IGNOU
                                logos are property of IGNOU.
                            </p>
                            <div className="flex items-center justify-center mt-10 mb-20 sm:mb-0 gap-x-6">
                                <Link
                                    to="/datesheet"
                                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Get started
                                </Link>
                                {/* <a
                                    href="#"
                                    className="text-sm font-semibold leading-6 text-gray-900"
                                >
                                    Learn more <span aria-hidden="true">→</span>
                                </a> */}
                            </div>
                        </div>
                    </div>
                    <div
                        aria-hidden="true"
                        className="absolute inset-x-0 top-[calc(50%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                    >
                        <div
                            style={{
                                clipPath:
                                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                            }}
                            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
