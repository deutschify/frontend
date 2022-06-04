import React from "react";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { AiFillQuestionCircle } from "react-icons/ai";

export const Test = () => {
    const { text, translate, translatedText } = useContext(AppContext);

    return (
        <div>
            <div>
                {text} <AiFillQuestionCircle onClick={(e) => translate()} />
            </div>
            <p>{translatedText}</p>
        </div>
    );
};
