import { getPageRes } from "@/healper";
import { HeroBanner } from "./components/HeroBanner";

export default async function Home() {
    const data = await getPageRes("/about-us");

    return (
        <main>
            <HeroBanner />
            Page content goes here
        </main>
    );
}
