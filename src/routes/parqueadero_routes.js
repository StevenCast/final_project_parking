import { Router } from "express";
import {
  actualizarParqueadero,
  detalleParqueadero,
  //cambiarEstadoParqueadero,
  listarDisponibilidadParqueaderos,
  listarParqueaderos,
  registrarParqueadero,
} from "../controllers/parquedero_controller.js";

import verificarAdmin from "../middlewares/autenticacionAdmin.js";

const router = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Parqueadero:
 *       type: object
 *       required:
 *         - nombre
 *         - descripción
 *         - planta
 *         - bloque
 *         - tipo
 *       properties:
 *         _id:
 *           type: string
 *           description: ID del parqueadero
 *         nombre:
 *           type: integer
 *           description: Nombre en donde esta ubicado el parqueadero
 *         descripcion:
 *           type: string
 *           description: Descripción del parqueadero
 *         planta:
 *           type: string
 *           description: Piso del parqueadero
 *         bloque:
 *           type: string
 *           description: Lugar del parqueadero
 *         tipo:
 *           type: string
 *           description: Tipo de vehiculo ingresado
 *         disponibilidad:
 *           type: boolean
 *           description: Indica si el parqueadero está disponible
 *         estado:
 *           type: boolean
 *           description: Estado del parqueadero
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Fecha de creación
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Fecha de actualización
 *         __v:
 *           type: integer
 *           description: Versión del documento
 *       example:
 *         nombre: ESFOT
 *         descripcion: Parqueadero de la esfot
 *         planta: 1
 *         bloque: E1
 *         tipo: Automovil
 *         disponibilidad: true
 *         estado: true
 *         createdAt: 2022-01-01T00:00:00.000Z
 *         updatedAt: 2022-01-01T00:00:00.000Z
 *         __v: 0
 *
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */

/**
 * @swagger
 * tags:
 *   - name: Parqueaderos
 *     description: Operaciones relacionadas con parqueaderos
 */

/**
 * @swagger
 * /api/parqueaderos/registrar:
 *   post:
 *     summary: Registrar un nuevo parqueadero
 *     tags: [Parqueaderos]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Parqueadero'
 *           examples:
 *             nuevoParqueadero:
 *               value:
 *                 nombre: ESFOT
 *                 descripcion: Parqueadero de la esfot
 *                 planta: 1
 *                 bloque: E1
 *                 tipo: Automovil
 *     responses:
 *       200:
 *         description: Parqueadero registrado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: string
 *                   description: Mensaje de éxito
 *               example:
 *                 msg: Parqueadero registrado exitosamente
 *       400:
 *         description: Error al registrar parqueadero
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: string
 *                   description: Mensaje de error
 *             examples:
 *               validación incompleta:
 *                 value:
 *                   msg: Lo sentimos, debe llenar todos los campos
 *               Parqueadero ya registrado:
 *                 value:
 *                   msg: Lo sentimos, este parqueadero ya esta registrado
 *       404:
 *         description: token no valido
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: string
 *                   description: Mensaje de error
 *               example:
 *                  msg: Lo sentimos primero debe proporcionar un token
 */
router.post("/parqueaderos/registrar", verificarAdmin, registrarParqueadero);

/**
 * @swagger
 * /api/parqueaderos/disponibilidad:
 *   get:
 *     summary: Listar disponibilidad de parqueaderos
 *     tags: [Parqueaderos]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de parqueaderos disponibles
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Parqueadero'
 *
 *       203:
 *         description: Sin disponiblidad de parqueaderos
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: string
 *                   description: Mensaje de error
 *               example:
 *                  msg: Lo sentimos, por el momento no hay parqueaderos disponibles
 *       404:
 *         description: token no valido
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: string
 *                   description: Mensaje de error
 *               example:
 *                  msg: Lo sentimos primero debe proporcionar un token
 */
router.get(
  "/parqueaderos/disponibilidad",
  verificarAdmin,
  listarDisponibilidadParqueaderos
);

/**
 * @swagger
 * /api/parqueaderos:
 *   get:
 *     summary: Listar todos los parqueaderos
 *     tags: [Parqueaderos]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de todos los parqueaderos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Parqueadero'
 *       404:
 *         description: token no valido
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: string
 *                   description: Mensaje de error
 *               example:
 *                  msg: Lo sentimos primero debe proporcionar un token
 */
router.get("/parqueaderos", verificarAdmin, listarParqueaderos);

/**
 * @swagger
 * /api/parqueaderos/{id}:
 *   get:
 *     summary: Obtener detalles de un parqueadero específico
 *     tags: [Parqueaderos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del parqueadero
 *     responses:
 *       200:
 *         description: Detalles del parqueadero
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Parqueadero'
 *       404:
 *         description: token no valido
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: string
 *                   description: Mensaje de error
 *             examples:
 *               Token no valido:
 *                 value:
 *                   msg: Lo sentimos primero debe proporcionar un token
 *               Id inexistente:
 *                 value:
 *                   msg: El id que acaba de ingresar no existe
 */
router.get("/parqueaderos/:id", verificarAdmin, detalleParqueadero);

/**
 * @swagger
 * /api/parqueaderos/{id}:
 *   put:
 *     summary: Actualizar un parqueadero
 *     tags: [Parqueaderos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del parqueadero a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Parqueadero'
 *           examples:
 *             Actualizar parqueadero:
 *               value:
 *                 numero: 102
 *                 bloque: B
 *                 tipo: Automóvil
 *                 disponibilidad: false
 *                 dimensiones: 5x2
 *     responses:
*       200:
 *         description: Actualización exitosa
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: string
 *                   description: Mensaje de error
 *               example:
 *                  msg: Parqueadero actualizado con exito
 *       400:
 *         description: Error al actualizar el parqueadero
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: string
 *                   description: Mensaje de error
 *             examples:
 *               Id inexistente:
 *                 value:
 *                   msg: El id que acaba de ingresar no existe
 *               Validación incompleta:
 *                 value:
 *                   msg: Lo sentimos, debe llenar todos los campos
*       404:
 *         description: token no valido
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: string
 *                   description: Mensaje de error
 *               example:
 *                  msg: Lo sentimos primero debe proporcionar un token
 */
router.put("/parqueaderos/:id", verificarAdmin, actualizarParqueadero);

/**
 * @swagger
 * /api/parqueaderos/{id}:
 *   patch:
 *     summary: Cambiar el estado de un parqueadero
 *     tags: [Parqueaderos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del parqueadero a modificar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               estado:
 *                 type: boolean
 *                 description: Nuevo estado del parqueadero
 *             example:
 *               estado: true
 *     responses:
 *       200:
 *         description: token no válido
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: string
 *                   description: Mensaje de error
 *             example:
 *               msg: El estado del parqueadero ha sido actualizado con exito
 *       400:
 *         description: Parqueadero actualizado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: string
 *                   description: Mensaje 
 *             examples:
 *               Id inexistente:
 *                 value:
 *                   msg: El id que acaba de ingresar no existe
 *               Validación incompleta:
 *                 value:
 *                   msg: Lo sentimos, el campo no debe de estar vacio
 *       404:
 *         description: token no válido
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: string
 *                   description: Mensaje de error
 *             example:
 *               msg: Lo sentimos primero debe proporcionar un token
 */

//router.patch("/parqueaderos/:id", verificarAdmin, cambiarEstadoParqueadero);

export default router;
