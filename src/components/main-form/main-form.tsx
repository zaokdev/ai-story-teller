"use client"
import React, { useState } from 'react'
import GenreList from './genres';
import { handleSubmit } from '@/functions/handleSubmit';


const StoryCreatorForm = () => {

  const [aiResponse, setAiResponse] = useState<any>()

  return (
    <>
    <form className="border-8 flex flex-col" action={async formData => {
      const story = await handleSubmit(formData)
      setAiResponse(story)
    }}>
          
            <GenreList />
            <label htmlFor='description'>Describe brevemente lo que deseas en tu historia.</label>
            <textarea placeholder='Descripción de la historia' className='border' name='description'/>
          <input type='submit' className='border py-2 px-6'/>
          
    </form>

    {aiResponse && <p>{aiResponse}</p>}
    </>
  )
}

export default StoryCreatorForm

