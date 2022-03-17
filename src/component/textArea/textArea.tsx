import * as React from 'react';
import './textArea.css'

interface Props {
name?:string;
placeholder?:string;
rows?:number;
cols?:number;
}

function TextArea({name,...props}:Props) {
    return (
        <textarea className='styleTextArea' name={name} placeholder={props.placeholder} rows={props.rows} cols={props.cols}/>
    );
}

export default TextArea