"use client"
import { SaveContextInterface, SaveProviderProps } from "@/functions/types";
import { createContext, useState } from "react";

export const SaveContext = createContext<Partial<SaveContextInterface>>({})

export default function SaveProvider({children}:SaveProviderProps){

    const [story,setStory] = useState<string>("Tu historia se verá aquí...")

    return (
        <SaveContext.Provider value={{story, setStory}}>
            {children}
        </SaveContext.Provider>
    )
}