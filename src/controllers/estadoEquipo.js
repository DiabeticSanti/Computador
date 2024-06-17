import { pool } from "../db.js";

// Renderizar la lista de estados de equipo
export const renderEstadoEquipo = async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM estado_equipo");
  res.render("estado_equipo", { estado_equipos: rows });
};

// Crear un nuevo estado de equipo
export const createEstadoEquipo = async (req, res) => {
  console.log("Create estado equipos LOG");
  
  const newEstadoEquipo = req.body;
  newEstadoEquipo.fecha_creacion = new Date();
  newEstadoEquipo.fecha_actualizacion = new Date();
  await pool.query("INSERT INTO estado_equipo SET ?", [newEstadoEquipo]);
  res.redirect("/estado_equipos");
};

// Editar un estado de equipo existente
export const editEstadoEquipo = async (req, res) => {
  const { id } = req.params;
  const [result] = await pool.query("SELECT * FROM estado_equipo WHERE id = ?", [id]);
  res.render("estado_equipo_edit", { estado_equipos: result[0] });
};

// Actualizar un estado de equipo existente
export const updateEstadoEquipo = async (req, res) => {
  const { id } = req.params;
  const newEstadoEquipo = req.body;
  newEstadoEquipo.fecha_actualizacion = new Date();
  await pool.query("UPDATE estado_equipo SET ? WHERE id = ?", [newEstadoEquipo, id]);
  res.redirect("/estado_equipos");
};

// Eliminar un estado de equipo
export const deleteEstadoEquipo = async (req, res) => {
  const { id } = req.params;
  const result = await pool.query("DELETE FROM estado_equipo WHERE id = ?", [id]);
  if (result.affectedRows === 1) {
    res.json({ message: "Estado de equipo eliminado" });
  }
  res.redirect("/estado_equipos");
};
