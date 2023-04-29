import './save_btn.css';
import Save_Data from '../md_editor/save';

const Save_Btn = () => {
    return(
        <div onClick={Save_Data} className='button'>save</div>
    )
}

export default Save_Btn;