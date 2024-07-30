"use client";
import React, { useContext, useState } from "react";
import GenreList from "./genres";
import { handleSubmit } from "@/functions/handleSubmit";
import StoryPreview from "../story/story-preview";
import LoaderAsset from "../loader";
import FormQuestions from "./form-questions";
import EditMenu from "../story/edit-menu";
import { SaveContext } from "@/context/save-context";

const StoryCreatorForm = () => {

  //const [aiResponse, setAiResponse] = useState<any>("Tu historia será desplegada aquí...");
  const {story,setStory} = useContext(SaveContext)
  const [loading, setLoading] = useState<boolean>(false);
  const [done, setDone] = useState<boolean>(false);
  const [edit, setEdit] = useState<boolean>(false);
  const [hide,setHide] = useState<boolean>(false);

  return (
    <main className="grid lg:grid-cols-12 md:grid-cols-8 p-6 justify-center items-center md:gap-12 gap-6 grid-cols-4 z-10 dark:bg-slate-950 bg-slate-100 min-h-screen">
      <form
        className={`flex flex-col lg:col-span-4 col-span-4 p-8 text-xl min-h-full rounded-xl dark:text-offwhite dark:bg-violet-900 bg-indigo-200 items-center ${loading && 'justify-center'} ${!loading && 'gap-6'} transition-all col-span-1 none ${hide && 'hidden'}`}
        onSubmit={(e)=>{
          setLoading(true);
        }}

        action={async (formData) => {
          
          try {
            const res = await handleSubmit(formData);
            setStory && setStory(res);
            localStorage.setItem("storyRecovery", res);
          } catch (error) {
            console.error("Error al enviar el formulario:", error);
          } finally {
            setLoading(false)
            setDone(true);
            setTimeout(() => {
              setHide(true);
            }, 1000);
          }
          
        }} 
      >
        {!loading && <GenreList/>}
        {!loading && <FormQuestions />}
        {loading && <LoaderAsset />}
        {done && <span>Historia generada!</span>}
        
      </form>
      <div className={`before:block before:rounded-t-xl before:bg-violet-600 before:top-0 before:w-full before:h-20 relative lg:col-span-8 min-h-full col-span-4 rounded-xl dark:text-offwhite dark:bg-violet-950 bg-indigo-100 ${hide && 'lg:!col-start-3'}`}>
        <StoryPreview edit={edit} />
        {done && <EditMenu edit={edit} setEdit={setEdit} />}
      </div>

      {edit && <span className="dark:text-offwhite fixed bottom-0 dark:bg-indigo-800 rounded-t-xl px-6 py-4">Modo de edición</span>}
    </main>
  );
};

export default StoryCreatorForm;
