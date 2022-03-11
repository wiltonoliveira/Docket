import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Lead from "../../container/Lead";
import DocList from "../../container/DocList";
import AddDocForm from "../../container/AddDocForm";
import DeleteModal from "../../container/DeleteModal";
import { useModalState } from "../../providers/stateProvider";
import "./style.scss";

const Home = () => {
  const { showDeleteModal } = useModalState();
  return (
    <>
      <Header />
      <div className="Home-Container">
        <div className="Content">
          <div className="Request-Number">
            <h3>
              <b>Pedido #1</b>
            </h3>
          </div>
          <Lead />
          <div className="Doc-Wrapper">
            <AddDocForm id="AddForm" />
            <DocList id="DocList" />
            <DeleteModal show={showDeleteModal} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
