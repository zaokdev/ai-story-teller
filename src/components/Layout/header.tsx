import React from 'react'

const Header = () => {
  return (
    <nav className='sticky flex items-center justify-center z-0 bg-gradient-to-r dark:from-indigo-800 dark:via-slate-900 dark:to-yellow-950 from-indigo-200 via-offwhite to-yellow-100'>
        <img src='/favicon.ico' className='h-28 md:h-32 hover:filter hover:drop-shadow-2xl cursor-pointer'/>
        <span className='text-2xl md:text-4xl dark:text-offwhite'><strong className=''>AI</strong> Story Teller</span>
        </nav>
  )
}

export default Header