import React from "react";
import Link from "next/link";
import { Action } from "../typescript/action";
import Image from "next/image";

type AdditionalParam = {
    title: string;
    title_h2: string;
    title_h3: string;
    description: string;
    html_code: string;
    designation: string;
    name: string;
};

type SectionProps = {
    title_h2: String;
    description: string;
    call_to_action: Action;
    image: any;
    image_alignment: string;
    $: AdditionalParam;
};

export default function Section({ section }: { section: SectionProps }) {
    function contentSection(key: any) {
        return (
            <div
                data-testid="home-content"
                className=" text-left mt-16 w-[30rem]"
                key={key}>
                {section.title_h2 && (
                    //not reflected
                    <h2
                        className="text-28 leading-34"
                        {...(section.$?.title_h2 as {})}>
                        {section.title_h2}
                    </h2>
                )}
                {section.description && (
                    //not reflected
                    <p className="" {...(section.$?.description as {})}>
                        {section.description}
                    </p>
                )}
                {section.call_to_action.title && section.call_to_action.href ? (
                    //not reflected
                    <Link
                        className="btn secondary-bt border-2 border-[#715cdd] mt-8"
                        href={section.call_to_action.href}
                        {...section.call_to_action.$?.title}>
                        {section.call_to_action.title}
                    </Link>
                ) : (
                    ""
                )}
            </div>
        );
    }

    function imageContent(key: any) {
        return (
            <Image
                {...(section.image.$?.url as {})}
                src={section.image.url}
                alt={section.image.filename}
                key={key}
                width={10}
                height={10}
                className="w-[540px] h-[420px]"
            />
        );
    }
    return (
        <div
            data-testid="home-advisor-section"
            className="bg-white m-16 p-8 flex justify-evenly text-center flex-wrap">
            {section.image_alignment === "Left"
                ? [
                      imageContent("key-image"),
                      contentSection("key-contentstection"),
                  ]
                : [
                      contentSection("key-contentstection"),
                      imageContent("key-image"),
                  ]}
        </div>
    );
}
