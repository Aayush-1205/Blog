'use client'
import React, { useState } from 'react'
import VideoPlayer from './VideoPlayer'
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { allyDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import remarkGfm from "remark-gfm";
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

const BlogDescription = ({ blogsInfo }) => {
    // console.log(blogsInfo?.description[0]);

    const Code = ({ node, inline, className, children, ...props }) => {
        const match = /language-(\w+)/.exec(className || "");

        const [copied, setCopied] = useState();
        // copy code
        const copyCode = () => {
        };

        if (inline) {
            return <code>{children}</code>;
        } else if (match) {
            return (
                <div style={{ position: "relative" }}>
                    <SyntaxHighlighter
                        style={allyDark}
                        language={match[1]}
                        PreTag="pre"
                        {...props}
                        codeTagProps={{
                            style: {
                                padding: "0",
                                borderRadius: "5px",
                                overflowX: "auto",
                                whiteSpace: "pre-wrap",
                            },
                        }}
                    >
                        {String(children).replace(/\n$/, "")}
                    </SyntaxHighlighter>
                    <button
                        style={{
                            position: "absolute",
                            top: "0",
                            right: "0",
                            zIndex: "1",
                            background: "#3d3d3d",
                            color: "#fff",
                            padding: "10px",
                        }}
                        onClick={copyCode}
                    >
                        {copied ? "Copied" : "Copy code"}
                    </button>
                </div>
            );
        } else {
            return (
                <code className="md-post-code" {...props}>
                    {children}
                </code>
            );
        }
    };

    return (
        <div>
            <h2 className='text-[1.5rem] font-semibold'>{blogsInfo?.title}</h2>
            <p className='text-gray-500 text-[0.8rem]'>{blogsInfo?.subTitle}</p>

            {/* Video Player if the blog have one */}
            {blogsInfo?.videos[0]?.url && <VideoPlayer videoUrl={blogsInfo?.videos[0]?.url} />}

            {/* Description */}
            {/* <h2 className="mt-5 text-[1rem] font-semibold"></h2> */}

            <div>
                <ReactMarkdown
                    className='text-[0.8rem] font-medium leading-4 mt-2 prose prose-h2:bg-red-300 prose-h3:bg-yellow-300 prose-h1:bg-primary/65'
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeSlug, [rehypeAutolinkHeadings, {behavior: "append"}]]}
                    components={{ code: Code }}
                >
                    {blogsInfo?.description[0]}
                </ReactMarkdown>
            </div>
        </div>
    )
}

export default BlogDescription