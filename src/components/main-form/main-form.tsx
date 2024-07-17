"use client";
import React, { useState } from "react";
import GenreList from "./genres";
import { handleSubmit } from "@/functions/handleSubmit";

const StoryCreatorForm = () => {
  const [aiResponse, setAiResponse] = useState<any>("Tu historia será desplegada aquí...");

  return (
      <main className="grid lg:grid-cols-12 md:grid-cols-8 grid-cols-4 z-10">
        <form
          className="border-4 flex flex-col lg:col-span-6 col-span-4 p-8 text-xl h-fit md:min-h-screen rounded-xl"
          action={async (formData) => {
            const story = await handleSubmit(formData);
            setAiResponse(story);
          }}
        >
          <GenreList />
          <label htmlFor="description">
            Describe brevemente lo que deseas en tu historia.
          </label>
          <textarea
            placeholder="Descripción de la historia"
            className="border"
            name="description"
          />
          <input type="submit" className="border py-2 px-6" />
        </form>
        {aiResponse && <p className="border-4 lg:col-span-6 col-span-4 p-8 text-pretty text-xl rounded-xl">{aiResponse}</p>}
      </main>
  );
};

export default StoryCreatorForm;
