'use client'
import { Book, Tag } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'

const SideNav = () => {

    const menu = [
        {
            id: 1,
            name: "Blogs",
            icon: Book,
            link: "/blogs"
        },
        // {
        //     id: 2,
        //     name: "Tags",
        //     icon: Tag,
        //     link: "/tags"
        // },
        // {
        //     id: 3,
        //     name: "Categories",
        //     icon: Book,
        //     link: "/categories"
        // },
    ]

    const path = usePathname()
    // useEffect(() => {
    //     console.log("path", path);
    // },[])

    return (
        <div className='py-5 px-3 bg-white shadow-lg border h-screen'>
            {/* <div className="bg-black rounded-lg">
        <Image src='/logo.png' alt='logo' width={100} height={100} />
        </div> */}
            <h1 className='text-3xl text-primary font-semibold'>BlogDom</h1>

            {/* Menu */}
            <div className='mt-4'>
                {menu.map((m) => {
                    return <Link key={m.id} href={m.link}>
                        <div className={`group flex gap-3 items-center mt-1 p-3 text-[1rem] cursor-pointer text-gray-600 hover:bg-primary hover:text-white rounded-md transition-all ease-in-out duration-200 ${path.includes(m.link) && 'bg-primary text-white'} `}>
                            <m.icon className='group-hover:animate-bounce' />
                            <h2>{m.name}</h2>
                        </div>
                    </Link>
                })}
            </div>
        </div>
    )
}

export default SideNav