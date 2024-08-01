import { Dispatch, ReactNode, SetStateAction } from "react"

export const apiKey = process.env.PERPLEXITY_API_KEY

export interface SaveContextInterface {
    story: string,
    setStory: Dispatch<SetStateAction<string>>,
    loading: boolean,
    setLoading: Dispatch<SetStateAction<boolean>>,
    done: boolean,
    setDone: Dispatch<SetStateAction<boolean>>,
    edit: boolean,
    setEdit: Dispatch<SetStateAction<boolean>>,
    hide: boolean,
    setHide: Dispatch<SetStateAction<boolean>>
}

export type SaveProviderProps = {
    children: ReactNode
}


/*     const [loading, setLoading] = useState<boolean>(false);
    const [done, setDone] = useState<boolean>(false);
    const [edit, setEdit] = useState<boolean>(false);
    const [hide,setHide] = useState<boolean>(false); */