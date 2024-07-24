"use client";
import React, { useState } from "react";
import GenreList from "./genres";
import { handleSubmit } from "@/functions/handleSubmit";
import StoryPreview from "../story/story-preview";
import LoaderAsset from "../loader";
import FormQuestions from "./form-questions";
import {Edit2 as Edit} from 'lucide-react'

const StoryCreatorForm = () => {
  const [aiResponse, setAiResponse] = useState<any>(
    "Tu historia será desplegada aquí..."
  );
  const [loading, setLoading] = useState<boolean>(false); 

  return (
    <main className="grid lg:grid-cols-12 md:grid-cols-8 p-6 md:gap-12 gap-6 grid-cols-4 z-10 dark:bg-slate-950 bg-slate-100">
      <form
        className={`flex flex-col lg:col-span-4 col-span-4 p-8 text-xl h-fit md:min-h-screen rounded-xl dark:text-offwhite dark:bg-indigo-900 bg-indigo-200 items-center ${loading && 'justify-center'} ${!loading && 'gap-6'}`}
        action={async (formData) => {
          setLoading(true)
          //AÑADIR LA AI OTRA VEZ
        }}
      >
        {!loading && <GenreList/>}
        {loading ? <LoaderAsset />:<FormQuestions />}
        
      </form>
      <div className="relative lg:col-span-8 col-span-4 rounded-xl dark:text-offwhite dark:bg-indigo-950 bg-indigo-100">
        <StoryPreview aiResponse={aiResponse} />
        <button className="absolute top-5 right-5 p-4 rounded-full dark:bg-indigo-700 bg-indigo-400 hover:bg-indigo-500 transition-all">
          <Edit />
        </button>
      </div>
    </main>
  );
};

export default StoryCreatorForm;
