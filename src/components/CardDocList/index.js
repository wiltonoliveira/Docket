import React from "react";
import { ReactComponent as DeleteIcon } from "../../assets/images/delete.svg";
import { useModalState } from "../../providers/stateProvider";
import api from "../../config/api";
import EmptyMessage from "../EmptyMessage";
import "./style.scss";

const CardDocList = () => {
  const [documents, setDocuments] = React.useState([]);
  const { setShowDeleteModal, setDataId } = useModalState();
  React.useEffect(() => {
    async function getDocuments() {
      const response = await api.get("/documents");
      setDocuments(response.data);
    }
    getDocuments();
  }, []);

  return (
    <>
      {documents.length !== 0 ? (
        <div className="Doclist">
          <h5>
            {documents.length}{" "}
            {documents.length !== 1
              ? "documentos solicitados"
              : "documento solicitado"}
          </h5>
          {documents.map((document) => {
            return (
              <div className="Data" key={document.id}>
                <div className="Card-Title">
                  <h5>{document.docname}</h5>
                  <DeleteIcon
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      setShowDeleteModal(true);
                      setDataId(document.id);
                    }}
                  />
                </div>
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
                    <div>
                      <p>Nome: {document.personalData.name}</p>
                      <p>CPF: {document.personalData.documentNumber}</p>
                    </div>
                  </div>
                  <div className="Registry-Data">
                    <p>
                      <b>Dados do cartório</b>
                    </p>
                    <p>CEP: {document.registryData.postCode}</p>

                    <div className="Street">
                      <p>Rua: {document.registryData.street}</p>
                      <p style={{ marginLeft: "1rem" }}>
                        Nº: {document.registryData.number}
                      </p>
                    </div>
                    <div className="Street">
                      <p>Cidade: {document.registryData.city}</p>
                      <p style={{ marginLeft: "1rem" }}>
                        UF: {document.registryData.state}
                      </p>
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
      ) : (
        <EmptyMessage />
      )}
    </>
  );
};

export default CardDocList;
