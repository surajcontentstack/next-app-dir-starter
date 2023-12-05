import React, { useEffect, useState } from "react";
import moment from "moment";
import parse from "html-react-parser";
import Skeleton from "react-loading-skeleton";
import { BlogPosts, Page, PageUrl } from "@/typescript/pages";
import { getBlogPostRes, getPageRes } from "@/helper";
import RenderComponents from "@/app/RenderComponents";
import ArchiveRelative from "@/app/ArchiveRelative";

export default async function BlogPost({
    blogPost,
    page,
    pageUrl,
}: {
    blogPost: BlogPosts;
    page: Page;
    pageUrl: PageUrl;
}) {
    const postsResponse = await getBlogPostRes(pageUrl);
    const bannerResponse = await getPageRes("/blog");

    console.log("postsResponse", postsResponse);
    console.log("bannerResponse", bannerResponse);

    // const [getPost, setPost] = useState({ banner: page, post: blogPost });
    // async function fetchData() {
    //     try {
    //         const entryRes = await getBlogPostRes(pageUrl);
    //         const bannerRes = await getPageRes("/blog");
    //         if (!entryRes || !bannerRes) throw new Error("Status: " + 404);
    //         setPost({ banner: bannerRes, post: entryRes });
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }

    // useEffect(() => {
    //     onEntryChange(() => fetchData());
    // }, [blogPost]);

    // const { postsResponse, banner } = getPost;
    return (
        <>
            {bannerResponse ? (
                <RenderComponents
                    pageComponents={bannerResponse.page_components}
                    blogPost
                    contentTypeUid="blog_post"
                    entryUid={bannerResponse?.uid}
                    locale={bannerResponse?.locale}
                />
            ) : (
                <Skeleton height={400} />
            )}
            <div className="blog-container">
                <article className="blog-detail">
                    {postsResponse && postsResponse.title ? (
                        <h2 {...(postsResponse.$?.title as {})}>
                            {postsResponse.title}
                        </h2>
                    ) : (
                        <h2>
                            <Skeleton />
                        </h2>
                    )}
                    {postsResponse && postsResponse.date ? (
                        <p {...(postsResponse.$?.date as {})}>
                            {moment(postsResponse.date).format(
                                "ddd, MMM D YYYY"
                            )}
                            ,{" "}
                            <strong
                                {...(postsResponse.author[0].$?.title as {})}>
                                {postsResponse.author[0].title}
                            </strong>
                        </p>
                    ) : (
                        <p>
                            <Skeleton width={300} />
                        </p>
                    )}
                    {postsResponse && postsResponse.body ? (
                        <div {...(postsResponse.$?.body as {})}>
                            {parse(postsResponse.body)}
                        </div>
                    ) : (
                        <Skeleton height={800} width={600} />
                    )}
                </article>
                <div className="blog-column-right">
                    <div className="related-post">
                        {bannerResponse &&
                        bannerResponse?.page_components[2].widget ? (
                            <h2
                                {...(bannerResponse?.page_components[2].widget.$
                                    ?.title_h2 as {})}>
                                {
                                    bannerResponse?.page_components[2].widget
                                        .title_h2
                                }
                            </h2>
                        ) : (
                            <h2>
                                <Skeleton />
                            </h2>
                        )}
                        {postsResponse && postsResponse.related_post ? (
                            <ArchiveRelative
                                {...postsResponse.$?.related_post}
                                blogs={postsResponse.related_post}
                            />
                        ) : (
                            <Skeleton width={300} height={500} />
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
