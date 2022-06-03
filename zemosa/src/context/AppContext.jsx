import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AppContext = createContext();
// 
const languagesUrl = "https://libretranslate.de/languages";
const translateUrl = "https://libretranslate.de/translate";

export const AppProvider = ({ children }) => {
    const [languages, setLanguages] = useState([]);
    const [defaultLanguage, setDefaultLanguage] = useState("de");
    const [translatedLanguage, setTranslatedLanguage] = useState("en");
    const [text, setText] = useState("prüfung");
    const [translatedText, setTranslatedText] = useState("");

    useEffect(() => {
        (async () => {
            setLanguages((await axios.get(languagesUrl)).data, {
                headers: { accept: "application/json" },
            });
        })();
    }, []);

    const translate = async () => {
        const params = new URLSearchParams();
        params.append("q", text);
        params.append("source", defaultLanguage);
        params.append("target", translatedLanguage);
        params.append("format", "text");
        params.append("api_key", "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx");

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
