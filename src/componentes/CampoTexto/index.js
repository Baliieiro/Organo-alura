import "./CampoTexto.css";

const CampoTexto = (props) => {
  // o usestate seria como criar uma let e atribuir algo a ela, mas ao mesmo deixando ela flexivel
  const aoDigitar = (evento) => {
    props.aoAlterado(evento.target.value);
  };

  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input
        value={props.value}
        onChange={aoDigitar}
        required={props.obrigatorio}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default CampoTexto;
