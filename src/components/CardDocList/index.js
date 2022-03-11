import React from "react";
import api from "../../config/api";
import "./style.scss";

const CardDocList = () => {
  const [documents, setDocuments] = React.useState([]);
  React.useEffect(() => {
    async function getDocuments() {
      const response = await api.get("/documents");
      setDocuments(response.data);
    }
    getDocuments();
  }, []);

  return (
    <div className="Doclist">
      <h5>{documents.length} {documents.length !== 1 ? 'documentos solicitados' : 'documento solicitado'}</h5>
      {documents.map((document) => {
        return (
          <div className="Data">
            <h5>{document.docname}</h5>
            <hr />
            <div className="Info-Data">
              <div className="Personal-Data">
                <p>
                  {document.personalData.type === 1 ? (
                    <b>Pessoa Física</b>
                  ) : (
                    <b>Pessoa Jurídica</b>
                  )}
                </p>
                <spam>
                  <p>Nome: {document.personalData.name}</p>
                  <p>CPF: {document.personalData.documentNumber}</p>
                </spam>
              </div>
              <div className="Registry-Data">
                <p>
                  <b>Dados do cartório</b>
                </p>
                <p>CEP: {document.registryData.postCode}</p>

                <div className="Street">
                  <p>Rua: {document.registryData.street}</p>
                  <p style={{ marginLeft: "1rem" }}>Nº: {document.registryData.number}</p>
                </div>
                <div className="Street">
                  <p>Cidade: {document.registryData.city}</p>
                  <p style={{ marginLeft: "1rem" }}>UF: {document.registryData.state}</p>
                </div>
              </div>
            </div>
            <hr />
            <p>
              <b>Data de criação:</b> 11 de maio de 2021
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default CardDocList;
