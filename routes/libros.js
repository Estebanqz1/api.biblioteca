const express = require('express');
const router = express.Router();

const Libro = require('../models/Libro');

// GET de todos los libros

router.get("/", async(req, res)=>{
    try{
        const libros = await Libro.find();
        res.json(libros);
    }catch (error) {
        res.status(500).json({ error: "Error al obtener los libros" });
    }
});

// POST para crear un nuevo libro
router.post("/", async (req, res) => {
    try {
        const nuevoLibro = new Libro(req.body);
        await nuevoLibro.save();
        res.json(nuevoLibro);
    } catch(error){
        res.status(500).json({error: "Error al crear el Libro"});
    }
});

// PUT para actualizar un Libro existente

router.put("/:id", async (req,res) => {
    try {
        const Libro = await Libro.findByIdAndUpdate(req.params.id, req.body,{
            new: true,
        });
        res.json(Libro);
    } catch (error) {
        res.status(500).json({ error: "Error al actualizar el libro" });
    }
});

// DELETE de un libro
router.delete('/:id', async (req, res) => {
    try {
        await Libro.findByIdAndDelete (req.params.id);
        res.json({ message: 'Libro eliminado correctamente' });
    }catch(error){
        res.status(500).json({ error: 'Error al eliminar el Libro' });
    }
});

module.exports = router;