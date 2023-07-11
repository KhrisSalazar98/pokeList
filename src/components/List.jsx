import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import { verPokemon, verDetallesPokemon, searchResult } from "../redux/features/pokemon/pokemonSlice";


import Loading from '../components/Loading';

import {imgs} from "../assets/js/pokeImages";
import ModalVerPokemon from './ModalVerPokemon';
import Paginacion from './Paginacion';

const List = () => {

    const [search, setSearch] = useState("");

    const dispatch = useDispatch();

    const {pokemonData, loading, searchList} = useSelector((state) => state.pokemon);

    useEffect(() => {
        dispatch(verPokemon());
    }, [dispatch]);


    const handleViewPokemon = (name) => {
        dispatch(verDetallesPokemon(name));
    }

    const [pagina, setPagina] = useState(1);
    const [porPagina, setPorPagina] = useState(9);

    let maximo = pokemonData.length / porPagina;
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        dispatch(searchResult(search));
    }

    const longitudFilter = () => pokemonData.filter((pokemon) => pokemon.name.toLowerCase().includes(searchList.toLowerCase())).length

    return (
        <>
            
            {loading ? (
                <Loading />
            ):
                <>
                   
                    <div className='container my-5'>

                        <div className='my-5'>
                            <form onSubmit={handleSubmit}>
                                <input onChange={(e) => setSearch(e.target.value)} className="border-0 px-2 px-sm-3 py-2 rounded-start input_search" type="text" placeholder='Buscar por nombre' />
                                <button type='submit' className='border-0 px-2 px-sm-3 py-2 rounded-end btn_search'><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                            </form>
                        </div>
                        <br />

                        <div className='row mt-5'>

                            {pokemonData &&

                                pokemonData
                                .filter((pokemon) => {
                                    if (searchList.length === 0) {
                                        return pokemon;
                                    } else {

                                        if(longitudFilter() <= 9){
                                            maximo = 1;
                                        }
                                
                                        if(longitudFilter() > 9 && longitudFilter() < 19) {
                                            maximo = 2;
                                        }
                                        
                                        if(longitudFilter() > 18 && longitudFilter() < 28) {
                                            maximo = 3;
                                        }

                                        if(longitudFilter() > 27 && longitudFilter() < 37) {
                                            maximo = 4;
                                        }

                                        if(longitudFilter() > 36 && longitudFilter() < 46) {
                                            maximo = 5;
                                        }

                                        if(longitudFilter() > 45 && longitudFilter() < 55) {
                                            maximo = 6;
                                        }

                                        if(longitudFilter() > 54 && longitudFilter() < 64) {
                                            maximo = 7;
                                        }

                                        return pokemon.name
                                        .toLowerCase()
                                        .includes(searchList.toLowerCase());
                                    }
                                })
                                .slice(
                                    (pagina - 1) * porPagina,
                                    (pagina - 1) * porPagina + porPagina
                                ).map((pokemon, index) => (
                                    
                                    <div key={index} className='col-6 col-sm-6 col-md-4 mb-4'>
                                       
                                        <div className='rounded-3 pokeCard py-2'>
                                            <h3 className='text-center py-3 pokeName_title'>{pokemon.name}</h3>
                                            <div className='text-center'>
                                                <img className='img_pokeList' src={imgs.filter((pokeImg) => pokeImg.name === pokemon.name)[0].img} alt={pokemon.name} />
                                            </div>
                                            <div className='my-4 text-center'>
                                                <button onClick={() => handleViewPokemon(pokemon.name)} className='px-2 px-sm-3 py-sm-2 rounded-pill btn_verPokemon' type="button" data-bs-toggle="modal" data-bs-target="#exampleModal"><span className='span_icon'><FontAwesomeIcon icon={faEye} /></span> <span className='span_txtBtnVerPokemon'>Ver Pokemon</span></button>
                                            </div>
                                        </div>
                                
                                    </div>
                                    
     
                                ))
                                
                            }
                        
                        </div>

                    </div>
                            
                    {
                        
                        console.log("Longitud "+pokemonData.filter((pokemon) => pokemon.name.toLowerCase().includes(searchList.toLowerCase())).length)

                        
                        
                    }

                    <Paginacion pagina={pagina} setPagina={setPagina} maximo={maximo} />
                    <ModalVerPokemon />


                </>
                
            }
        </>
    )
}

export default List;