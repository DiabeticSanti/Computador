import { pool } from "../db.js";


export async function renderUsers(req, res) {
  const [ rows ] = await pool.query("SELECT * from usuario");
  res.render("usuarios", {usuarios: rows})
}

export async function crearUsuario(req, res) {
  const nuevoUsuario = req.body;
  nuevoUsuario.fecha_creacion = new Date();

  await pool.query("INSERT INTO usuario SET ?", [nuevoUsuario])

  return res.redirect('/usuarios')
}

export async function editUsuario(req, res) {
  const {id} = req.params;
  const [result] = await pool.query(`SELECT * FROM usuario WHERE id = ${id}`)

  return res.render("usuario_edit", {usuario: result[0]})
}


export async function updateUsuario(req, res) {
  const {id} = req.params;
  const usuarioNuevo = req.body;
  
  usuarioNuevo.fecha_actualizacion = new Date();

  await pool.query("UPDATE usuario set ? WHERE id = ?", [usuarioNuevo, id])
  return res.redirect("/usuarios")
}

export async function borrarUsuario(req, res) {
  const {id} = req.params;
  const result = await pool.query(`DELETE FROM usuario WHERE id = ${id}`);

  result.affectedRows == 1 
  ? console.log("Eliminado correctamente") 
  : console.log("No se eliminó");


  return res.redirect("/usuario")
}