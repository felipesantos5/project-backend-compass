import usuarios from "../models/Usuario.js"

class UsuarioController {

  static listarUsuarios = (req, res) => {
    usuarios.find((err, usuarios) => {
      res.status(200).json(usuarios)
  })
  }

  static listarUsuarioPorId = (req, res) => {
    const id = req.params.id;
    
    usuarios.findById(id, (err, usuarios) => {
      if (err) {
        res.status(404).send({message: `${err.message} - User id not found`})
      } else {
        res.status(200).send(usuarios);
      }
    })
  }

  static cadastrarUsuario = (req, res) => {
    let usuario = new usuarios(req.body);

    usuario.save((err) => {

      if(err) {
        res.status(404).send({message: `${err.message} - User not found.`})
      } else {
        res.status(201).send(usuario.toJSON())
      }
    })
  }

  static atualizarUsuario = (req, res) => {
    const id = req.params.id;

    usuarios.findByIdAndUpdate(id, {$set: req.body}, (err) => {
      if(!err) {
        res.status(200).send({message: 'User successfully updated'})
      } else {
        res.status(404).send({message: `${err.message} - failed to change user.`})
      }
    })
  }

  static excluirUsuario = (req, res) => {
    const id = req.params.id;

    usuarios.findByIdAndDelete(id, (err) =>{
      if(!err) {
        res.status(204).send({message: 'User successfully removed'})
      } else {
        res.status(404).send({message: `${err.message} - id not found`})
      }
    })
  }

  static listarUsersPorNome = (req, res) => {
    const {name} = req.query;

    usuarios.find({ name: { $regex: name, $options: "i" } }, {}, (err, usuarios) => {
      if(usuarios.length == 0){
        res.status(404).send({message: 404})
      } else{
        res.status(200).send(usuarios);
      }
    }).select('-password');
  };

}

export default UsuarioController