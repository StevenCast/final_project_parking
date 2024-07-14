import nodemailer from "nodemailer"
import dotenv from "dotenv"
dotenv.config()

const transporter = nodemailer.createTransport({
    service: "gmail",
    host: process.env.HOST_MAILTRAP,
    port: process.env.PORT_MAILTRAP ,  
    auth:{
        user: process.env.USER_MAILTRAP,
        pass: process.env.PASS_MAILTRAP
    }
})


const enviarCorreoUsuario = (correoUsuario, token) =>{
    let opcionesCorreo ={
        from: process.env.USER_MAILTRAP,
        to: correoUsuario,
        subject: "Verifica tu cuenta",
        html: `<p>Hola, haz click en este <a href=${process.env.URL_BACKEND}confirmar-email/${encodeURIComponent(token)}>enlace</a> para verificar tu cuenta </p>`
    }

    transporter.sendMail(opcionesCorreo, function(err, info){
        if(err) {
            console.log(err)
        } else {
            console.log("Correo enviado: ",info.response)
        }
    })
}


const enviarRestablecimientoContraseña = async(correoUsuario, token)=>{
    let opcionesCorreo = await transporter.sendMail({
      from: process.env.USER_MAILTRAP,
      to: correoUsuario,
      subject: "Recupera tu Contraseña",
      html: `<h1>Sistema de gestión</h1>
      <hr>
      <p>Haz click <a href=${process.env.URL_BACKEND}recuperar-password/${token}>aqui</a> para restablecer tu contraseña</p>`  
    })
    console.log("Mensaje enviado satisfactoriamente", opcionesCorreo.messageId)

}




export {enviarCorreoUsuario, enviarRestablecimientoContraseña}