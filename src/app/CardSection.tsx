import React from "react";
import Link from "next/link";
import { Action } from "../typescript/action";

type AdditionalParam = {
    title_h3: string;
    description: string;
};

type Card = {
    title_h3: string;
    description: string;
    call_to_action: Action;
    $: AdditionalParam;
};

type CardProps = {
    cards: [Card];
};

export default function CardSection({ cards }: CardProps) {
    return (
        <div className="demo-section flex justify-center bg-[#f7f7f7] p-16  flex-wrap">
            {cards?.map((card, index) => (
                <div
                    className="cards w-[25.65rem] bg-[#fff] border-[1px] border-radius-[5px] p-8 ml-6 flex flex-col"
                    key={index}>
                    {card.title_h3 && (
                        <h3 {...(card.$?.title_h3 as {})}>{card.title_h3}</h3>
                    )}
                    {card.description && (
                        <p {...(card.$?.description as {})}>
                            {card.description}
                        </p>
                    )}
                    <div className="card-cta">
                        {card.call_to_action.title &&
                            card.call_to_action.href && (
                                <Link
                                    href={card.call_to_action.href}
                                    //btn not reflected
                                    className="btn primary-btn">
                                    {card.call_to_action.title}
                                </Link>
                            )}
                    </div>
                </div>
            ))}
        </div>
    );
}
