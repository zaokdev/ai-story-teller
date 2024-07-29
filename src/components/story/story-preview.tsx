"use client";
import React, { useEffect, useRef } from "react";

//bendito stackOverflow, me ayudó más que chatgpt

const StoryPreview = ({ aiResponse, edit, setAiResponse }: any) => {

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
  },[aiResponse])
  
  return (
    <div
    ref={storyRef}
      contentEditable={edit}
      onBlur={saveCursorPosition}
      onInput={(e: any) => {
        setAiResponse(e.target.innerText);
        saveCursorPosition()
      }}
      suppressContentEditableWarning
      className="px-8 py-12 text-pretty text-xl whitespace-pre-line focus:outline-none"
    >
      {aiResponse}
    </div>
  );
};



export default StoryPreview;
