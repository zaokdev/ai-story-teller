import { Dispatch, ReactNode, SetStateAction } from "react"

export const apiKey = process.env.PERPLEXITY_API_KEY

export interface SaveContextInterface {
    story: string,
    setStory: Dispatch<SetStateAction<string>>
}

export type SaveProviderProps = {
    children: ReactNode
}