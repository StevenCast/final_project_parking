import logoDog from '../assets/images/moto.png'
import {Link} from 'react-router-dom'

import { useState,useEffect } from 'react'

//
import { useParams } from 'react-router-dom';
import axios from 'axios';
//import Mensaje from '../componets/Alertas';


export const Confirmar = () => {
    //Capturar el token de la URL
    const { token } = useParams();
    //Para mostrar los mensajes de alerta
    const [mensaje, setMensaje] = useState({})
    const verifyToken = async()=>{
        try {
            //URL backend
            const url = `${import.meta.env.VITE_BACKEND_URL1}usuarios/confirmar-email/${token}`
            //Capturamos la respuesta
            const respuesta = await axios.get(url)
            //Setear en el state mensaje
            setMensaje({respuesta:respuesta.data.msg,tipo:true})
        } catch (error) {
            //seteamos el error
            setMensaje({respuesta:error.response.data.msg,tipo:false})
        }
    }
    //Permite ejecutar efectos secuendarios por lo que 
    useEffect(() => {
        verifyToken()
    }, [])
    return (
        
        <div className="flex flex-col items-center justify-center">
            //{Object.keys(mensaje).length>0 && <Mensaje tipo={mensaje.tipo}>{mensaje.respuesta}</Mensaje>}
            <img class="object-cover h-80 w-80 rounded-full border-4 border-solid border-slate-600" src={logoDog} alt="image description"/>

            <div className="flex flex-col items-center justify-center">
                <p className="text-3xl md:text-4xl lg:text-5xl text-gray-800 mt-12">Muchas Gracias</p>
                <p className="md:text-lg lg:text-xl text-gray-600 mt-8">Ya puedes iniciar sesión</p>
                <Link to="/login" className="p-3 m-5 w-full text-center bg-gray-600 text-slate-300 border rounded-xl hover:scale-110 duration-300 hover:bg-gray-900 hover:text-white">Login</Link>
            </div>

        </div>
    )
}
