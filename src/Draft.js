import React from 'react';

import Project_Name from './p_name/project_name';
import Cheat_Sheet from './cheat_sheet/cheat_sheet';
import Md_Project from './md_editor/md_project';

import Save_Btn from './save_btn/save_btn';
import Footer from './footer/footer';

import './Draft.css';
import Save_Data from './md_editor/save';

const Draft = () => {
    return(
        <div>
            <div className='header'>
                <Project_Name />
                <Save_Btn />
            </div>

            <classes />
            <Md_Project />

            <Footer />
        </div>
    );
}

export default Draft;