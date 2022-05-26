import React, { useEffect, useState }from "react";
import { useParams } from "react-router-dom";
import { getSinglePlanet } from "./component/api";


export const SinglePlanet = () => {
const [planets, setplanets] = useState(null);
const params = useParams();

    useEffect( ()=> {
        const fn = async ()=> {
            const single = await getSinglePlanet(params.id);
            return setplanets(single);

        };
        fn();
    },[]
    );
    return(
        <>
    <div>hello</div>
        <div>
        <h1> <b> { planets !== null ? planets.name : " " }</b> Details</h1>
        <div>
        <img src={planets !== null ? planets.image2 : " " } className="lol" />
        <h3> <b >{ planets !== null ? planets.description : " " }</b> </h3>
        <br></br>
        </div>
        </div>
        </>
    );
};