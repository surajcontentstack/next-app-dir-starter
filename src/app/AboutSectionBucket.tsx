import React from "react";
import parse from "html-react-parser";
import { Action } from "../typescript/action";
import Image from "next/image";

type AdditionalParam = {
    title_h2?: string;
    title_h3?: string;
    description?: string;
};

type Bucket = {
    title_h3: string;
    description: string;
    icon: any;
    $: AdditionalParam;
    url: string;
};

type BucketsList = {
    title_h3: string;
    description: string;
    url: string;
    call_to_action: Action;
    icon: any;
    $: AdditionalParam;
};

type BucketProps = {
    title_h2: string;
    buckets: [BucketsList];
    $: AdditionalParam;
};

export default function AboutSectionBucket({
    sectionWithBuckets,
}: {
    sectionWithBuckets: BucketProps;
}) {
    function bucketContent(bucket: Bucket, index: number) {
        return (
            <div
                className="mission-content-section flex w-[23.5rem] sm:w-[19.5rem] sm:inline-block sm:text-center md:text-center md:w-auto md:p-[1.25rem]"
                key={index}>
                {bucket.icon && (
                    <Image
                        className="mission-icon inline-block h-12 mt-3 pr-8 sm:mt-3 sm:inline-block sm:p-0 md:p-0"
                        {...(bucket.icon.$?.url as {})}
                        src={bucket.icon.url}
                        alt="art work"
                        height={50}
                        width={50}
                    />
                )}

                <div className="mission-section-content inline-block">
                    {bucket.title_h3 && (
                        <h3 {...(bucket.$?.title_h3 as {})}>
                            {bucket.title_h3}
                        </h3>
                    )}
                    {typeof bucket.description === "string" && (
                        <div {...(bucket.$?.description as {})}>
                            {" "}
                            {parse(bucket.description)}
                        </div>
                    )}
                </div>
            </div>
        );
    }

    return (
        <div className="member-main-section bg-[#f7f7f7] m-auto p-[2rem]">
            <div className="member-head text-center">
                {sectionWithBuckets.title_h2 && (
                    <h2 {...(sectionWithBuckets.$?.title_h2 as {})}>
                        {sectionWithBuckets.title_h2}
                    </h2>
                )}
            </div>
            <div className="mission-section">
                <div className="mission-content-top flex justify-evenly text-left sm:flex sm:justify-evenly sm:text-left sm:flex-wrap">
                    {sectionWithBuckets?.buckets.map(
                        (bucket, index) =>
                            index < 2 && bucketContent(bucket, index)
                    )}
                </div>
                <div className="mission-content-bottom flex justify-evenly text-left sm:flex sm:justify-evenly sm:text-left sm:flex-wrap">
                    {sectionWithBuckets.buckets.map(
                        (bucket, index) =>
                            index >= 2 && bucketContent(bucket, index)
                    )}
                </div>
            </div>
        </div>
    );
}
