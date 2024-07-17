import React from 'react'

const Header = () => {
  return (
    <nav className='sticky flex items-center justify-center z-0 dark:bg-slate-900 bg-slate-200'>
        <img src='/favicon.ico' className='h-32 hover:filter hover:drop-shadow-2xl cursor-pointer'/>
        <span className='text-4xl'><strong className=''>AI</strong> Story Teller</span>
        </nav>
  )
}

export default Header