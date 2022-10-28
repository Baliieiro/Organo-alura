import { useState } from "react";

import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";

const Formulario = (props) => {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");

  const aoSalvar = (event) => {
    // previne o comportamento padrão do navegador
    event.preventDefault();
    props.aoColaboradorCadastrado({
      // tem duas formas de escrever um objeto, nome: nome ou nome,...ai vai ao seu gosto
      nome,
      cargo,
      imagem,
      time,
    })
    setNome('')
    setCargo('')
    setImagem('')
    setTime('')
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <CampoTexto
          obrigatorio={true}
          label="Nome "
          placeholder="Digite seu nome"
          value={nome}
          aoAlterado={(valor) => setNome(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          label="Cargo"
          placeholder="Digite seu cargo"
          value={cargo}
          aoAlterado={(valor) => setCargo(valor)}
        />
        <CampoTexto
          label="Imagem"
          placeholder="Adicione sua imagem"
          value={imagem}
          aoAlterado={(valor) => setImagem(valor)}
        />
        <ListaSuspensa
          obrigatorio={true}
          label="Time"
          itens={props.nomeDosTimes}
          value={time}
          aoSelecionado={(valor) => setTime(valor)}
        />
        <Botao>Criar card</Botao>
      </form>
    </section>
  );
};

export default Formulario;
