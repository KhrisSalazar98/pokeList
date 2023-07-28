import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft, faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';

const Paginacion = ({pagina, setPagina, input, setInput, maximo}) => {

    const nextPage = () => {
        setInput (parseInt(input) + 1);
        setPagina (parseInt(pagina) + 1);
    };
    
    const previousPage = () => {
        setInput (parseInt(input) - 1);
        setPagina (parseInt(pagina) - 1);
    };
    
    return (
        <div className='d-flex justify-content-center align-items-center my-5'>
            <button className='border-0 me-2 btn_pag' disabled={pagina === 1 || pagina < 1} onClick={previousPage}>
                <FontAwesomeIcon size="xl" icon={faCircleArrowLeft} />
            </button>
            
            <span className='mx-1'>{input}</span>
            <span className='mx-1'>de</span>
            <span className='mx-1'>{Math.round(maximo)} </span>
            <button
                className='border-0 ms-2 btn_pag'
                disabled={pagina === Math.ceil (maximo) || pagina > Math.ceil (maximo)}
                onClick={nextPage}
            >
                <FontAwesomeIcon size="xl" icon={faCircleArrowRight} />
            </button>

        </div>
    )
}

export default Paginacion;