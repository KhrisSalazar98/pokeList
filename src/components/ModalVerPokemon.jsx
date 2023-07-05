import React from 'react';
import { useSelector } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonArrowUpFromLine, faArrowsLeftRightToLine, faEye, faArrowUpRightDots, faHeart, faShieldHalved, faMeteor, faChildReaching, faAddressCard } from '@fortawesome/free-solid-svg-icons';

import {imgs} from '../assets/js/pokeImages';

const ModalVerPokemon = () => {

    const {searchData} = useSelector((state) => state.pokemon);

    return (
        
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <h2 className="modal-title" id="exampleModalLabel"><span className='icon_modal_title'><FontAwesomeIcon icon={faAddressCard} /></span> Detalles de {searchData !== null && searchData.name}</h2>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">

                        {searchData !== null && (
                            <>
                                <div className="row">

                                    {/* Aspecto */}
                                    <div className='col-12 col-sm-12 col-lg-6 mb-3'>
                                        <h3 className='mt-5 text-center color_principal'><FontAwesomeIcon icon={faEye} /> Aspecto</h3>
                                        <div className='d-flex justify-content-center'>
                                            <hr className='w-50 color_principal' />
                                        </div>

                                        <div id="carouselExampleAutoplaying" className="carousel slide my-4" data-bs-ride="carousel">
                                            <div className="carousel-inner">
                                                <div className="carousel-item active text-center">
                                                    <img src={searchData.sprites.other.home.front_default} className="" alt={searchData.name} />
                                                </div>
                                                <div className="carousel-item text-center">
                                                    <img src={searchData.sprites.front_default} className="" alt={searchData.name} />
                                                </div>
                                                <div className="carousel-item text-center">
                                                    <img src={searchData.sprites.back_default} className="" alt={searchData.name} />
                                                </div>
                                        
                                            </div>
                                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                                <span className="visually-hidden">Previous</span>
                                            </button>
                                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                                <span className="visually-hidden">Next</span>
                                            </button>
                                        </div>
                                    </div>

                                    {/* Estadísticas */}
                                    <div className='col-12 col-sm-12 col-lg-6 mb-3'>
                                        <h3 className='mt-5 text-center color_principal'><FontAwesomeIcon icon={faArrowUpRightDots} /> Estadísticas</h3>
                                        <div className='d-flex justify-content-center'>
                                            <hr className='w-50 color_principal' />
                                        </div>

                                        <div id="carouselExampleAutoplaying2" className="carousel slide my-4" data-bs-ride="carousel">
                                            <div className="carousel-inner">
                                                <div className="carousel-item active text-center color_hp">
                                                    <div className='stat d-flex justify-content-center align-items-center'>
                                                        <div>
                                                            <h4 className='text-center'>Salud</h4>
                                                            <span className='txt_heigthWidth'><FontAwesomeIcon icon={faHeart} size="xl" /> = {searchData.stats[0].base_stat}</span>
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                                <div className="carousel-item text-center color_atk">
                                                    <div className='stat d-flex justify-content-center align-items-center'>
                                                        <div>
                                                            <h4 className='text-center'>Ataque</h4>
                                                            <span className='txt_heigthWidth'><FontAwesomeIcon icon={faMeteor} size="xl" /> = {searchData.stats[1].base_stat}</span>
                                                        </div>
                                                        
                                                    </div>
                                                    
                                                </div>
                                                <div className="carousel-item text-center color_def">
                                                    <div className="stat d-flex justify-content-center align-items-center">
                                                        <div>
                                                            <h4 className='text-center'>Defensa</h4>
                                                            <span className='txt_heigthWidth'><FontAwesomeIcon icon={faShieldHalved} size="xl" /> = {searchData.stats[2].base_stat}</span>
                                                        </div>
                                                        
                                                    </div>
                                                    
                                                </div>
                                        
                                            </div>
                                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying2" data-bs-slide="prev">
                                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                                <span className="visually-hidden">Previous</span>
                                            </button>
                                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying2" data-bs-slide="next">
                                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                                <span className="visually-hidden">Next</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                

                                {/* Contextura */}
                                <h3 className='mt-5 text-center color_principal'><FontAwesomeIcon icon={faChildReaching} /> Contextura</h3>
                                <div className='d-flex justify-content-center'>
                                    <hr className='w-50 color_principal' />
                                </div>

                                <div className='row justify-content-center my-5'>
                                    <div className='col-12 col-sm-6 col-md-6 mb-3 d-flex justify-content-center flex-column'>
                                        <p className='d-flex justify-content-center txt_heigthWidth'><span className='me-2 color_principal'><FontAwesomeIcon icon={faPersonArrowUpFromLine} size="lg" /> Altura:</span> {searchData.height}</p>
                                        <p className='d-flex justify-content-center txt_heigthWidth'><span className='me-2 color_principal'><FontAwesomeIcon icon={faArrowsLeftRightToLine} size="lg" /> Ancho:</span> {searchData.weight}</p>
                                    </div>

                                    <div className='col-12 col-sm-6 col-md-6 mb-3 d-flex justify-content-center flex-column'>
                                        <img className='img_pokeList' src={imgs.filter((pokeImg) => pokeImg.name === searchData.name)[0].img} alt={searchData.name} />
                                        <span>ID: {searchData.id}</span>
                                        <span>Nombre: {searchData.name}</span>   
                                    </div>
                                    
                                </div>


                                <div className='mt-5 mb-3 text-end'>
                                    <button type="button" className="px-2 px-sm-3 py-sm-2 rounded-pill btn_cerrar" data-bs-dismiss="modal">Cerrar</button>
                                </div>

                                
                            
                            </>
                        )}
                        
                        
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default ModalVerPokemon;