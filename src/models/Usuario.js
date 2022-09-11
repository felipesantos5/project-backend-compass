import mongoose from "mongoose";

const birthDate = (birth) => {
  ;
      let birthDate = new Date(birth);
      let currentDate = new Date();
      let year = 31536000000;
      let age = Math.floor((currentDate - birthDate) / year);
  
      return age >= 18 ? true : false;
  
  }
  
  const formatDate = (date) => {
      let formatedDate = new Date(date);
      return formatedDate.toLocaleDateString();
  }

const usuarioSchema =  new mongoose.Schema(
  {
    id: { type: String },
    name: { type: String, required: true, validate: /[A-zÀ-ú\s]+$/ },
    cpf: { type: String, minlength: 11, maxlength: 11, required: true, validate: /^[0-9]*$/ },
    birthDate: { type: String, set: date => formatDate(date), required: true, validate: [birthDate, "User needs to be over 18 years old"] }, 
    email: { type: String, required: true, validate: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/ },
    password: { type: String, minlength: 6, required: true },
    address: { type: String, required: true, validate: /[A-zÀ-ú\s]/ },
    number: { type: String, required: true, validate: /^[0-9]*$/ },
    complement: { type: String, required: true },
    city: { type: String, required: true, validate: /[A-zÀ-ú\s]/ },
    state: { type: String, required: true, validate: /[A-zÀ-ú\s]/ },
    country: { type: String, required: true, validate: /[A-zÀ-ú\s]/ },
    zipCode: { type: String, minlength: 8, maxlength: 8, required: true, validate: /^[0-9]*$/ }
  },
  {
    versionKey: false

  }
);

const usuarios = mongoose.model('usuarios', usuarioSchema);

export default usuarios;