import { Router } from "express";
import {createTipoEquipo, deleteTipoEquipo, editTipoEquipo,renderTipoEquipo,updateTipoEquipo} from "../controllers/tipoEquipos.js";
import {createEstadoEquipo, deleteEstadoEquipo, editEstadoEquipo, renderEstadoEquipo, updateEstadoEquipo} from "../controllers/estadoEquipo.js";
import {renderInventario, createInventario, editInventario, updateInventario, deleteInventario} from "../controllers/inventario.js";
import {borrarUsuario, crearUsuario, editUsuario, renderUsers, updateUsuario} from '../controllers/usuarios.js'


import { createMarca,deleteMarca,editMarca,updateMarca,renderMarcas } from "../controllers/marca.js"


const router = Router();



//Rutas para el tipo equipo
router.get("/tipo_equipos", renderTipoEquipo);
router.post("/addTipo_equipos", createTipoEquipo);
router.get("/updateTipo_equipos/:id", editTipoEquipo);
router.post("/updateTipo_equipos/:id", updateTipoEquipo);
router.get("/deleteTipo_equipos/:id", deleteTipoEquipo);

//Rutas para el estado equipo
router.get("/estado_equipos", renderEstadoEquipo);
router.post("/addEstado_equipos", createEstadoEquipo);
router.get("/updateEstado_equipos/:id", editEstadoEquipo);
router.post("/updateEstado_equipos/:id", updateEstadoEquipo);
router.get("/deleteEstado_equipos/:id", deleteEstadoEquipo);

//Rutas para los usuarios
router.get("/usuarios", renderUsers);
router.post("/usuarios", crearUsuario);
router.get("/updateUsuario/:id", editUsuario);
router.post("/updateUsuario/:id", updateUsuario);
router.get("/deleteUsuario/:id", deleteTipoEquipo);

//Rutas para la marca
router.get("/marcas", renderMarcas);
router.post("/addMarca", createMarca);
router.get("/updateMarca/:id", editMarca);
router.post("/updateEstado_marcas/:id", updateMarca);
router.get("/deleteMarca/:id", deleteMarca);

//Rutas para el Inventarios
router.get("/inventarios", renderInventario);
router.post("/addInventario", createInventario);
router.get("/updateInventario/:id", editInventario);
router.post("/updateInventario/:id", updateInventario);
router.get("/deleteInventario/:id", deleteInventario);

export default router;