import React,{ useState, useEffect } from "react";
import { getAllCharacters } from "./api";

export const Character = () => {
  const [apiCharacter, setapiCharacter] = useState([]);

  useEffect(()=>{
    const fn = async ()=> {
      const apcharacter = await getAllCharacters();
      return setapiCharacter(apcharacter);
    };
    fn();

  },[]);
    return (
        <>
        <div className="container">
          <div>
            <h1>Character</h1>
          </div>
          <div className="row">
            { apiCharacter.map((x , i)=> <div  key = {i} className = "col"><div className="card" style={{width: "18rem"}}>
  <img src="https://lumiere-a.akamaihd.net/v1/images/r2-d2-main_f315b094.jpeg?region=429%2C0%2C538%2C536&width=320" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{x.name}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div></div></div>)}
</div>
</div>
        </>
    );
};