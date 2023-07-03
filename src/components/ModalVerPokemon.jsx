import React from 'react';
import { useSelector } from 'react-redux';

const ModalVerPokemon = () => {

    const {searchData} = useSelector((state) => state.pokemon);
    
    return (
        
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Detalles de {searchData !== null && searchData.name}</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">

                        {searchData !== null && (
                            <h2 className='mb-4'>{searchData.name}</h2> 
                        )}
                        
                        
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalVerPokemon;