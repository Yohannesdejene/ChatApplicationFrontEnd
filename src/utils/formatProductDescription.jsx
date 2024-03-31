
import TranslatedText from "../TranslatedText"


export const formatProductInstructions = (instructions_text) => {
    try {
        const parsed_text = JSON.parse(instructions_text);
        const formatted_text = parsed_text.map((text) => {
            return <li className="fs-sm">
                <TranslatedText text=  {text["data"].trim()}/> 
               </li>;
        })
        return formatted_text;
    } catch (error) {
        return "";
    }
}