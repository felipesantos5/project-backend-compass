import express from "express";
import UsuarioController from "../controllers/usuariosController.js";

const router = express.Router();

router
  .get("/api/v1/users", UsuarioController.listarUsuarios)
  .get("/api/v1/users/search", UsuarioController.listarUsersPorNome)
  .get("/api/v1/users/:id", UsuarioController.listarUsuarioPorId)

  .post("/api/v1/users", UsuarioController.cadastrarUsuario)
  .put("/api/v1/users/:id", UsuarioController.atualizarUsuario)
  .delete("/api/v1/users/:id", UsuarioController.excluirUsuario)

export default router;