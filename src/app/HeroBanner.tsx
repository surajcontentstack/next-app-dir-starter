import React from "react";
import Image from "next/image";

export const HeroBanner = () => {
    return (
        <div className="hero-banner flex justify-evenly text-center bg-[#715cdd] p-16 text-white max-h-min  pt-10">
            {/* Hero Content */}
            <div
                data-testid="home-content"
                className="home-content text-left mt-28 w-1/3 max-w-[20rem]">
                <h1
                    data-testid="hero-title"
                    className="hero-title text-4xl leading-[3rem] font-semibold my-6">
                    Create A Winning Digital Strategy For Your Business
                </h1>
                <p
                    data-testid="hero-description"
                    className="hero-description text-lg mb-8">
                    We help you create an agile digital strategy that helps you
                    stand out and win customers. Nothing less.
                </p>
                <a href="/" className="btn tertiary-btn">
                    Read more
                </a>
            </div>

            {/* Hero Image */}
            <Image
                src="https://images.contentstack.io/v3/assets/blt3f2ad18c8465b7b5/blt48ab0a3669ce4d9f/6297058db8283d0737f792c2/winning-digital-strategy.svg"
                alt="winning-digital-strategy.svg"
                className="w-[540px] h-[420px] "
                width={10}
                height={10}
            />
        </div>
    );
};
