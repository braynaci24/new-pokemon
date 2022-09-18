/* https://pokeapi.co/api/v2/pokemon?limit=100 */
import React from "react"
import { useEffect, useState } from "react"
import axios from "axios"
import {
    Link,
  } from "react-router-dom";
const CardComponent = () => {

    const [pokemon, setPokemon] = useState([]);


    useEffect(()=> {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=32").then(res => {
            setPokemon(res.data.results);
        })
    }, [pokemon])


    return(
        <div className="card-container">
            {pokemon.map((item, index)=> (
                <Link className="pokemon" to={`pokemon/${item.name}`} key={index} >
                    <div className="card">
                        <img src={`https://img.pokemondb.net/artwork/large/${item.name}.jpg`} className="wh-100"  alt={`${item.name}`}/>
                        <h1>{item.name}</h1>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default CardComponent