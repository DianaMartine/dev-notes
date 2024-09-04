'use client';
import { forwardRef } from "react";
import { GlobalProps } from "../types";
import { Heading } from "../typo/heading/heading";
import React from "react";
import Link from "next/link";
import clsx from "clsx";

export const Header = forwardRef<HTMLDivElement, GlobalProps>((props, ref) => {
    const [isOpen, setIsOpen] = React.useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="p-2 gap-2 flex bg-[#202020]" ref={ref}>
            <section className="left flex items-center align-center">
                <div className="flex flex-col">
                    <Heading level={1} textColor="white">
                        Dicionário
                    </Heading>
                    <span className="text-red-500 text-4xl">
                        Dev
                    </span>
                </div>
            </section>
            <button className="fixed flex flex-col right-2 items-center align-center gap-2" onClick={toggleMenu}>
                    <span>
                        {!isOpen && (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        )}
                    </span>
            </button>
            {isOpen && (
                <section id="drawer" className="fixed h-[100vh] w-[100vw] bg-[#202020] z-50">
                    <button className="fixed flex flex-col right-2 items-center align-center gap-2" onClick={toggleMenu}>
                        <span>
                            {isOpen && (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </span>
                    </button>
                    <nav className="flex flex-col items-center justify-center h-[100vh] gap-4">
                        <ul className="flex flex-col items-center gap-4">
                            <li className="text-white">
                                <Link href="/" onClick={() => setIsOpen(false)}>
                                    Home
                                </Link>
                            </li>
                            <li className="text-white">
                                <Link href="/about" onClick={() => setIsOpen(false)}>
                                    About
                                </Link>
                            </li>
                            <li className="text-white">
                                <Link href="/contact" onClick={() => setIsOpen(false)}>
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </section>
            )}
        </header>
    );
}) as React.ForwardRefExoticComponent<GlobalProps & React.RefAttributes<HTMLDivElement>>;