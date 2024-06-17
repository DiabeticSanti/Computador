import { pool } from "../db.js";

// Renderizar la lista de marcas
export const renderMarcas = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM marca");
    res.render("marca", { marcas: rows });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Crear una nueva marca
export const createMarca = async (req, res) => {
  try {
    const newMarca = req.body;
    newMarca.fecha_creacion = new Date();
    newMarca.fecha_actualizacion = new Date();
    await pool.query("INSERT INTO marca SET ?", [newMarca]);
    res.redirect("/marcas");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Editar una marca existente
export const editMarca = async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await pool.query("SELECT * FROM marca WHERE id = ?", [id]);
    res.render("marca_edit", { estado_marcas: result[0] });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Actualizar una marca existente
export const updateMarca = async (req, res) => {
  try {
    const { id } = req.params;
    const newMarca = req.body;
    newMarca.fecha_actualizacion = new Date();
    await pool.query("UPDATE marca SET ? WHERE id = ?", [newMarca, id]);
    res.redirect("/marcas");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Eliminar una marca
export const deleteMarca = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query("DELETE FROM marca WHERE id = ?", [id]);
    if (result.affectedRows === 1) {
      res.json({ message: "Marca eliminada" });
    } 
    res.redirect("/marcas");
  } catch (error) {
  }
};
