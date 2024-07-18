import React from 'react'

const Header = () => {
  return (
    <nav className='sticky flex items-center justify-center z-0 bg-gradient-to-r dark:from-indigo-950 dark:via-slate-900 dark:to-yellow-950'>
        <img src='/favicon.ico' className='h-32 hover:filter hover:drop-shadow-2xl cursor-pointer'/>
        <span className='text-4xl dark:text-offwhite'><strong className=''>AI</strong> Story Teller</span>
        </nav>
  )
}

export default Header