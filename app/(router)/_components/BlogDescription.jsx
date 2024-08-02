import React from 'react'
import VideoPlayer from './VideoPlayer'
import Markdown from 'react-markdown'

const BlogDescription = ({ blogsInfo }) => {
// console.log(blogsInfo?.description[0]);
    return (
        <div>
            <h2 className='text-[1.5rem] font-semibold'>{blogsInfo?.title}</h2>
            <p className='text-gray-500 text-[0.8rem]'>{blogsInfo?.subTitle}</p>

            {/* Video Player if the blog have one */}
            {blogsInfo?.videos[0]?.url && <VideoPlayer videoUrl={blogsInfo?.videos[0]?.url} />}

            {/* Description */}
            {/* <h2 className="mt-5 text-[1rem] font-semibold"></h2> */}

            <div>
                <Markdown className='text-[0.8rem] font-medium leading-4 mt-2'>
                    {blogsInfo?.description[0]}
                </Markdown>
            </div>
        </div>
    )
}

export default BlogDescription