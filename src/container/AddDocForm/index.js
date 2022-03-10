import { Form, Button, Row, Col } from "react-bootstrap";
import "./style.scss";

const AddDocForm = () => {
  return (
    <div className="AddDocForm-Container">
      <h4>Adicionar documentos ao pedido</h4>
      <hr />
      <div className="Form-Add">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nome do Documento:</Form.Label>
            <Form.Control type="email" placeholder="Digite Aqui" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Tipo de Pessoa:</Form.Label>
            <Form.Select defaultValue="Choose...">
              <option>Pessoa Física</option>
              <option>Pessoa Jurídica</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>CPF:</Form.Label>
            <Form.Control type="email" placeholder="Digite Aqui" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nome Completo:</Form.Label>
            <Form.Control type="email" placeholder="Digite Aqui" />
          </Form.Group>

          <h5>Dados do cartório</h5>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>CEP:</Form.Label>
            <Form.Control type="email" placeholder="Digite Aqui" />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} xs={8} controlId="formGridEmail">
              <Form.Label>Rua:</Form.Label>
              <Form.Control type="email" placeholder="Digite Aqui" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Número:</Form.Label>
              <Form.Control type="email" placeholder="Digite Aqui" />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} xs={8} controlId="formGridEmail">
              <Form.Label>Cidade:</Form.Label>
              <Form.Control type="email" placeholder="Digite Aqui" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>UF:</Form.Label>
              <Form.Control type="email" placeholder="Digite Aqui" />
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
