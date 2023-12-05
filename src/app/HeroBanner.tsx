import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Action } from "../typescript/action";

type AdditionalParam = {
    banner_title: string;
    banner_description: string;
};

type Banner = {
    bg_color: string;
    text_color: string;
    banner_title: string;
    banner_description: string;
    call_to_action: Action;
    banner_image: any;
    $: AdditionalParam;
};

type BannerProps = {
    banner: Banner;
};

export default function HeroBanner(props: BannerProps) {
    const banner = props.banner;

    return (
        <div
            data-testid="hero-banner"
            className="hero-banner flex justify-evenly text-center bg-[#715cdd] p-12 text-white max-h-min"
            style={{
                background: banner?.bg_color ? banner.bg_color : "",
            }}>
            <div
                data-testid="home-content"
                className="home-content home-content text-left mt-12 w-1/3 max-w-[30rem] pt-5"
                style={{
                    color: banner?.text_color ? banner.text_color : "#000",
                }}>
                {banner.banner_title && (
                    <h1
                        data-testid="hero-title"
                        className="hero-title hero-title text-4xl leading-[3rem] font-semibold my-6"
                        {...(banner.$?.banner_title as {})}>
                        {banner.banner_title}
                    </h1>
                )}
                {banner.banner_description ? (
                    <p
                        data-testid="hero-description"
                        className="hero-description text-lg mb-8"
                        style={{
                            color: banner?.text_color
                                ? banner.text_color
                                : "#222",
                        }}
                        {...(banner.$?.banner_description as {})}>
                        {banner?.banner_description}
                    </p>
                ) : (
                    ""
                )}
                {banner.call_to_action.title && banner.call_to_action.href ? (
                    <Link
                        data-testid="btn tertiary-btn"
                        href={banner?.call_to_action.href}
                        className="btn tertiary-btn"
                        {...banner.call_to_action.$?.title}>
                        {banner?.call_to_action.title}
                    </Link>
                ) : (
                    ""
                )}
            </div>
            {banner.banner_image ? (
                <Image
                    alt={banner.banner_image.filename}
                    src={banner.banner_image.url}
                    {...(banner.banner_image.$?.url as {})}
                    className="w-[540px] h-[420px] "
                    width={10}
                    height={10}
                />
            ) : (
                ""
            )}
        </div>
    );
}
