import React from 'react';

interface Props{
    name?:string;
    children:string;
    cor?:string;
    type?: "button" | "submit" | "reset" | undefined;
}

function Botao({children,...props}:Props) {
    return(
        <button 
        className='styleButton' 
        color={props.cor} 
        type={props.type} 
        name={props.name}
        >{children}</button>
    );
};

export default Botao;