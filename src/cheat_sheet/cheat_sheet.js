import React from 'react';

import './cheat_sheet.css';

function Cheat_Sheet(){
    return(
        <div>
            <div className='shcart_sheet'>
                <div className='shcart_sheet_text'>Normal Text</div>
                <div className='shcart_sheet_text'> <span>#</span> Heading Text</div>
                <div className='shcart_sheet_text'> <span>*</span>Bold Text<span>*</span></div>
                <div className='shcart_sheet_text'> <span>**</span>Red Colour Text<span>**</span></div>
                <div className='shcart_sheet_text'> <span>***</span>Underline Text<span>***</span></div>
            </div>
        </div>
    );
}

export default Cheat_Sheet;