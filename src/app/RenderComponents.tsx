import React from "react";
import HeroBanner from "./HeroBanner";
import { RenderProps } from "../typescript/component";
import BlogBanner from "./BlogBanner";
import Section from "./Section";
import AboutSectionBucket from "./AboutSectionBucket";
import SectionBucket from "./SectionBucket";
import BlogSection from "./BlogSection";
import CardSection from "./CardSection";
import TeamSection from "./TeamSection";
import SectionWithHtmlCode from "./SectionWithHtmlCode";

export default function RenderComponents(props: RenderProps) {
    const { pageComponents, blogPost, entryUid, contentTypeUid, locale } =
        props;

    // console.log(pageComponents);

    return (
        <div
            data-pageref={entryUid}
            data-contenttype={contentTypeUid}
            data-locale={locale}>
            {pageComponents?.map((component, key: number) => {
                if (component.hero_banner) {
                    console.log("component.hero_banner");

                    return blogPost ? (
                        <BlogBanner
                            blogBanner={component.hero_banner}
                            key={`component-${key}`}
                        />
                    ) : (
                        <HeroBanner
                            banner={component.hero_banner}
                            key={`component-${key}`}
                        />
                    );
                }
                if (component.section) {
                    console.log("component.section");

                    return (
                        <Section
                            section={component.section}
                            key={`component-${key}`}
                        />
                    );
                }
                if (component.section_with_buckets) {
                    console.log("component.section_with_buckets");

                    return component.section_with_buckets.bucket_tabular ? (
                        <AboutSectionBucket
                            sectionWithBuckets={component.section_with_buckets}
                            key={`component-${key}`}
                        />
                    ) : (
                        <SectionBucket
                            section={component.section_with_buckets}
                            key={`component-${key}`}
                        />
                    );
                }
                if (component.from_blog) {
                    console.log("component.from_blog");

                    return (
                        <BlogSection
                            fromBlog={component.from_blog}
                            key={`component-${key}`}
                        />
                    );
                }
                if (component.section_with_cards) {
                    console.log("component.section_with_cards");

                    return (
                        <CardSection
                            cards={component.section_with_cards.cards}
                            key={`component-${key}`}
                        />
                    );
                }
                if (component.section_with_html_code) {
                    console.log("component.section_with_html_code");

                    return (
                        <SectionWithHtmlCode
                            embedCode={component.section_with_html_code}
                            key={`component-${key}`}
                        />
                    );
                }
                if (component.our_team) {
                    console.log("component.our_team");

                    return (
                        <TeamSection
                            ourTeam={component.our_team}
                            key={`component-${key}`}
                        />
                    );
                }
            })}
        </div>
    );
}
