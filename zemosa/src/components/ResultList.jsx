import { InputContext } from "../App";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
axios.defaults.baseUrl = "https://api.dictionaryapi.dev/api/v2/entries/en";
export const ResultList = () => {
    const { inputValue } = useContext(InputContext);
    const [response, setResponse] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const fetchData = async (param) => {
        try {
            setLoading(true);
            const res= await axios(`/${param}`);
            setResponse(res.data)
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
    console.log(response)

    return (
        <div className="result-list ">
            <div className="meaning-difinisions">
                <h3>Example</h3>
                <h3>synonym</h3>
                <h3>Antonym </h3>
            </div>
        </div>
    );
};
