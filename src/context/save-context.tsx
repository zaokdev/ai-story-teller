"use client"
import { SaveContextInterface, SaveProviderProps } from "@/functions/types";
import { createContext, useState } from "react";

export const SaveContext = createContext<Partial<SaveContextInterface>>({})

export default function SaveProvider({children}:SaveProviderProps){

    const [story,setStory] = useState<string>("Tu historia se verá aquí...")
    const [loading, setLoading] = useState<boolean>(false);
    const [done, setDone] = useState<boolean>(false);
    const [edit, setEdit] = useState<boolean>(false);
    const [hide,setHide] = useState<boolean>(false);

    return (
        <SaveContext.Provider value={{story, setStory, loading, setLoading, done, setDone, edit, setEdit, hide, setHide}}>
            {children}
        </SaveContext.Provider>
    )
}