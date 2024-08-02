import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BlogItem = ({ blog }) => {
  const time = blog.createdAt
  const date = new Date(time).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
  // console.log(date);
  return (
    <Link href={`/blog/${blog?.blogUrl}`}>
      <div className='border rounded-xl shadow-md mt-4 cursor-pointer hover:shadow-lg hover:shadow-primary/50'>
        <Image src={blog?.banner?.url} width={500} height={180} className='rounded-t-xl' alt='Banner' />

        <div className="p-2">
          <h2 className="font-medium">{blog?.title}</h2>
          <p className="text-[0.8rem] text-gray-700">{blog?.subTitle}</p>
          <p className="text-[0.7rem] text-gray-500">{date}</p>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem