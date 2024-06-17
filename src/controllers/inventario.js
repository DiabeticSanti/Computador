import { pool } from "../db.js";

// Renderizar la lista de inventarios
export const renderInventario = async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM inventario");
  res.render("inventario", { inventarios: rows });
};

// Crear un nuevo inventario
export const createInventario = async (req, res) => {
  const newInventario = req.body;
  newInventario.fecha_creacion = new Date();
  newInventario.fecha_actualizacion = new Date();
  await pool.query("INSERT INTO inventario SET ?", [newInventario]);
  res.redirect("/inventarios");
};

// Editar un inventario existente
export const editInventario = async (req, res) => {
  const { id } = req.params;
  const [result] = await pool.query("SELECT * FROM inventario WHERE id = ?", [id]);
  res.render("inventario_edit", { inventarios: result[0] });
};

// Actualizar un inventario existente
export const updateInventario = async (req, res) => {
  const { id } = req.params;
  const newInventario = req.body;
  newInventario.fecha_actualizacion = new Date();
  await pool.query("UPDATE inventario SET ? WHERE id = ?", [newInventario, id]);
  res.redirect("/inventarios");
};

// Eliminar un inventario
export const deleteInventario = async (req, res) => {
  const { id } = req.params;
  const result = await pool.query("DELETE FROM inventario WHERE id = ?", [id]);
  if (result.affectedRows === 1) {
    res.json({ message: "Inventario eliminado" });
  }
  res.redirect("/inventarios");
};
