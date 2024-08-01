"use client";
import React, { useContext, useEffect, useState } from "react";
import { Button } from "../ui/button";
import { SaveContext } from "@/context/save-context";
import StoryPagination from "./stories-pagination";

const LocalSavedStories = () => {
  const [savedStories, setSavedStories] = useState<any>([]);
  const [ready,setReady] = useState(false)

  useEffect(() => {
    let storageIndex: any = "";
    if (localStorage.length === 0) return 

    for (let i = 0; i < localStorage.length; i++) {
      storageIndex = localStorage.key(i);
      if (storageIndex.includes("ls_")) {
        const storyText = localStorage.getItem(storageIndex);
        const storyBundle: any = {
          storageIndex: storageIndex.split("_")[1],
          storyText,
        };
        setSavedStories((prevStories: any) => [...prevStories, storyBundle]);
      }
    }
    setReady(true)
  }, []);

  return (
    <section className="dark:bg-slate-900 text-center dark:border-violet-300 dark:text-offwhite p-6 min-h-96">
      <h2 className="text-4xl text-center">Historias guardadas</h2>
      <span className="dark:text-offwhite text-black">Textos almacenados actualmente: {savedStories.length}</span>
        {ready && <StoryPagination savedStories={savedStories}></StoryPagination>}
      </section>
  );
};

export default LocalSavedStories;
