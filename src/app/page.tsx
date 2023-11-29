import { HeroBanner } from "./components/HeroBanner";

export default async function Home() {
    // const { data, error } = await getEntryByUrl('/');
    return (
        <main>
            <HeroBanner />
            Page content goes here
        </main>
    );
}
