'use client'
import React, { useEffect, useState } from 'react'
import BlogItem from './BlogItem'
import GlobalApi from '../../_utlis/GlobalApi'
import { BiReset } from "react-icons/bi";

const BlogList = () => {

    const [BlogList, setBlogList] = useState([])
    const [cateOrg, setCateOrg] = useState([])
    const [isOpen, setIsOpen] = useState(false)

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
            label: 'html',
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
            label: 'Programming',
            value: 'programming'
        },
    ]

    const filterCate = (category) => {
        const filterList = cateOrg.filter(cate => {
            return cate.tags.includes(category);
        })
        // console.log(filterList);
        setIsOpen(false)
        setBlogList(filterList)
    }

    const cancelFilter = () => {
        getAllBlog()
    }

    console.log(BlogList);

    return (
        <div className='p-5 bg-white rounded-lg mt-5'>
            <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-primary">Blogs</h2>
                <div class="relative flex items-center gap-2 text-left">

                    <button onClick={() => setIsOpen(!isOpen)} type="button" class="inline-flex w-fit justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                        Filter
                    </button>


                    {isOpen && <div class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div class="py-1">
                            {tags.map((t, i) => {
                                return <p key={i} onClick={() => filterCate(t.value)} class="block px-4 py-2 text-sm text-gray-700 cursor-pointer">{t.label}</p>
                            })}
                        </div>
                    </div>}
                    <BiReset onClick={cancelFilter} size={22} className='cursor-pointer' />
                </div>

            </div>

            {/* Blog List */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {BlogList.length > 0 ? BlogList.map((blog, index) => {
                    return <BlogItem key={index} blog={blog} />
                })
                    : [1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => {
                        return <div key={index} className="bg-gray-300 w-full h-[240px] m-2 animate-pulse p-5 rounded-xl">

                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default BlogList