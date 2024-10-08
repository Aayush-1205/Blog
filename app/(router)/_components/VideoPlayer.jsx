import React from 'react'

const VideoPlayer = ({videoUrl}) => {
  return (
    <video width={1000} height={250} controls className='rounded-lg mt-4'>
        <source src={videoUrl} type='video/mp4' />
    </video>
  )
}

export default VideoPlayer