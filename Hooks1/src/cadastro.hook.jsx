import React, { useState } from "react";
export const useCadastroHook = () => {
  const [dadosCadastro, setDadosCadastro] = useState({
    nome: "",
    email: "",
    senha: "",
  });
 
  const limparDadosCadastro = () => {
    setDadosCadastro({
      nome: "",
      email: "",
      senha: "",
    });
  };
  const capturarDadosInputs = (e) => {
    const { name, value } = e.target;
    setDadosCadastro({ ...dadosCadastro, [name]: value });
  };
  return {
    dadosCadastro,
    setDadosCadastro,
    enviarDadosCadastro,
    limparDadosCadastro,
    capturarDadosInputs,
    Enviar,
  };
};