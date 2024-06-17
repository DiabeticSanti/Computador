import { pool } from "../db.js";

export const renderTipoEquipo = async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM tipo_equipo");
  res.render("tipo_equipo", { tipo_equipos: rows });
};

// Crear un nuevo tipo de equipo
export const createTipoEquipo = async (req, res) => {
  console.log("Create tipo equipos LOG")
  
  const newTipoEquipo = req.body;

  newTipoEquipo.fecha_creacion = new Date();
  newTipoEquipo.fecha_actualizacion = new Date();
  await pool.query("INSERT INTO tipo_equipo SET ?", [newTipoEquipo]);
  res.redirect("/tipo_equipos");
};

// Editar un tipo de equipo existente
export const editTipoEquipo = async (req, res) => {
  const { id } = req.params;
  const [result] = await pool.query("SELECT * FROM tipo_equipo WHERE id = ?", [id]);
  res.render("tipo_equipo_edit", { tipo_equipos: result[0] });
};

// Actualizar un tipo de equipo existente
export const updateTipoEquipo = async (req, res) => {
  const { id } = req.params;
  const newTipoEquipo = req.body;
  newTipoEquipo.fecha_actualizacion = new Date();
  await pool.query("UPDATE tipo_equipo SET ? WHERE id = ?", [newTipoEquipo, id]);
  res.redirect("/tipo_equipos");
};

// Eliminar un tipo de equipo
export const deleteTipoEquipo = async (req, res) => {
  const { id } = req.params;
  const result = await pool.query("DELETE FROM tipo_equipo WHERE id = ?", [id]);
  if (result.affectedRows === 1) {
    res.json({ message: "Tipo de equipo eliminado" });
  }
  res.redirect("/tipo_equipos");
};
