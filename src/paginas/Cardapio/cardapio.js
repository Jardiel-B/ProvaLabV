// import Input from "../../components/Input/Input.js";
import Cards from "../../components/Cards/Cards.js";
import { useState, useEffect } from "react";
import React from "react";

const Cardapio = () => {

// const [valor, setValor] = useState('')

const [lanches, setLanches] = useState([]);

const fetchLanches = async () => {
       const response = await fetch('http://localhost:8000/lanches',
       {
        method: "get",
        // headers: {
        //     "Access-Control-Allow-Origin": "*",
        //     'Access-Control-Request-Method': 'GET, POST, DELETE, PUT, OPTIONS'
        // }
       })
       const data = response.json()
       console.log(data)
       setLanches(data)
   }

useEffect(() => {
       fetchLanches();
   }, [])


    return (   
       <div>
           {lanches.map((lanche) => (
                  <Cards nome = {lanche.nome} ingredientes = {lanche.ingredientes}/>
              ))}
       {/*  <main>
             <Input value={valor} onInput={setValor} tipo="text" label="Nome" placeholder="Procure um lanche"/>
             <p>{valor}</p> */}
{/*           <Cards nome1="Bauru" ingredientes1="Pão, 2 fatias de queijo mussarela, 2 fatias de presunto, alface e tomate" 
              nome2="Misto" ingredientes2="Pão, 1 fatai de queijo e 1 fatia de presunto" 
              nome3="Burguer duplo" ingredientes3="Pão, 2 hamburgueres, 2 fatias de queijo mussarela, 2 fatias de presunto, alface e tomate"/>

              <Cards nome1="..." ingredientes1="Pão..." 
              nome2="..." ingredientes2="Pão..." 
              nome3="..." ingredientes3="Pão..."/>        */}
       </div>     
    )
};

export default Cardapio;