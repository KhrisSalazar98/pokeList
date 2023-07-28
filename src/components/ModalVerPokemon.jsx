import React from 'react';
import { useSelector } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonArrowUpFromLine, faArrowsLeftRightToLine, faEye, faArrowUpRightDots, faHeart, faShieldHalved, faMeteor, faChildReaching, faAddressCard, faXmark, faDragon, faExplosion } from '@fortawesome/free-solid-svg-icons';

import {imgs} from '../assets/js/pokeImages';

const ModalVerPokemon = () => {

    const {searchData} = useSelector((state) => state.pokemon);

    // console.log(searchData);

    return (
        
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <h2 className="modal-title" id="exampleModalLabel"><span className='icon_modal_title'><FontAwesomeIcon icon={faAddressCard} /></span> Detalles de {searchData !== null && searchData.name}</h2>
                        <button type="button" className="bg-transparent border-0" data-bs-dismiss="modal" aria-label="Close">
                            <FontAwesomeIcon size="2xl" icon={faXmark} />
                        </button>
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


                                        <div className='d-flex justify-content-center mt-5'>
                                            <ul>
                                                <li className='mb-2'>Salud: <br className='br_stats'/><span className='color_hp txt_heigthWidth'><FontAwesomeIcon icon={faHeart} size="lg" /> {searchData.stats[0].base_stat}</span></li>
                                                <li className='mb-2'>Ataque: <br className='br_stats'/><span className='color_atk txt_heigthWidth'><FontAwesomeIcon icon={faMeteor} size="lg" /> {searchData.stats[1].base_stat}</span></li>
                                                <li className='mb-2'>Ataque Especial: <br className='br_stats'/><span className='color_esp_atk txt_heigthWidth'><FontAwesomeIcon icon={faExplosion} size="lg" /> {searchData.stats[3].base_stat}</span></li>
                                                <li className='mb-2'>Defensa: <br className='br_stats'/><span className='color_def txt_heigthWidth'><FontAwesomeIcon icon={faShieldHalved} size="lg" /> {searchData.stats[2].base_stat}</span></li>
                                                <li className='mb-2'>Defensa Especial: <br className='br_stats'/><span className='color_esp_def txt_heigthWidth'><FontAwesomeIcon icon={faShieldHalved} size="lg" /> {searchData.stats[4].base_stat}</span></li>
                                                <li className='mb-2'>Velocidad: <br className='br_stats'/><span className='color_velocidad txt_heigthWidth'><FontAwesomeIcon size="lg" icon={faDragon} /> {searchData.stats[5].base_stat}</span></li>
                                            </ul>
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
                                        <div className='text-center'>
                                            <img className='img_pokeList' src={imgs.filter((pokeImg) => pokeImg.name === searchData.name)[0].img} alt={searchData.name} />
                                        </div>
                                        <span>ID: {searchData.id}</span>
                                        <span>Nombre: {searchData.name}</span>   
                                    </div>
                                    
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