import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios"
import ProgressBar from "./ProgressBar";

const CardDetail = () => {

    let { PokemonName } = useParams();
    const [pokemonDetail, setPokemonDetail] = useState([]);
    const [pokemonSpecies, setPokemonSpecies] = useState(null);

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${PokemonName}`).then(res => {
            setPokemonDetail(res.data)
        })
    }, [PokemonName])

    useEffect(() => {
        if(!pokemonDetail) return
        let url = pokemonDetail?.species?.url
        axios.get(url).then(res => {
            setPokemonSpecies(res.data)
        })
    }, [pokemonDetail])


    return(
        <div className="detail-content">
            <div className="flex-center-col">
                <h1>{pokemonDetail.name}</h1>
                <img src={pokemonDetail?.sprites?.other.dream_world.front_default} className="wh-100" alt="" />
            </div>
            <div className="progress-content">
                <div>
                    <span className="progress-bar-title">Stats</span>
                    {
                        pokemonDetail?.stats?.map(item => {
                            return(
                                <div key={item.stat.name}>
                                    
                                    <span>{item.stat.name}</span>
                                    <ProgressBar  value={item.base_stat}/>
                                </div>
                            )
                        })
                    }
                </div>
                <div>
                    <span className="progress-bar-title">Move</span>
                    {pokemonDetail?.moves?.map(move => {
                        return(
                            <div key={move.move.name}>
                                <span>{move.move.name}</span>
                            </div>
                        )
                    })}
                </div>
                <div>
                    <span className="progress-bar-title">Abilities</span>
                    {
                        pokemonDetail?.abilities?.map(ability => {
                            return(
                                <div key={ability.ability.name}>
                                        <div>
                                            <span>{ability.ability.name}</span>
                                        </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div>
                    <span className="progress-bar-title">Global Names</span>
                    {pokemonSpecies?.names?.map(names => {
                        return(
                                <span className="d-block" key={names.language.name}>
                                    {names.name}
                                </span>
                        )
                    })}
                </div>
                <div>
                    <span className="progress-bar-title">Base Happiness</span>
                    {
                                <ProgressBar value={pokemonSpecies && pokemonSpecies.base_happiness} />
                    }
                    <span className="progress-bar-title">Capture Rate</span>
                     {
                                <ProgressBar value={pokemonSpecies && pokemonSpecies.capture_rate} />
                    }
                    
                </div>
            </div>
        </div>
    )
}

export default CardDetail