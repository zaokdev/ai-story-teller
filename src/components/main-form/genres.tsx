"use client";
import React from "react";
import Select from "react-select";
import classNames from "classnames";

//https://github.com/JedWatson/react-select/blob/master/storybook/stories/UnstyledWithTailwind.stories.tsx
//Estilar el react-select 

const GenreList = () => {
  const genres = [
    { value: "scifi", label: "Ciencia ficción" },
    { value: "terror", label: "Terror" },
    { value: "misterio", label: "Misterio" },
    { value: "drama", label: "Drama" },
  ];

  const customStyles = {};

  return (
    <>
      <label htmlFor="genres">
        Selecciona los géneros de tu historia deseada:{" "}
      </label>
      <Select
      className="w-full"
        options={genres}
        instanceId={"wsad123wqwe"}
        isMulti={true}
        name="genres"
        unstyled
        styles={customStyles}
        classNames={{
          control: ({ isDisabled, isFocused }) => //principal
            classNames(
              isDisabled ? "bg-neutral-50" : "bg-offwhite",
              isDisabled
                ? "border-neutral-100"
                : isFocused
                ? "border-purple-800"
                : "border-neutral-200",
              "rounded-xl",
              "py-4 px-2 min-w-full",
              isFocused
                ? "hover:border-purple-800"
                : "hover:border-neutral-300",
              "dark:bg-slate-800 dark:text-offwhite"
            ),
          menu: () => 
            classNames(
              "dark:bg-slate-950",
              "rounded",
              "dark:border-slate-700 mt-1 border-2"
            ),
            option: ({ isDisabled, isFocused, isSelected }) =>
              classNames(
                isSelected
                  ? 'bg-slate-800'
                  : isFocused
                  ? 'dark:bg-indigo-500 bg-indigo-200 border-indigo-400'
                  : 'dark:bg-slate-800 bg-offwhite',
                isDisabled
                  ? 'text-neutral-200'
                  : isSelected
                  ? 'text-white'
                  : 'text-inherit',
                'py-2',
                'px-3',
                !isDisabled &&
                  (isSelected ? 'active:bg-purple-800' : 'active:bg-purple-500')
              ),

        }}
      />
    </>
  );
};

export default GenreList;
