'use client'
import React, { useEffect, useState } from 'react'
import BlogItem from './BlogItem'
import GlobalApi from '../../_utlis/GlobalApi'
import { BiReset } from "react-icons/bi";

const BlogList = () => {

    const [BlogList, setBlogList] = useState([])
    const [cateOrg, setCateOrg] = useState([])
    const [isTagOpen, setIsTagOpen] = useState(false)
    const [isTopicOpen, setIsTopicOpen] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setPostsPerPage] = useState(6)

    useEffect(() => {
        getAllBlog()
    }, [])

    const getAllBlog = () => {
        // fetch data from API
        GlobalApi.getAllBlogDom().then(res => {
            // console.log(res)
            setBlogList(res?.blogDoms)
            setCateOrg(res?.blogDoms)
        })
    }

    const tags = [
        {
            label: 'Html',
            value: 'html'
        },
        {
            label: 'Css',
            value: 'css'
        },
        {
            label: 'JavaScript',
            value: 'javaScript'
        },
        {
            label: 'React.js',
            value: 'reactJs'
        },
        {
            label: 'Next.js',
            value: 'nextJs'
        },
        {
            label: 'Git',
            value: 'git'
        },
        {
            label: 'GitHub',
            value: 'github'
        },
        {
            label: 'TailwindCss',
            value: 'tailwindCss'
        },
        {
            label: 'Node.js',
            value: 'nodeJs'
        },
        {
            label: 'Express.js',
            value: 'expressJs'
        },
        {
            label: 'MongoDB',
            value: 'mongoDb'
        },
        {
            label: 'VSCode',
            value: 'vsCode'
        },
        {
            label: 'WebDesign',
            value: 'webDesign'
        },
        {
            label: 'Figma',
            value: 'figma'
        },
        {
            label: 'Tech',
            value: 'tech'
        }
        
    ]

    const topics = [
        {
            label: 'Html, Css & JavaScript',
            value: 'htmlcssjavascript'
        },
        {
            label: 'React.js',
            value: 'reactJs'
        },
        {
            label: 'Next.js',
            value: 'nextJs'
        },
        {
            label: 'Git',
            value: 'git'
        },
        {
            label: 'GitHub',
            value: 'github'
        },
        {
            label: 'TailwindCss',
            value: 'tailwindCss'
        },
        {
            label: 'DataBase',
            value: 'database'
        },
        {
            label: 'Programming',
            value: 'programming'
        },
        {
            label: 'Front-End',
            value: 'frontenddevelopment'
        },
        {
            label: 'Back-End',
            value: 'backenddevelopment'
        },
        {
            label: 'Technologies',
            value: 'technologies'
        },
        {
            label: 'Tips & Tricks',
            value: 'tips&tricks'
        },
        {
            label: 'Hacks',
            value: 'hacks'
        },
        {
            label: 'Resources',
            value: 'resources'
        },
        {
            label: 'Designs',
            value: 'designs'
        },
    ]

    const filterTag = (category) => {
        const filterList = cateOrg.filter(cate => {
            return cate.tags.includes(category);
        })
        // console.log(filterList);
        setIsTagOpen(false)
        setBlogList(filterList)
    }
    const filterTopic = (category) => {
        const filterList = cateOrg.filter(cate => {
            return cate.topics.includes(category);
            // console.log(category);
        })
        console.log(filterList);
        setIsTopicOpen(false)
        setBlogList(filterList)
    }

    const cancelFilter = () => {
        getAllBlog()
    }


    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = BlogList.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(BlogList.length / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    // console.log(currentPosts);
    return (
        <div className='p-5 bg-white rounded-lg mt-5'>
            <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-primary">Blogs</h2>
                <div className="relative flex items-center gap-2 text-left">

                    <button onClick={() => setIsTagOpen(!isTagOpen)} type="button" className="inline-flex w-fit justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                        Tags
                    </button>
                    <button onClick={() => setIsTopicOpen(!isTopicOpen)} type="button" className="inline-flex w-fit justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                        Topics
                    </button>


                    {isTagOpen && (
                        <div
                            className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none max-h-80 overflow-y-auto"
                        >
                            <div className="py-1">
                                {tags.map((t, i) => {
                                    return (
                                        <p
                                            key={i}
                                            onClick={() => filterTag(t.value)}
                                            className="block px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-slate-200"
                                        >
                                            {t.label}
                                        </p>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                    {isTopicOpen && (
                        <div
                            className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none max-h-80 overflow-y-auto"
                        >
                            <div className="py-1">
                                {topics.map((t, i) => {
                                    return (
                                        <p
                                            key={i}
                                            onClick={() => filterTopic(t.value)}
                                            className="block px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-slate-200"
                                        >
                                            {t.label}
                                        </p>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                    <BiReset onClick={cancelFilter} size={22} className='cursor-pointer' />
                </div>

            </div>

            {/* Blog List */}
            <div onClick={() => {setIsTagOpen(false); setIsTopicOpen(false)}} className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {currentPosts.length > 0 ? currentPosts.map((blog, index) => {
                    return <BlogItem key={index} blog={blog} />
                })
                    : [1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => {
                        return <div key={index} className="bg-gray-300 w-full h-[240px] m-2 animate-pulse p-5 rounded-xl">

                        </div>
                    })
                }
            </div>

            <div className="blogpagination flex items-center justify-center my-8 text-black">
                <button
                    className='bg-[#f0f0f0] border-none text-[#333] py-4 px-5 font-semibold mr-1 rounded-md cursor-pointer hover:bg-[#667eea] hover:text-white disabled:opacity-50 disabled:cursor-not-allowed'
                    onClick={() => paginate(1)}
                    disabled={currentPage === 1}

                >
                    First
                </button>
                {pageNumbers
                    .slice(
                        Math.max(currentPage - 3, 0),
                        Math.min(currentPage + 1, pageNumbers.length)
                    )
                    .map((number) => {
                        return (
                            <button
                                key={number}
                                onClick={() => paginate(number)}
                                className={`${currentPage === number ? "active bg-[#667eea] text-white" : ""} bg-[#f0f0f0] border-none py-4 px-5 font-semibold mr-1 rounded-md cursor-pointer hover:bg-[#667eea] hover:text-white`}

                            >
                                {number}
                            </button>
                        );
                    })}
                <button
                    className='bg-[#f0f0f0] border-none text-[#333] py-4 px-5 font-semibold mr-1 rounded-md cursor-pointer hover:bg-[#667eea] hover:text-white disabled:opacity-50 disabled:cursor-not-allowed'
                    onClick={() => paginate(pageNumbers.length)}
                    disabled={currentPage === pageNumbers.length}

                >
                    Last
                </button>
            </div>
        </div>
    )
}

export default BlogList