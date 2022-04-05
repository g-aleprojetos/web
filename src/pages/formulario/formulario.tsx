import * as React from 'react';
import './formulario.css';
import Botao from '../../component/botao';
import Input from '../../component/input';
import TextArea from '../../component/textArea';

function Formulario() {
    return (
        <form className='styleForm'>
            <Input placeholder='nome' />
            <Input placeholder='sobrenome' />
            <TextArea name='comentario' placeholder="Deixe seu comentário..." rows={5} cols={50} />

            <Botao type="submit" name="submit">ENVIAR</Botao>
        </form>
    );

}

export default Formulario;