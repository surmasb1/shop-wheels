import React from 'react';
import preloader from "../../../images/preloader.svg";
import Button from '@material-ui/core/Button';

let Preloader = (props) => {
    return <div  style={ { backgroundColor: 'white' } }>
        <img src={preloader} alt={'sfdsfsd'}/>
    </div>
}

export default Preloader;