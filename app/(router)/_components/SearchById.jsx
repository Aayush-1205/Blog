'use client'
import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import GlobalApi from '@/app/_utlis/GlobalApi';

const SearchById = () => {
    // const [searchId, setSearchId] = useState('');
    // const [searchResults, setSearchResults] = useState(null);

    // const handleSearch = (e) => {
    //     setSearchId(e.target.value);
    // };

    // const getSearchId = async () => {
    //     try {
    //         const res = await GlobalApi.getBlogBySearch(searchId);
    //         setSearchResults(res);
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };

    // // const results = searchResults?.blogDoms[0]?.id

    // const getSearchResults = async () => {
    //     try {
    //         const res = await GlobalApi.getBlogById(results)
    //         setSearchResults(res);
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };

    // useEffect(() => {
    //     if (searchId.trim() !== '') {
    //         getSearchId();
    //     }
    //     getSearchResults()
    // }, [searchId]);

    // console.log(results);

    return (
        <div className="flex gap-2 border p-2 rounded-md">
            <Search className='h-5 w-5' />
            {/* <input
                type="search"
                placeholder='Search...'
                value={searchId}
                onChange={handleSearch}
                className='outline-none'
            /> */}
            {/* {searchResults && (
                <ul>
                    {searchResults.data.blogDoms.map((blog) => (
                        <li key={blog.id}>
                            <h2>{blog.title}</h2>
                            <p>{blog.subTitle}</p>
                        </li>
                    ))}
                </ul>
            )} */}
        </div>
    );
};

export default SearchById;