'use client'
import React, { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa6'

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false)

    // function to scroll to the top of the page
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    // show or hide the button based on scroll position
    const handleScroll = () => {
        window.scrollY > 200 ? setIsVisible(true) : setIsVisible(false)
    }

    // add scroll event listener when component mounts
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    },[])

  return (
    <button className={`scrollToTop fixed bottom-[5%] right-[2%] w-[50px] h-[50px] flex items-center justify-center bg-primary rounded-full shadow-lg text-white border-none cursor-pointer z-50 hover:shadow-primary ${isVisible ? 'show opacity-100' : 'hide opacity-0'}`} onClick={scrollToTop}>
        <FaArrowUp size={22} />
    </button>
  )
}

export default ScrollToTop