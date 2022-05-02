import React, { useEffect } from "react";
import Card from "./Card";
import Pokeinfo from "./Pokeinfo";
import axios from "axios";
import { useState } from "react"; 

const Main=()=>{
    const [pokeData, setPokeData]=useState([]);
    const [loading, setLoading]=useState(true);
    const [url, setUrl]=useState("https://pokeapi.co/api/v2/pokemon/")
    const [nextUrl,setNextUrl]=useState();
    const [prevUrl,setPrevUrl]=useState();
    const [pokeDex, setPokeDex]=useState();

    const pokeFun=async()=>{
        setLoading(true)
        const res= await (await axios.get(url)).data;
        //console.log(res.data.results);
        setNextUrl(res.next);
        setPrevUrl(res.previous);
        getPokemon()
        setLoading(false)
        //console.log(pokeData)
    }
    const getPokemon=async()=>{
        const res= await (await axios.get(url)).data;
        // const result= res.results
        res.results.map(async(item)=>{
            const result=await (await axios.get(item.url)).data
            //console.log(result.data)
            setPokeData(state=>{
                state=[...state,result]
                state.sort((a,b)=>a.id>b.id?1:-1)
                return state;
            })
        })
    }
    useEffect(()=>{
        pokeFun();
    },[url])
    return(
        <>
        <div className="container">
            <div className="left-content">
                <Card pokemon={pokeData} loading={loading} infoPokemon={poke=>setPokeDex(poke)}/>
                <div className="btn-group">
                {    prevUrl && <button onClick={()=>{
                        setPokeData([])
                        setUrl(prevUrl);
                    }}>Previous</button>
                }
                {    nextUrl && <button onClick={()=>{
                        setPokeData([])
                        setUrl(nextUrl);
                    }}>Next</button>
                }
                </div>
            </div>
            <div className="right-content">
                <Pokeinfo data={pokeDex}/>
            </div>
        </div>
        </>
    )
}

export default Main;