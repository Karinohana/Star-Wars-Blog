import React, { useEffect, useState }from "react";
import { useParams } from "react-router-dom";
import { getSingleCharacter } from "./api";
import "../../styles/home.css";

export const SingleCharacter = () => {
const [character, setcharacter] = useState(null);
const params = useParams();

    useEffect( ()=> {
        const fn = async ()=> {
            const single = await getSingleCharacter(params.id);
            return setcharacter(single);

        };
        fn();
    },[]
    );
    return(
        <>
        <div className = "start">
        <div className = "bodyimage">
        </div>
        
        <h1 className = "mx-3"><b className = "highlight">{character !== null ? character.name : " "}</b> Details</h1>
        <h1 className = "mx-3"> Height <b className = "highlight">{character !== null ? character.height : " "}</b></h1>
        <h1 className = "mx-3"> Gender <b className = "highlight">{character !== null ? character.gender : " "}</b></h1>
        <h1 className = "mx-3"> Hair Color <b className = "highlight">{character !== null ? character.hair_color : " "}</b></h1>
        <h1 className = "mx-3"> Eye Color <b className = "highlight">{character !== null ? character.eye_color : " "}</b></h1>
        </div>
        </>
    );
};