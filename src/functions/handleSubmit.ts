"use server"

import { createStory } from "./ai-story-creation"

export const handleSubmit = async (formData: FormData) => {
    //Error handler
    const genreList = formData.getAll('genres')
    const description = formData.get('description')
    return await createStory(genreList,description)
    
  }