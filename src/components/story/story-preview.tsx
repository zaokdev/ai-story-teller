import React from 'react'

const StoryPreview = ({aiResponse}:any) => {
  return (
    <p className='p-8 text-pretty text-xl whitespace-pre-line'>{aiResponse}</p>
  )
}

export default StoryPreview