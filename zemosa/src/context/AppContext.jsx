import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AppContext = createContext();

// APIs for getting and translating languages
const languagesUrl = "https://libretranslate.de/languages";
const translateUrl = "https://libretranslate.de/translate";

export const AppProvider = ({ children }) => {
    const [languages, setLanguages] = useState([]);
    const [defaultLanguage, setDefaultLanguage] = useState("de");
    const [translatedLanguage, setTranslatedLanguage] = useState("en");
    const [text, setText] = useState("Ich habe eine prüfung");
    const [translatedText, setTranslatedText] = useState("");

    // we are putting the list of languages we get from the API into the state variable of [languages, setLanguages]
    useEffect(() => {
        (async () => {
            setLanguages((await axios.get(languagesUrl)).data, {
                headers: { accept: "application/json" },
            });
        })();
    }, []);

    //This is a function for translating the language
    const translate = async () => {
        const params = new URLSearchParams();
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
            ).data.translatedText
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
                translatedText,
                setTranslatedText,
                translate,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};
