import './footer.scss';
import React,{useState} from 'react'
import {FaLinkedin} from 'react-icons/fa'
import {FaWhatsapp} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'

export default function () {

    const [name,setName] =useState('') 
    const [email,setEmail] =useState('')
    const [msg,setMsg] =useState('') 
    
    return (
        <footer>
            <div className='formContainer'>
                <form className='formFeedback' id='contacts'>
                    <h3>Fale Comigo</h3>
                    <h5>Resta alguma dúvida? Preencha os campos abaixo com os seguintes dados que em breve entraremos em contato.</h5>
                        <label htmlFor='name' >Nome:</label>
                        <input maxLength='70' required type='text' value={name} onChange={e=> setName(e.target.value)} name='name' />
                        <label  htmlFor='email'>Email:</label>
                        <input maxLength='70' required type='email' value={email} onChange={e=> setEmail(e.target.value)} name='email' />
                        <label htmlFor='comments'>Mensagem:</label>
                        <textarea maxLength='400' required type='text' value={msg} onChange={e=> setMsg(e.target.value)} name='comments'></textarea>
                    <button type='submit' >Enviar</button>
                </form>
                    <div className='networks'>
                    <h3>Redes Sociais</h3>
                        <ul className='contacts'>
                            <li><a href='https://github.com/lucasecp' target='_blank'  rel="noopener noreferrer"><FaGithub className='contact-img github' color='black'/>github.com/lucasecp</a></li>
                            <li><a href='https://api.whatsapp.com/send?phone=5521993371281'  rel="noopener noreferrer" target='_blank'><FaWhatsapp className='contact-img' color='#32CD32 '/>(21) 9 9337-1281</a></li>
                            <li><a href='https://www.linkedin.com/in/lucas-emerson/'  rel="noopener noreferrer" target='_blank'><FaLinkedin className='contact-img' color=' #2867B2'/>linkedin.com/in/lucas-emerson/</a></li>
                        </ul>
                </div>
            </div>
        </footer>
    )
}