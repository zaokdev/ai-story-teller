import React, { useState } from "react";
import {
  MoreVertical as More,
  Edit2,
  Copy,
  LucideHistory as Restore,
  Save
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { DialogClose } from "@radix-ui/react-dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

const EditMenu = ({ edit, setEdit, aiResponse, setAiResponse }: any) => {
  const [isRestoreDialogOpen, setRestoreDialogOpen] = useState(false);
  const [isAdditionalDialogOpen, setAdditionalDialogOpen] = useState(false);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="absolute top-5 right-10 transition-all rounded-full p-3 dark:bg-indigo-700 bg-indigo-400 hover:bg-indigo-500 hover:opacity-70 opacity-55">
        <More />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="dark:bg-indigo-700 dark:text-offwhite rounded-xl border-none flex flex-col items-center">
        <DropdownMenuLabel className="text-center text-lg">Opciones</DropdownMenuLabel>
        <DropdownMenuSeparator className="m-0" />
        
        <DropdownMenuItem
          onClick={() => {
            setEdit(!edit);
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

        {/* Primer Dialog Trigger */}
        <DropdownMenuItem
          onClick={() => setRestoreDialogOpen(true)}
          className="flex gap-4 hover:bg-indigo-500 self-start min-w-full min-h-full p-2 rounded-xl"
        >
          <Restore />
          Restaurar
        </DropdownMenuItem>

        {/* Segundo Dialog Trigger */}
        <DropdownMenuItem
          onClick={() => setAdditionalDialogOpen(true)}
          className="flex gap-4 hover:bg-indigo-500 self-start min-w-full min-h-full p-2 rounded-xl"
        >
          <Edit2 />
          Opción Adicional
        </DropdownMenuItem>
      </DropdownMenuContent>

      {/* Primer Dialog */}
      <Dialog open={isRestoreDialogOpen} onOpenChange={setRestoreDialogOpen}>
        <DialogContent className="dark:bg-indigo-900 border-none rounded-xl dark:text-offwhite text-black">
          <DialogHeader>
            <DialogTitle>
              Restaurarás la historia a su contexto inicial
            </DialogTitle>
            <DialogDescription>
              Al confirmar, los cambios que hayas realizado anteriormente se revertirán y la historia volverá a como se generó. ¿Estás seguro?
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <Button
                type="submit"
                className="py-2 px-6 cursor-pointer w-full rounded-xl dark:bg-violet-700 bg-indigo-400 hover:bg-violet-500 transition-colors text-offwhite"
                onClick={() => {
                  const recovery = localStorage.getItem("storyRecovery");
                  setAiResponse(recovery);
                  setRestoreDialogOpen(false); // Cerrar el diálogo
                }}
              >
                Confirmar
              </Button>
            </DialogClose>
            <DialogClose asChild>
              <Button
                type="submit"
                className="py-2 px-6 cursor-pointer w-full rounded-xl dark:bg-red-900 bg-indigo-400 hover:bg-red-700 transition-colors text-offwhite"
                onClick={() => setRestoreDialogOpen(false)} // Cerrar el diálogo
              >
                Cancelar
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Segundo Dialog */}
      <Dialog open={isAdditionalDialogOpen} onOpenChange={setAdditionalDialogOpen}>
        <DialogContent className="dark:bg-indigo-900 border-none rounded-xl dark:text-offwhite text-black">
          <DialogHeader>
            <DialogTitle>
              Guardar historia...
            </DialogTitle>
            <DialogDescription>
              <Label htmlFor="storyTitle">Escribe un titulo para la historia: </Label>
              <Input className="dark:bg-slate-800 border-0 rounded-xl" name="storyTitle" placeholder="Título"></Input>
              <span className="dark:text-red-400"><strong>IMPORTANTE!</strong><br></br> La historia se almacenará de manera local en el navegador.</span>
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <Button
                type="submit"
                className="py-2 px-6 cursor-pointer w-full rounded-xl dark:bg-violet-700 bg-indigo-400 hover:bg-violet-500 transition-colors text-offwhite"
                onClick={() => {
                  // Lógica para confirmar en el segundo diálogo
                  setAdditionalDialogOpen(false); // Cerrar el diálogo
                }}
              >
                Confirmar
              </Button>
            </DialogClose>
            <DialogClose asChild>
              <Button
                type="submit"
                className="py-2 px-6 cursor-pointer w-full rounded-xl dark:bg-red-900 bg-indigo-400 hover:bg-red-700 transition-colors text-offwhite"
                onClick={() => setAdditionalDialogOpen(false)} // Cerrar el diálogo
              >
                Cancelar
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </DropdownMenu>
  );
};

export default EditMenu;