"use client";
import React from "react";
import {
  MoreVertical as More,
  Edit2,
  Copy,
  LucideHistory as Restore,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const EditMenu = ({ edit, setEdit, aiResponse, setAiResponse }: any) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="absolute top-5 right-10 transition-all rounded-full p-3 dark:bg-indigo-700 bg-indigo-400 hover:bg-indigo-500 hover:opacity-70 opacity-55">
        <More />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="dark:bg-indigo-700 dark:text-offwhite rounded-xl border-none flex flex-col items-center">
        <DropdownMenuLabel className="text-center text-lg">
          Opciones
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="m-0" />
        <DropdownMenuItem
          onClick={() => {
            setEdit(!edit);
            console.log(edit);
          }}
          className="flex gap-4 hover:bg-indigo-500 self-start min-w-full min-h-full p-2 rounded-xl"
        >
          <Edit2 />
          Editar
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={async () => {
            try {
              await navigator.clipboard.writeText(aiResponse);
              alert("Historia copiada al portapapeles.");
            } catch (err) {
              alert("Error al copiar.");
            }
          }}
          className="flex gap-4 hover:bg-indigo-500 self-start min-w-full min-h-full p-2 rounded-xl"
        >
          <Copy />
          Copiar
        </DropdownMenuItem>
        <DropdownMenuItem onClick={()=>{
          const recovery = localStorage.getItem("story")
          setAiResponse(recovery)
        }} className="flex gap-4 hover:bg-indigo-500 self-start min-w-full min-h-full p-2 rounded-xl">
          <Restore />
          Restaurar
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default EditMenu;
