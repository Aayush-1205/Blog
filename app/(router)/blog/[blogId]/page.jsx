'use client'
import React, { useEffect, useState } from 'react'
import { BlogDescription } from '../../_components'
import GlobalApi from '@/app/_utlis/GlobalApi'

const Blog = ({ params }) => {
    const [blogsInfo, setBlogsInfo] = useState()

    const getBlogInfo = () => {
        // API call to get blog info
        GlobalApi.getBlogById(params?.blogId).then(res => {
            console.log(res)
            setBlogsInfo(res.blogDom)
        })
    }

    useEffect(() => {
        params && getBlogInfo()
    }, [params])

    return blogsInfo && (
        <div className='grid grid-cols-1 md:grid-cols-3 p-5 gap-3'>
            {/* Blog title */}
            <div className="col-span-2 bg-white p-3">
                <BlogDescription blogsInfo={blogsInfo} />
            </div>

        </div>
    )
}

export default Blog