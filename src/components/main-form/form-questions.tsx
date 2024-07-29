"use client"
import React from "react";

const FormQuestions = () => {
  return (
    <>
      <label htmlFor="description">
        Describe brevemente lo que deseas en tu historia.
      </label>
      <textarea
        placeholder="Descripción de la historia"
        className="px-3 py-2 h-40 w-full rounded-xl dark:bg-slate-800 bg-offwhite outline-none"
        id="description"
        name="description"
      />
      <input type="submit" className="py-2 px-6 cursor-pointer w-full rounded-xl dark:bg-violet-700 bg-indigo-400 hover:bg-violet-500 transition-colors text-offwhite" />
    </>
  );
};

export default FormQuestions;
