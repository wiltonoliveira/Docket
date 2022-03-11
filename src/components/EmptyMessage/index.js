import { ReactComponent as DocumentIcon } from "../../assets/images/document.svg";
import './style.scss';

const EmptyMessage = () => {
  return (
    <div className="DocList-Container">
      <div className="Empty-Message">
        <DocumentIcon />
        <p style={{ color: "gray" }}>Nenhum documento criado.</p>
      </div>
    </div>
  );
};

export default EmptyMessage;