'use client'
import React, { useEffect, useState } from 'react'
import { BlogDescription, TableContent } from '../../_components'
import GlobalApi from '@/app/_utlis/GlobalApi'

const Blog = ({ params }) => {
    const [blogsInfo, setBlogsInfo] = useState()

    const getBlogInfo = () => {
        // API call to get blog info
        GlobalApi.getBlogById(params?.blogId).then(res => {
            setBlogsInfo(res.blogDom)
        })
    }

    useEffect(() => {
        params && getBlogInfo()
    }, [params])


    return blogsInfo && (
        <div className='flex justify-between p-5 gap-3'>

            {/* Blog title */}
            <div className="w-[35rem] rounded-xl bg-white p-3">
                <BlogDescription blogsInfo={blogsInfo} />
            </div>
        
            <TableContent blogsInfo={blogsInfo} />
            
        </div>
    )
}

export default Blog