// import { ReactComponent as DocumentIcon } from "../../assets/images/document.svg";
import CardDocList from "../../components/CardDocList";
import "./style.scss";

const DocList = () => {
  return (
    // <div className="DocList-Container">
    //   <div className="Empty-Message">
    //     <DocumentIcon />
    //     <p style={{ color: "gray" }}>Nenhum documento criado.</p>
    //   </div>
    // </div>
    <>
      <div className="Cards">
        <CardDocList />
      </div>
    </>
  );
};

export default DocList;
