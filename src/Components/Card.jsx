import React from "react";
// import { useState,useEffect } from "react"; 

const Card=({pokemon,loading,infoPokemon})=>{

    // const [users, setUsers] = useState([])
    
    // const [pokeData, setPokeData]=useState([]);
    
    // const fetchData = async () => {
    //     const data = await (await fetch("https://pokeapi.co/api/v2/pokemon/")).json()
    //     setUsers(data["results"])
    // }

    // const getPokemon=async()=>{
    //     const res= await (await fetch("https://pokeapi.co/api/v2/pokemon/")).json();
    //     const result= res.results
    //     result.map(async(item)=>{
    //         const result=await (await fetch(item.url)).json()
    //         //console.log(result.data)
    //         setPokeData(state=>{
    //             state=[...state,result]
    //             state.sort((a,b)=>a.id>b.id?1:-1)
    //             return state;
    //         })
    //     })
    // }
    
    // useEffect(() => {
    //     getPokemon()
    // }, [])
    
    
    return(
        <>
            {
                loading ? <h1>Loading...</h1> : 
                pokemon.map((item)=>{
                        return(
                            <>
                            <div className="card" key={item.id} onClick={()=>infoPokemon(item)}>
                                <h2>{item.id}</h2>
                                <img src={item.sprites.front_default} alt="" />  
                                <h2>{item.name}</h2>
                            </div>
                            </>
                        )
                    })
            }
        </>
    )
}

export default Card;