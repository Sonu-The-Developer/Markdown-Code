import React, { useState } from 'react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

import './md_project.css';
import Save_Data from './save';

const Md_Project = () =>{
    let values ;
    if(localStorage.getItem("input") == null){
        values = "Input";
    }
    else{
        values = localStorage.getItem("input");
    }
    console.log(values);
    let [markDown, setMarkDown] = useState("Output");
    return(
        <div className='center-div'>
            <textarea 
            className='left-side'
            onChange={ (e) => setMarkDown(e.target.value) }>{values}</textarea>

            <div className='right-side'><ReactMarkdown>{ markDown }</ReactMarkdown></div>
        </div>
    );
}

export default Md_Project;





