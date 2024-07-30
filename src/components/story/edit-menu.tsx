import React, { useContext, useState } from "react";
import {
  MoreVertical as More,
  Edit2,
  Copy,
  LucideHistory as Restore,
  Save,
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
import { SaveContext } from "@/context/save-context";

const EditMenu = ({ edit, setEdit }: any) => {
  const { story, setStory } = useContext(SaveContext);
  const [isRestoreDialogOpen, setRestoreDialogOpen] = useState(false);
  const [isAdditionalDialogOpen, setAdditionalDialogOpen] = useState(false);
  const [Title, setTitle] = useState("")

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
          }}
          className="flex gap-4 hover:bg-indigo-500 self-start min-w-full min-h-full p-2 rounded-xl"
        >
          <Edit2 />
          Editar
        </DropdownMenuItem>

        <DropdownMenuItem
          onClick={async () => {
            try {
              await navigator.clipboard.writeText(
                story ?? "No se copió correctamente."
              );
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
          <Save />
          Guardar
        </DropdownMenuItem>
      </DropdownMenuContent>

      {/* Primer Dialog */}
      <Dialog open={isRestoreDialogOpen} onOpenChange={setRestoreDialogOpen}>
        <DialogContent className="dark:bg-indigo-900 border-none rounded-xl dark:text-offwhite text-black">
          <DialogHeader>
            <DialogTitle>
              Restaurarás la historia a su estado inicial
            </DialogTitle>
            <DialogDescription>
              Al confirmar, los cambios que hayas realizado anteriormente se
              revertirán y la historia volverá a como se generó. ¿Estás seguro?
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <Button
                type="submit"
                className="py-2 px-6 cursor-pointer w-full rounded-xl dark:bg-violet-700 bg-indigo-400 hover:bg-violet-500 transition-colors text-offwhite"
                onClick={() => {
                  const recovery: any = localStorage.getItem("storyRecovery");
                  setStory && setStory(recovery);
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
      <Dialog
        open={isAdditionalDialogOpen}
        onOpenChange={setAdditionalDialogOpen}
      >
        <DialogContent className="dark:bg-indigo-900 border-none rounded-xl dark:text-offwhite text-black">
          <DialogHeader>
            <DialogTitle>Guardar historia...</DialogTitle>
            <DialogDescription>
              <form onInput={(e:any)=>{
                e.preventDefault()
                const title = e.target.value
                setTitle(title)
              }}>
                <Label htmlFor="storyTitle">
                  Escribe un titulo para la historia:
                </Label>
                <Input
                  className="dark:bg-slate-800 border-0 rounded-xl"
                  name="storyTitle"
                  id="storyTitle"
                  placeholder="Título"
                ></Input>
                <span className="dark:text-red-400">
                  <strong>IMPORTANTE!</strong>
                  <br></br> La historia se almacenará de manera local en el
                  navegador.
                </span>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button
                      type="submit"
                      className="py-2 px-6 cursor-pointer w-full rounded-xl dark:bg-violet-700 bg-indigo-400 hover:bg-violet-500 transition-colors text-offwhite"
                      onClick={(e) => {
                        e.preventDefault()
                        if(Title === "") return

                        const StoryTitle = Title
                        const StoryContent = story
                        localStorage.setItem(`ls_${StoryTitle}`,StoryContent ?? "Historia no existente.")
                        console.log("Hecho")
                        setAdditionalDialogOpen(false); // Cerrar el diálogo
                      }}
                    >
                      Confirmar
                    </Button>
                  </DialogClose>
                  <DialogClose asChild>
                    <Button
                      className="py-2 px-6 cursor-pointer w-full rounded-xl dark:bg-red-900 bg-indigo-400 hover:bg-red-700 transition-colors text-offwhite"
                      onClick={() => setAdditionalDialogOpen(false)} // Cerrar el diálogo
                    >
                      Cancelar
                    </Button>
                  </DialogClose>
                </DialogFooter>
              </form>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </DropdownMenu>
  );
};

export default EditMenu;
