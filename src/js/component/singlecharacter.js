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
    <div></div>
        <div>
        <h1> <b> { character !== null ? character.name : " " }</b> Details</h1>
        <div>
        <img src={character !== null ? character.image2 : " " } className="lol" />
        <h3> <b >{ character !== null ? character.description : " " }</b> </h3>
        <br></br>
        </div>
        </div>
        </>
    );
};