'use client'
import React, { useEffect, useState } from 'react'

const TableContent = ({ blogsInfo }) => {
    const [markdownText, setMarkdownText] = useState('')
    const [headings, setHeadings] = useState([])

    useEffect(() => {
        if (blogsInfo) {
            setMarkdownText(blogsInfo.description[0])
        }
    }, [blogsInfo])

    useEffect(() => {
        if (markdownText) {
            const headingsArray = markdownText.match(/^(#+) (.*)$/gm);
            if (headingsArray) {
                setHeadings(headingsArray.map(heading => {
                    const level = heading.match(/^#+ /)[0].length;
                    let formattedHeading;
                    switch (level) {
                        case 1:
                            formattedHeading = `1. ${heading.replace(/^#+ /, '')}`;
                            break;
                        case 2:
                            formattedHeading = `• ${heading.replace(/^#+ /, '')}`;
                            break;
                        case 3:
                            formattedHeading = `— ${heading.replace(/^#+ /, '')}`;
                            break;
                        case 4:
                            formattedHeading = `▢ ${heading.replace(/^#+ /, '')}`;
                            break;
                        default:
                            formattedHeading = heading.replace(/^#+ /, '');
                    }
                    return formattedHeading;
                }));
            }
        }
    }, [markdownText]);

    const handleHeadingClick = (slug) => {
        window.history.pushState({}, '', `#${slug}`);
        window.scrollTo(0, 0);
    }

    const slugify = (text) => {
        return text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/gi, '');
    }


    return (
        <details className='bg-white text-black rounded-lg p-4 sticky top-6 w-96 h-fit overflow-hidden overflow-y-auto' open>
            <summary className='text-lg font-semibold capitalize cursor-pointer'>Table Of Content</summary>
            <ul>
                {headings.map((heading, index) => (
                    <li key={index} className='hover:underline'>
                        <a href={`#${slugify(heading.replace(/^[^ ]+ /, ''))}`} onClick={() => handleHeadingClick(slugify(heading.replace(/^[^ ]+ /, '')))}>
                            {heading}
                        </a>
                    </li>
                ))}
            </ul>
        </details>
    )
}

export default TableContent