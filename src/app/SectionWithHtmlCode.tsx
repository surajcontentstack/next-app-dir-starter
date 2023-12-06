import React from "react";
import parse from "html-react-parser";

type AdditionalParam = {
    title: string;
    title_h2: string;
    title_h3: string;
    description: string;
    html_code: string;
    designation: string;
    name: string;
};

type ObjectProps = {
    html_code_alignment: string;
    title: string;
    description: string;
    html_code: string;
    $: AdditionalParam;
};

export default function SectionWithHtmlCode({
    embedCode,
}: {
    embedCode: ObjectProps;
}) {
    if (embedCode.html_code_alignment === "Left") {
        return (
            <div className="contact-page-section max-width flex justify-center flex-no-wrap p-11 w-[90%] my-0 mx-auto max-w-[80rem]">
                <div className="contact-page-content w-[50%] pt-3.5 pr-20">
                    {embedCode.title && (
                        <h1 className="my-8" {...(embedCode.$?.title as {})}>
                            {embedCode.title}
                        </h1>
                    )}
                    {typeof embedCode.description === "string" && (
                        <div {...(embedCode.$?.description as {})}>
                            {parse(embedCode.description)}
                        </div>
                    )}
                </div>
                <div className="contact-page-form w-[50%]">
                    {typeof embedCode.html_code === "string" && (
                        <div {...(embedCode.$?.html_code as {})}>
                            {parse(embedCode.html_code)}
                        </div>
                    )}
                </div>
            </div>
        );
    }
    return (
        <div className="contact-maps-section max-width flex justify-center flex-no-wrap p-11 w-[90%] my-0 mx-auto max-w-[80rem]">
            <div className="maps-details w-[50%] p-4">
                {typeof embedCode.html_code === "string" && (
                    <div
                        className="w-[540px] h-[300px]"
                        {...(embedCode.$?.html_code as {})}>
                        {parse(embedCode.html_code)}
                    </div>
                )}
            </div>
            <div className="contact-maps-content w-[50%] mt-18">
                {embedCode.title ? <h2>{embedCode.title}</h2> : ""}
                {typeof embedCode.description === "string" && (
                    <div {...(embedCode.$?.description as {})}>
                        {parse(embedCode.description)}
                    </div>
                )}
            </div>
        </div>
    );
}
