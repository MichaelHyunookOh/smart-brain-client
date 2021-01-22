import React from 'react';
import brain from './brain.png'
import './Logo.css'


export default function Logo () {
    return (
        <div className='ma4 mt0'>
            <div className="Logo">
                <div className="brain-logo"> <img className="brain-logo-img shadow-2" src={brain} alt="brain-logo"></img> </div>
            </div>
        </div>
    );
}

