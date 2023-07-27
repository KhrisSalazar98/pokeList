import React from 'react';
import imgLogo from '../assets/img/pokeList_img.png';

const Header = () => {
    return (
        <header className='py-3 d-flex justify-content-center align-items-center'>
            <img className='mb-2 me-2 imgLogo' src={imgLogo} alt="Logo" />
            <h1 className='text-center'>PokeList</h1>
        </header>
    )
}

export default Header;