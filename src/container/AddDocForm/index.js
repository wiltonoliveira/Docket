import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import api from "../../config/api";
import "./style.scss";

const AddDocForm = () => {
  const [formData, setFormData] = React.useState({
    docname: "",
  });
  const [personalData, setPersonalData] = React.useState({
    type: 1,
    name: "",
    documentNumber: undefined,
  });
  const [registryData, setRegistryData] = React.useState({
    postCode: "",
    street: "",
    number: 1,
    city: "",
    state: "",
  });

  function setDate() {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    return { day, month, year };
  }

  const setInput = (newValue) => {
    setFormData((form) => ({ ...form, ...newValue }));
  };

  const setPersonalInput = (newValue) => {
    setPersonalData((form) => ({ ...form, ...newValue }));
  };

  const setRegistrytInput = (newValue) => {
    setRegistryData((form) => ({ ...form, ...newValue }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const date = setDate();
    const submit = {
      docname: formData.docname,
      personalData: {
        type: personalData.type,
        name: personalData.name,
        documentNumber: personalData.documentNumber,
      },
      registryData: {
        postCode: registryData.postCode,
        street: registryData.street,
        number: registryData.number,
        city: registryData.city,
        state: registryData.state,
      },
      date: {
        day: date.day,
        month: date.month,
        year: date.year,
      },
    };
    api.post("/documents", submit);
    window.location.reload();
  };

  return (
    <div className="AddDocForm-Container">
      <h4>Adicionar documentos ao pedido</h4>
      <hr />
      <div className="Form-Add">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nome do Documento:</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Digite Aqui"
              value={formData.docname}
              onChange={(e) => {
                setInput({ docname: e.target.value });
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Tipo de Pessoa:</Form.Label>
            <Form.Select
              value={personalData.type}
              onChange={(e) => {
                setPersonalInput({ type: e.target.value });
              }}
            >
              <option value={1}>Pessoa F??sica</option>
              <option value={2}>Pessoa Jur??dica</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>{personalData.type === 1 ? "CPF:" : "CNPJ"}</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Digite Aqui"
              value={personalData.documentNumber}
              onChange={(e) => {
                setPersonalInput({ documentNumber: e.target.value });
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>
              {personalData.type === 1 ? "Nome Completo:" : "Raz??o social"}
            </Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Digite Aqui"
              value={personalData.name}
              onChange={(e) => {
                setPersonalInput({ name: e.target.value });
              }}
            />
          </Form.Group>

          <h5>Dados do cart??rio</h5>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>CEP:</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Digite Aqui"
              value={registryData.postCode}
              onChange={(e) => {
                setRegistrytInput({ postCode: e.target.value });
              }}
            />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} xs={8} controlId="formGridEmail">
              <Form.Label>Rua:</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Digite Aqui"
                value={registryData.street}
                onChange={(e) => {
                  setRegistrytInput({ street: e.target.value });
                }}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>N??mero:</Form.Label>
              <Form.Control
                required
                type="number"
                placeholder="Digite Aqui"
                value={registryData.number}
                onChange={(e) => {
                  setRegistrytInput({ number: e.target.value });
                }}
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} xs={8} controlId="formGridEmail">
              <Form.Label>Cidade:</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Digite Aqui"
                value={registryData.city}
                onChange={(e) => {
                  setRegistrytInput({ city: e.target.value });
                }}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>UF:</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Digite Aqui"
                value={registryData.state}
                onChange={(e) => {
                  setRegistrytInput({ state: e.target.value });
                }}
              />
            </Form.Group>
          </Row>

          <Button
            variant="primary"
            type="submit"
            style={{ borderRadius: "50px" }}
          >
            Criar Documento
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default AddDocForm;
