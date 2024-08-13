import mongoose from "mongoose"

const parqueaderoSchema = new mongoose.Schema({
    nombre: {
        type: String,
        require: true,
        default: false
    },
    description: {
        type: String,
        require: true
    },
    planta: {
        type: String,
        require: true
    },
    bloque: {
        type: String,
        require: true
    },
    tipo: {
        type: String,
        require: true
    },
    disponibilidad: {
        type: Boolean,
        require: true
    },
    
    
    estado: {
        type: Boolean,
        require: true,
        default: true
    }
}, {
    timestamps: true
})


export default mongoose.model("Parqueaderos", parqueaderoSchema)