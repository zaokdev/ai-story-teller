"use client"
import { useContext, useState } from "react";
import { Button } from "../ui/button";
import { SaveContext } from "@/context/save-context";
import { MoveLeft, MoveRight } from "lucide-react";

const StoryPagination = ({savedStories}:any) => {

    const {story, setStory, setDone, setHide} = useContext(SaveContext)
    const ITEMS = 6
    const [aMostrar,setAMostrar] = useState([...savedStories].splice(0,ITEMS))
    const [currentPage,setCurrentPage] = useState(0)

    const nextPage = () => {
        const savedLength = savedStories.length
        const next = currentPage + 1
        const firstItem = next * ITEMS

        if  (firstItem === savedLength) return

        setCurrentPage(next)
        setAMostrar([...savedStories].splice(firstItem,ITEMS))
    }

    const prevPage = () => {

        const prev = currentPage - 1
        if  (prev < 0) return
        const firstItem = prev * ITEMS
        setCurrentPage(prev)
        setAMostrar([...savedStories].splice(firstItem,ITEMS))
    }

    const AllStories = aMostrar.map((storyLocal: any) => (

        <Button
          key={storyLocal.storageIndex}
          className="col-span-4 md:col-span-2 dark:hover:bg-violet-950 dark:bg-violet-900 p-6 rounded-xl flex flex-col"
          onClick={() => {
            setStory && setStory(storyLocal.storyText)
            setDone && setDone(true)
            setHide && setHide(true)
            localStorage.setItem("storyRecovery", story ?? "Algo salió mal")
          }}
        >
          <h3 className="text-lg font-semibold">{storyLocal.storageIndex}</h3>
        </Button>
      ))

  return (
    <section className="grid grid-cols-4 md:grid-cols-8 xl:grid-cols-12 gap-3 md:gap-12 mt-8">
        {AllStories}
        {savedStories.length > 6 && <div className="col-span-full xl:col-start-6 xl:col-span-2 xl:w-full gap-6 flex justify-center items-center">
            <Button className={`dark:bg-slate-500 rounded-xl ${currentPage === 0 && "opacity-30 hover:dark:bg-slate-500 transition-none"}`} onClick={prevPage}><MoveLeft /></Button>
            <Button className={`dark:bg-slate-500 rounded-xl ${savedStories.length < 6 && "opacity-30 hover:dark:bg-slate-500 transition-none"}`}  onClick={nextPage}><MoveRight /></Button>
        </div>}
    </section>
  );
};

export default StoryPagination;
