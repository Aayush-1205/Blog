import Image from 'next/image'
import React from 'react'

const WelcomeBanner = () => {
    return (
        <div className='flex gap-5 items-center bg-white rounded-xl p-5'>
            <div className="bg-primary w-24 h-20 rounded-tl-3xl rounded-br-3xl flex items-center justify-center">
                <Image src='/logo.png' alt='logo' width={100} height={100} />
            </div>

            <div className="">
                <h2 className='text-2xl font-bold'>Welcome to <span className='text-primary'>BlogDom</span></h2>
                <h3 className='text-gray-600 text-base'>The Premier Destination Where Readers Immerse in Unmatched Blogging Excellence</h3>
            </div>
        </div>
    )
}

export default WelcomeBanner