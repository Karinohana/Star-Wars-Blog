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
                <div className = "start">
        <div className = "bodyimage"></div>
        <h1 className = "mx-3"><b className = "highlight">{planets !== null ? planets.name : " "} </b> Planet Details</h1>
        <h1 className = "mx-3">  Planet Climate <b className = "highlight">{planets !== null ? planets.climate : " "}</b></h1>
        <h1 className = "mx-3">  Planet Terrain <b className = "highlight">{planets !== null ? planets.terrain : " "}</b></h1>
        <h1 className = "mx-3">  Planet Population <b className = "highlight"> {planets !== null ? planets.population : " "}</b></h1>




</div>


        </>
    );
};