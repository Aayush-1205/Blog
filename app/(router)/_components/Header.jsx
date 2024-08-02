import { Button } from '../../../components/ui/button'
import { Bell, Search } from 'lucide-react'
import React from 'react'
import SearchById from './SearchById'

const Header = () => {
    return (
        <div className='p-4 bg-white flex justify-between'>
            {/* Searchbar */}
            <SearchById />

            {/* button & bell icon */}
            <div className="flex items-center gap-4">
                <Bell className='text-gray-500' />
                <Button>Get Started</Button>
            </div>
        </div>
    )
}

export default Header