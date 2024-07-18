import { generateText } from "ai"
import { apiKey } from "./types"
import { createOpenAI } from "@ai-sdk/openai"

if (!apiKey) {
        console.log()
        throw new Error("No hay variable de entornooooo" + apiKey)
    }

const perplexity = createOpenAI ({
    apiKey,
    baseURL: "https://api.perplexity.ai"
})

const model = perplexity('llama-3-sonar-small-32k-chat')


export async function createStory(genresList:FormDataEntryValue[],description:FormDataEntryValue | null){
    
    const prompt = `Eres un escritor de historia profesional. Crea una historia que contenga los siguientes géneros: ${genresList}. La descripción de la historia
    a realizar es la siguiente: ${description}. No escribas titulos, ni introducciones antes de la historia, ve directo a la historia y separala por parrafos cuando creas conveniente con etiquetas <br> de html.`
    console.log(prompt) 

    const { text } = await generateText({
        model,
        prompt
    })

    return text
}