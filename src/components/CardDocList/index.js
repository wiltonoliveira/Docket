import "./style.scss";

const CardDocList = () => {
  return (
    <div className="Doclist">
      <h5>1 documento solicitado</h5>
      <div className="Data">
        <h5>Certidão de Nascimento</h5>
        <hr />
        <div className="Info-Data">
          <div className="Personal-Data">
            <p>
              <b>Pessoa Física</b>
            </p>
            <spam>
              <p>Nome: João da Silva Santos</p>
              <p>CPF: 000.000.000-00</p>
            </spam>
          </div>
          <div className="Registry-Data">
            <p>
              <b>Dados do cartório</b>
            </p>
            <p>CEP: 99999-999</p>

            <div className="Street">
              <p>Rua: Eugênio Madeiros</p>
              <p style={{ marginLeft: "1rem" }}>Nº: 10</p>
            </div>
            <div className="Street">
              <p>Cidade: São Paulo</p>
              <p style={{ marginLeft: "1rem" }}>UF: SP</p>
            </div>
          </div>
        </div>
        <hr />
        <p>
          <b>Data de criação:</b> 11 de maio de 2021
        </p>
      </div>
    </div>
  );
};

export default CardDocList;