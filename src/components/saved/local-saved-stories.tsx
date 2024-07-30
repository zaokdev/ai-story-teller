"use client"
import React, { useEffect, useState } from 'react'

const LocalSavedStories = () => {
  
  const [savedStories,setSavedStories] = useState<any>([])

  useEffect(()=>{
    let storageIndex:any = ""
    for(let i=0; i<localStorage.length;i++){
      storageIndex = localStorage.key(i)
      if(storageIndex.includes("ls_")){
        const storyText = localStorage.getItem(storageIndex)
        const storyBundle:any = {
          storageIndex: storageIndex.split("_")[1],
          storyText
        }
        setSavedStories((prevStories:any) => [...prevStories,storyBundle])
      }
    }
  },[])


  return (
    <section className='dark:bg-slate-900 dark:border-t-2 dark:border-violet-300 dark:text-offwhite p-6'>
        <h2 className='text-3xl font-semibold'>Historias guardadas</h2>
        <span className=''>Aquí encontrarás las historias almacenadas en el navegador para poder regresar a ellas.</span>
        {savedStories.map((story:any) => (
          <div key={story.storageIndex}>{story.storageIndex}</div>
        ))}
    </section>
  )
}

export default LocalSavedStories