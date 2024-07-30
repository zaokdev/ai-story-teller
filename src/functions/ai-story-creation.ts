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

const model = perplexity('llama-3-sonar-large-32k-chat')


export async function createStory(genresList:FormDataEntryValue[],description:FormDataEntryValue | null){
    
    const prompt = `Genera una historia que combine los siguientes géneros de manera creativa y original: ${genresList}. La historia debe seguir la siguiente descripción: ${description}. Escribe la historia directamente sin títulos o introducciones, separándola en párrafos para facilitar la lectura. Asegúrate de que la historia tenga un principio, desarrollo y final coherentes. Evita repetir frases o párrafos enteros. Usa un lenguaje descriptivo y evocador para sumergir al lector en la narrativa. Incluye diálogos entre personajes si es apropiado para el género. Crea un ambiente y atmósfera que se ajuste a los géneros seleccionados. Hazla interesante, con giros inesperados y un final satisfactorio. Muestra, no digas, permitiendo que las acciones y diálogos revelen la personalidad de los personajes. Mantén un ritmo ágil y evita descripciones innecesariamente largas. Asegúrate de que la historia tenga un tema o mensaje subyacente. Haz que los personajes sean creíbles y que el lector se preocupe por ellos. Termina la historia de una manera memorable que deje al lector pensando. Sé creativo y no temas tomar riesgos para hacer que la historia destaque.`
    console.log(prompt)
    const { text } = await generateText({
        model,
        prompt
    })

    return text
}