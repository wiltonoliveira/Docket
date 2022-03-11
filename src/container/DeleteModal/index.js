import { Modal, Button } from "react-bootstrap";
import { useModalState } from "../../providers/stateProvider";
import api from "../../config/api";

const DeleteModal = (props) => {
  const { setShowDeleteModal, dataId } = useModalState();
  const handleDelete = () => {
    api.delete(`/documents/${dataId}`);
    window.location.reload();
  };
  return (
    <Modal show={props.show}>
      <Modal.Header>
        <Modal.Title>Confirmar exclusão</Modal.Title>
      </Modal.Header>
      <Modal.Body>Tem certeza que deseja excluir esse documento?</Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={() => {
            setShowDeleteModal(false);
          }}
        >
          Cancelar
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            handleDelete();
          }}
        >
          Excluir
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteModal;
