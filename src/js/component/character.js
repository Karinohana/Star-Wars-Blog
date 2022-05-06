import React,{ useState, useEffect, useContext } from "react";
import { getAllCharacters } from "./api";
import {BiBookmarkHeart} from 'react-icons/bi';
import "../../styles/favorites.css";
import { FavoritesContext } from "./favorites";


export const Character = () => {
  const [apiCharacter, setapiCharacter] = useState([]);
  const [fav, setfav] = useState(false);
  const {favorites, setfavorites} = useContext(FavoritesContext);


  useEffect(()=>{
    const fn = async ()=> {
      const apcharacter = await getAllCharacters();
      return setapiCharacter(apcharacter);
    };
    fn();

    const favsList = (item)=>{
      const newlist = [...favorites + item ];
      setfavorites(newlist);
      return console.log(list.map((x,i)=> <li key={i}>{x}</li>));
  };

    const save = (item) => {
      let current = fav;
      return setfav( current !== false ? false:true), favsList(item);
  };

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
    <a href={"/character/"+ (i + 1)} className="btn btn-primary">Learn More</a>
    <BiBookmarkHeart onClick={()=> save(x.name)} className={fav === true ? "saveIcon save" : "saveIcon"}/>
  </div></div></div>)}
</div>
</div>
        </>
    );
};