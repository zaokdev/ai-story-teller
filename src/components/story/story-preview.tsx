"use client";
import { SaveContext } from "@/context/save-context";
import React, { useContext, useEffect, useRef } from "react";

//bendito stackOverflow, me ayudó más que chatgpt

const StoryPreview = () => {

  const {story,setStory, edit} = useContext(SaveContext)
  const storyRef = useRef<HTMLDivElement>(null)
  const cursorPos = useRef<any>({node: null, offset: 0});

  const saveCursorPosition = () => {
    const sel = window.getSelection();
    if (sel && sel.rangeCount > 0) {
      const range = sel.getRangeAt(0);
      cursorPos.current = {
        node: range.startContainer,
        offset: range.startOffset,
      };
    }
  };

  // Restaurar la posición del cursor
  const restoreCursorPosition = () => {
    const sel = window.getSelection();
    if (sel && cursorPos.current.node) {
      const range = document.createRange();
      range.setStart(cursorPos.current.node, cursorPos.current.offset);
      range.collapse(true);
      sel.removeAllRanges();
      sel.addRange(range);
    }
  };
  

  useEffect(()=>{
    restoreCursorPosition()
  },[story])
  
  return (
    <div
    ref={storyRef}
      contentEditable={edit}
      onBlur={saveCursorPosition}
      onInput={(e: any) => {
        setStory && setStory(e.target.innerText);
        saveCursorPosition()
      }}
      suppressContentEditableWarning
      className="px-8 py-12 text-pretty text-xl whitespace-pre-line focus:outline-none"
    >
      {story}
    </div>
  );
};



export default StoryPreview;
