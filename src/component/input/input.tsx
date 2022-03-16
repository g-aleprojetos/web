import * as React from 'react';
import './input.css'

interface Props{
    placeholder?:string;
    type?:string;
    setnome?:()=> void | ((e:any)=> void);
}

function Input(props:Props) {
    return(
        <input className='styleInput' type={props.type} placeholder={props.placeholder}/>
    );
};

export default Input;