import { createContext, useEffect, useState } from "react";
import axios from "axios";
// import QuestionDE from "../data/einbuergerungstestJSON/einbuergerungstestDeutschland";


export const AppContext = createContext();

// APIs for getting and translating languages
const languagesUrl = "https://libretranslate.de/languages";
const translateUrl = "https://libretranslate.de/translate";

export const AppProvider = ({ children }) => {
    const [languages, setLanguages] = useState([]);
    const [defaultLanguage, setDefaultLanguage] = useState("de");
    const [translatedLanguage, setTranslatedLanguage] = useState([]);
    const [text, setText] = useState("");
    const [translatedText, setTranslatedText] = useState([]);

    // These are for dictionary state variables that
    const [inputValue, setInputValue] = useState("");
    // const value = { inputValue, setInputValue };

    // If someone isn't logged in, then they should have limited access to the site
    const [ isLoggedIn, setIsLoggedIn] = useState(false);

    // we are putting the list of languages we get from the API into the state variable of [languages, setLanguages]
    useEffect(() => {
        (async () => {
            setLanguages((await axios.get(languagesUrl)).data, {
                headers: { accept: "application/json" },
            });
        })();
    }, []);

    //This is a function for translating the language
    const translate = async (textArr) => {
        const params = new URLSearchParams();
        const text = textArr.join('>');
        setText(text)
        // setTranslatedLanguage()
        params.append("q", text);
        params.append("source", defaultLanguage);
        params.append("target", translatedLanguage);
        params.append("format", "text");
        params.append("api_key", "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx");

        // We set the translated text into the state variable of [translatedText, setTranslatedText]
        setTranslatedText(
            (
                await axios.post(translateUrl, params, {
                    headers: {
                        accept: "application/json",
                        "Content-Type": "application/x-www-form-urlencoded",
                    },
                })
            ).data.translatedText.split(">")
        );
    };

    return (
        <AppContext.Provider
            value={{
                setLanguages,
                languages,
                defaultLanguage,
                setDefaultLanguage,
                setTranslatedLanguage,
                translatedLanguage,
                text,
                setText,
                translatedText,
                setTranslatedText,
                translate,
                inputValue, setInputValue,
                isLoggedIn, 
                setIsLoggedIn
            }}
        >
            {children}
        </AppContext.Provider>
    );
};
