import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

import { verPokemon, verDetallesPokemon } from "../redux/features/pokemon/pokemonSlice";


import Loading from '../components/Loading';

import {imgs} from "../assets/js/pokeImages";
import ModalVerPokemon from './ModalVerPokemon';

const List = () => {

    const dispatch = useDispatch();

    const {pokemonData, loading} = useSelector((state) => state.pokemon);

    useEffect(() => {
        dispatch(verPokemon());
    }, [dispatch]);


    const handleViewPokemon = (name) => {
        dispatch(verDetallesPokemon(name));
    }
    

    return (
        <>
            {loading ? (
                <Loading />
            ):
                <>
            
                    <div className='container my-5'>
                        <div className='row mt-5'>
                            {pokemonData.map((pokemon, index) => (
                                <div key={index} className='col-6 col-sm-6 col-md-4 mb-4'>
                                    <div className='rounded-3 pokeCard py-2'>
                                        <h3 className='text-center py-3 pokeName_title'>{pokemon.name}</h3>
                                        <div className='text-center'>
                                            <img className='img_pokeList' src={imgs[index]} alt={pokemon.name} />
                                        </div>
                                        <div className='my-4 text-center'>
                                            <button value={pokemon.name} onClick={(e) => handleViewPokemon(e.target.value)} className='px-3 py-2 rounded-pill btn_verPokemon' type="button" data-bs-toggle="modal" data-bs-target="#exampleModal"><FontAwesomeIcon icon={faEye} /> Ver Pokemon</button>
                                        </div>
                                    </div>
                                
                                </div>
                            
     
                            ))}
                        
                        </div>

                    </div>

                    <ModalVerPokemon />

                </>
                
            }
        </>
    )
}

export default List;