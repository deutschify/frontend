
import { AppContext } from "../../context/AppContext";
import axios from "axios";
import { MeaningList } from "./MeaningList";
import { Example } from "./Example";
import { Synonym } from "./Synonym";
import {Antonym} from "./Antonym";
import { useEffect, useState, useContext } from "react";
axios.defaults.baseURL = "https://api.dictionaryapi.dev/api/v2/entries/en";
export const ResultList = () => {
    const { inputValue } = useContext(AppContext);
    const [response, setResponse] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const fetchData = async (param) => {
        try {
            setLoading(true);
            const res = await axios(`/${param}`);
            setResponse(res.data);
            setError(null);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        if (inputValue.length) {
            fetchData(inputValue);
        }
    }, [inputValue]);
    console.log(response);
    if (loading) {
        return <h1>Loading...</h1>;
    }

    if (error) {
        return <h3>No Definitions Found 😥</h3>;
    }

    return (
        <div className="result-list ">
            {response && (
                <div className="meaning-definitions">
                    <h3>Meaning & Definitions</h3>
                    <MeaningList mean={response} />
                    <h3>Example</h3>
                    <Example mean={response} />
                    <h3>synonym</h3>
                    <Synonym mean={response} />
                    <h3>Antonym </h3>
                    <Antonym mean={response} />
                </div>
            )}
        </div>
    );
};
