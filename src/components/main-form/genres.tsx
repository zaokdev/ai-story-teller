"use client"
import React from 'react'
import Select from 'react-select'

const GenreList = () => {

    const genres = [
        {value: 'scifi', label: 'Ciencia ficción'},
        {value: 'terror', label: 'Terror'},
        {value: 'misterio',label: 'Misterio'},
        {value: 'drama', label: 'Drama'}
    ]

  return (
    <>
    <label htmlFor='genres'>Selecciona los géneros de tu historia deseada: </label>
          <Select options={genres} instanceId={'wsad123wqwe'}
 isMulti={true} name='genres' />
 </>
  )
}

export default GenreList