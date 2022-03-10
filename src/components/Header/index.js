import { ReactComponent as DocketLogo } from "../../assets/images/docket-brasil.svg";
import "./style.scss";

const Header = () => {
  return (
    <div className="Header-Container">
      <DocketLogo className="Logo" />
    </div>
  );
};

export default Header;
