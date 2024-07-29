"use client";
import StoryCreatorForm from "@/components/main-form/main-form";
import LocalSavedStories from "@/components/saved/local-saved-stories";
import React from "react";


const Home = async () => {
  return (
    <>
        <StoryCreatorForm />
        <LocalSavedStories />
    </>
  );
};

export default Home;
