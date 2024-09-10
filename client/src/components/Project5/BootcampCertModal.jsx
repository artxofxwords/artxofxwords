import {
  //   ModalHeader,
  //   ModalContent,
  //   ModalActions,
  Button,
  Modal,
} from "semantic-ui-react";
import React from "react";
// import {useState} from "react";
import BootcampCert from "../../assets/BootcampCert.pdf";

function exampleReducer(state, action) {
  switch (action.type) {
    case "OPEN_MODAL":
      return { open: true, dimmer: action.dimmer };
    case "CLOSE_MODAL":
      return { open: false };
    default:
      throw new Error();
  }
}

export default function BootcampCertModal() {
  // const [bootcampCertShow, setBootcampCertShow] = useState(false);

  const [state, dispatch] = React.useReducer(exampleReducer, {
    open: false,
    dimmer: undefined,
  });

  const { open, dimmer } = state;

  return (
    <div>
      <Button
        onClick={() => dispatch({ type: "OPEN_MODAL", dimmer: "blurring" })}
        style={{
          display: "inline-flex",
          padding: "0",
          color: "#d97271",
          backgroundColor: "transparent",
        }}
        icon="file outline"
      ></Button>

      <Modal
        dimmer={dimmer}
        open={open}
        onClose={() => dispatch({ type: "CLOSE_MODAL" })}
        style={{ height: "95vh" }}
      >
        <div className="image content" style={{ height: "90vh" }}>
          <iframe
            src={BootcampCert}
            className="image"
            width="100%"
            height="100%"
          ></iframe>
        </div>
      </Modal>
    </div>
  );
}
