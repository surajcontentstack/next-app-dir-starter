import Image from "next/image";
import React from "react";

type AdditionalParam = {
    title: string;
    title_h2: string;
    title_h3: string;
    description: string;
    html_code: string;
    designation: string;
    name: string;
};

type Employee = {
    image: any;
    name: string;
    designation: string;
    $: AdditionalParam;
};

type TeamProps = {
    title_h2: string;
    description: string;
    $: AdditionalParam;
    employees: [Employee];
};

export default function TeamSection({ ourTeam }: { ourTeam: TeamProps }) {
    return (
        <div className="about-team-section  bg-[#f7f7f7] text-center">
            <div className="team-head-section pt-16 w-auto max-w-[920px] m-auto">
                {ourTeam.title_h2 && (
                    <h2 {...(ourTeam.$?.title_h2 as {})}>{ourTeam.title_h2}</h2>
                )}
                {ourTeam.description ? (
                    <p {...(ourTeam.$?.description as {})}>
                        {ourTeam.description}
                    </p>
                ) : (
                    ""
                )}
            </div>
            <div className="team-content flex justify-center text-center pt-9 m-1 flex-wrap">
                {ourTeam.employees?.map((employee, index) => (
                    <div className="team-details px-4 py-0" key={index}>
                        {employee.image && (
                            <Image
                                alt={employee.image.filename}
                                src={employee.image.url}
                                {...(employee.image.$?.url as {})}
                                height={360}
                                width={280}
                            />
                        )}
                        <div className="team-details pt-1">
                            {employee.name && (
                                <h3 {...(employee.$?.name as {})}>
                                    {employee.name}
                                </h3>
                            )}
                            {employee.designation && (
                                <p {...(employee.$?.designation as {})}>
                                    {employee.designation}
                                </p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
