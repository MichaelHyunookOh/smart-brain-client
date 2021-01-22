import React from 'react';
import './ImageLinkForm.css'


export default function ImageLinkForm () {
    return (
        <div>
            <p className='description'>
                {'This magic brain will detect faces in your pictures. Give it a try!'}
            </p>
            <div className='center detect-input'>
                <div className='pa4 br3 shadow-5 detect-input'>
                <input className='f4 pa2 w-70 center' type='text' />
                <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple center'>Detect</button>
                </div>
            </div>
        </div>
    );
}