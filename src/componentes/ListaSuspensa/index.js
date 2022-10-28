import "./ListaSuspensa.css";

const ListaSuspensa = (props) => {
  
  const aoSelecionar = (evento) => {
    props.aoSelecionado(evento.target.value);
  };
  
  return (
    <div className="lista-suspensa">
      <label>{props.label}</label>
      <select
        required={props.obrigatorio}
        value={props.valor}
        onChange={aoSelecionar}
      >
        {/* para cada item sua (key= o nome do item) e o valor da option será o nome do item*/}

        {/* para fazer uma function sem o return apenas escreva sem colocar o {} escopo */}

        {/* o props do itens está direto no formulario,acesse o formulario. */}

        {props.itens.map((item) => (
          <option key={item}> {item} </option>
        ))}
      </select>
    </div>
  );
};

export default ListaSuspensa;
