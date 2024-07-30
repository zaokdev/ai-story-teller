"use client";
import StoryCreatorForm from "@/components/main-form/main-form";
import LocalSavedStories from "@/components/saved/local-saved-stories";
import SaveProvider from "@/context/save-context";
import React from "react";

const Home = async () => {
  return (
    <>
      <SaveProvider>
        <StoryCreatorForm />
        <LocalSavedStories />
      </SaveProvider>
    </>
  );
};

export default Home;
