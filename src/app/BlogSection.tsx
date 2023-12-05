import React from "react";
import Link from "next/link";
import parse from "html-react-parser";
import Image from "next/image";

type AdditionalParam = {
    banner_title: string;
    banner_description: string;
    title: {};
    title_h2: string;
    body: string;
    date: string;
};

type Article = {
    href: string;
    title: string;
    $: AdditionalParam;
};

type FeaturedBlog = {
    title: string;
    featured_image: any;
    body: string;
    url: string;
    $: AdditionalParam;
};

type FeaturedBlogData = {
    title_h2: string;
    view_articles: Article;
    featured_blogs: [FeaturedBlog];
    $: AdditionalParam;
};

type FeaturedBlogProps = {
    fromBlog: FeaturedBlogData;
};

export default function BlogSection(props: FeaturedBlogProps) {
    const fromBlog = props.fromBlog;

    return (
        <div className="community-section text-center">
            <div className="community-head  p-5 flex justify-evenly flex-wrap">
                {fromBlog.title_h2 && (
                    <h2 {...(fromBlog.$?.title_h2 as {})}>
                        {fromBlog.title_h2}
                    </h2>
                )}
                {fromBlog.view_articles && (
                    <Link
                        href={fromBlog.view_articles.href}
                        className="btn secondary-btn article-btn"
                        {...fromBlog.view_articles.$?.title}>
                        {fromBlog.view_articles.title}
                    </Link>
                )}
            </div>
            <div className="home-featured-blogs flex p-5 justify-center text-left flex-wrap">
                {fromBlog.featured_blogs.map((blog, index) => (
                    <div
                        className="featured-blog  w-[32rem] border-[1px] border-[#f7f5f5] border-solid  flex justify-between flex-wrap my-1 mx-8"
                        key={index}>
                        {blog.featured_image && (
                            <Image
                                {...(blog.featured_image.$?.url as {})}
                                src={blog.featured_image.url}
                                alt={blog.featured_image.filename}
                                className="blog-post-img w-[32rem] h-[17rem]"
                                height={40}
                                width={40}
                            />
                        )}
                        <div className="featured-content p-4 ">
                            {blog.title && (
                                <h3 {...blog.$?.title}>{blog.title}</h3>
                            )}
                            {typeof blog.body === "string" && (
                                <div className="my-4 ">
                                    {parse(blog.body.slice(0, 300))}
                                </div>
                            )}
                            {blog.url && (
                                <Link
                                    href={blog.url}
                                    passHref
                                    className="blogpost-readmore text-[#715cdd]">
                                    {"Read More -->"}
                                </Link>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
