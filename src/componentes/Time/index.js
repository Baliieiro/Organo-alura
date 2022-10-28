import Colaborador from "../Colaborador";

import "./Time.css";

const Time = (props) => {
  const corDeFundo = { backgroundColor: props.corSecundaria };
  const corDaBorda = { borderColor: props.corPrimaria };

  return (
    props.colaboradores.length > 0 && (
      <section className="time" style={corDeFundo}>
        <h3 style={corDaBorda}>{props.nomeTime}</h3>
        <div className="colaboradores">
          {/* quando for passar no map precisa usar o msm nome que esta na variavel entre parentes */}
          {props.colaboradores.map((colaborador) => (
            <Colaborador
              nome={colaborador.nome}
              cargo={colaborador.cargo}
              imagem={colaborador.imagem}
            />
          ))}
        </div>
      </section>
    )
  );
};

export default Time;
