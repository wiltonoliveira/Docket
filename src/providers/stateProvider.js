import React from "react";

export const ModalStateContext = React.createContext({});

export const ModalStateProvider = (props) => {
  const [showDeleteModal, setShowDeleteModal] = React.useState(false);
  const [dataId, setDataId] = React.useState(null);
  return (
    <ModalStateContext.Provider
      value={{ dataId, setDataId, showDeleteModal, setShowDeleteModal }}
    >
      {props.children}
    </ModalStateContext.Provider>
  );
};

export const useModalState = () => React.useContext(ModalStateContext);
