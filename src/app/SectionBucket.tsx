import React from "react";
import Link from "next/link";
import parse from "html-react-parser";
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

type Buckets = {
    title_h3: string;
    description: string;
    call_to_action: Action;
    icon: any;
    $: AdditionalParam;
};

export type BucketProps = {
    title_h2: string;
    description: string;
    buckets: [Buckets];
    $: AdditionalParam;
};

export default function SectionBucket({ section }: { section: BucketProps }) {
    return (
        <div
            data-testid="member-main-section"
            className=" bg-[#f7f7f7] m-auto p-[2rem]">
            <div className="member-head text-center">
                {section.title_h2 && (
                    <h2 {...(section.$?.title_h2 as {})}>{section.title_h2}</h2>
                )}
                {section.description && (
                    <p {...(section.$?.description as {})}>
                        {section.description}
                    </p>
                )}
            </div>
            <div
                data-testid="member-section"
                className="text-center p-8 mt-12 flex justify-evenly flex-wrap ">
                {section.buckets?.map((bucket, index) => (
                    <div className="content-section max-w-[22rem]" key={index}>
                        {bucket.icon && (
                            //not reflected
                            <Image
                                {...(bucket.icon.$?.url as {})}
                                src={bucket.icon.url}
                                alt="bucket icon"
                                height={40}
                                width={40}
                                className="flex items-center"
                            />
                        )}

                        {bucket.title_h3 ? (
                            <h3 {...(bucket.$?.title_h3 as {})}>
                                {bucket.title_h3}
                            </h3>
                        ) : (
                            ""
                        )}
                        {typeof bucket.description === "string" && (
                            <div
                                className="mt-4 mb-4"
                                {...(bucket.$?.description as {})}>
                                {parse(bucket.description)}
                            </div>
                        )}
                        {bucket.call_to_action.title ? (
                            <Link
                            //not reflected
                                className=" font-semibold test-[#715cdd]-100"
                                href={
                                    bucket.call_to_action.href
                                        ? bucket.call_to_action.href
                                        : "#"
                                }
                                legacyBehavior>
                                {`${bucket.call_to_action.title} -->`}
                            </Link>
                        ) : (
                            ""
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
