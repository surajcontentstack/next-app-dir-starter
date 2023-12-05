import React from "react";
import Image from "next/image";

const socialLinks = [
    {
        href: "https://facebook.com",
        title: "Facebook",
        imgSrc: "/assets/facebook.svg",
    },
    {
        href: "https://twitter.com",
        title: "Twitter",
        imgSrc: "/assets/Twitter.svg",
    },
    {
        href: "https://www.instagram.com/",
        title: "Instagram",
        imgSrc: "/assets/Instagram.svg",
    },
];

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about-us", label: "About Us" },
    { href: "/blog", label: "Blog" },
    { href: "/contact-us", label: "Contact Us" },
];

export const Footer = () => {
    return (
        <footer className="mt-16 bg-white">
            <div
                data-testid="footer-div"
                className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap">
                <div className="w-full sm:w-1/4">
                    <a href="/" className="logo-tag">
                        <Image
                            src="/assets/logo.svg"
                            alt="Company Name"
                            title="Company Name"
                            className="logo footer-logo"
                            width={150}
                            height={50}
                        />
                    </a>
                </div>
                <div className="w-full sm:w-1/2 m-auto p-auto">
                    <nav>
                        <ul className="flex justify-center w-auto">
                            {navLinks.map((link) => (
                                <li key={link.label} className="mr-4">
                                    <a
                                        href={link.href}
                                        className="text-gray-800 hover:text-[#715cdd] transition duration-300">
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
                <div className="w-full sm:w-1/4 flex justify-end">
                    <div className="flex space-x-4">
                        {socialLinks.map((social) => (
                            <a
                                key={social.title}
                                href={social.href}
                                title={social.title}>
                                <Image
                                    src={social.imgSrc}
                                    alt={social.title}
                                    width={30}
                                    height={30}
                                />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
            <div className="py-2">
                <p className="text-center text-gray-600">
                    Copyright © 2023. LogoIpsum. All rights reserved.
                </p>
            </div>
        </footer>
    );
};
