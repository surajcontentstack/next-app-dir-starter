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
            <div className="home-content" key={key}>
                {section.title_h2 && (
                    <h2 {...(section.$?.title_h2 as {})}>{section.title_h2}</h2>
                )}
                {section.description && (
                    <p {...(section.$?.description as {})}>
                        {section.description}
                    </p>
                )}
                {section.call_to_action.title && section.call_to_action.href ? (
                    <Link
                        href={section.call_to_action.href}
                        className="btn secondary-btn"
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
            />
        );
    }
    return (
        <div className="home-advisor-section">
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
