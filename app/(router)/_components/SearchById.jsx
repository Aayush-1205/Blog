'use client'
import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import GlobalApi from '@/app/_utlis/GlobalApi';
import Link from 'next/link';
import Image from 'next/image';

const SearchById = () => {
    const [searchId, setSearchId] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [isOpen, setIsOpen] = useState(false)

    // const handleSearch = (e) => {
    //     setSearchId(e.target.value);
    // };

    const cancelSearch = () => {
        setIsOpen(false)
        setSearchId('');
    }

    const getSearchId = async () => {
        try {
            const res = await GlobalApi.getBlogBySearch(searchId);
            setSearchResults(res);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        if (searchId.trim() !== '') {
            getSearchId();
        }
    }, [searchId]);

    // console.log(searchResults);

    return (
        <div className="flex gap-2 border p-2 relative rounded-md">
            <Search className='h-5 w-5' />
            <input
                type="search"
                placeholder='Search...'
                value={searchId}
                onClick={() => setIsOpen(!isOpen)}
                onChange={(e) => setSearchId(e.target.value)}
                className='outline-none'
            />
            {isOpen && searchResults && (
                <div onClick={() => setIsOpen(!isOpen)} className="absolute top-10 left-0 bg-white lg:w-[33rem] text-black p-2 rounded-md shadow">
                    {searchResults?.blogDoms?.map((result, index) => {
                        return <>
                            <Link href={`/blog/${result.blogUrl}`} key={index} className="py-2 px-4 flex items-center gap-4 cursor-pointer hover:bg-black/20">
                                <div className='h-12 overflow-hidden'>
                                    <Image src={result?.banner?.url} width={100} height={50} alt='img' className='object-cover object-center' />
                                </div>

                                {/* Display the result data here */}
                                <Link onClick={cancelSearch} href={`/blog/${result.blogUrl}`} className="text-lg font-semibold">{result.title}</Link>
                            </Link>
                        </>
                    })}
                </div>
            )}
        </div>
    );
};

export default SearchById;