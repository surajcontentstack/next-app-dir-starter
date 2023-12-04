import React from "react";
import { getPageRes } from "../helper";
import { HeroBanner } from "./HeroBanner";

export default async function Home() {
    const data = await getPageRes("/about-us");

    return (
        <main>
            <HeroBanner />
            Page content goes here
        </main>
    );
}
