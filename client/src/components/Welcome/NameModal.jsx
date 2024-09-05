import React from "react";
import { useState } from "react";
import {
  ModalHeader,
  ModalContent,
  ModalActions,
  Button,
  Modal,
} from "semantic-ui-react";

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

function ModalExampleDimmer() {
  const [noThanks, setNoThanks] = useState(false);
  const [okay, setOkay] = useState(false);

  if (noThanks) {
    setTimeout(() => setNoThanks(false), 3000);
  }

  if (okay) {
    setTimeout(() => setOkay(false), 3000);
  }

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
          display: "flex",
          alignItems: "center",
          color: "#000000",
          backgroundColor: "#CCf0f0",
          border: "2px solid #d97271",
          borderRadius: "8px",
          height: "4vh",
        }}
      >
        <p style={{ fontFamily: "cursive" }}>&quot;Hi there&quot;🌺</p>
      </Button>

      <Modal
        dimmer={dimmer}
        open={open}
        onClose={() => dispatch({ type: "CLOSE_MODAL" })}
      >
        <ModalHeader>
          <p style={{ color: "#5a555e" }}>
            Thanks for saying hi back
            <Button
              icon="like brown"
              style={{ backgroundColor: "transparent" }}
            />
          </p>
        </ModalHeader>
        <ModalContent>
          <p style={{ fontSize: "1.6em", color: "#5a555e" }}>
            I appreciate the time you are taking to look at my portfolio.
            </p>
            <p style={{ fontSize: "1.6em", color: "#5a555e" }}>  
            If you have time, please fill out the anonymous feedback form in the footer...
          </p>
        </ModalContent>
        <ModalActions>
          <Button
            negative
            onClick={() => {
              setNoThanks(true), dispatch({ type: "CLOSE_MODAL" });
            }}
            style={{
              color: "#000000",
              backgroundColor: "#CCf0f0",
              borderRadius: "8px",
              marginRight: "4px",
              cursor: "pointer",
            }}
          >
            ❌I&apos;d rather not...
          </Button>
          <Button
            positive
            onClick={() => {
              setOkay(true), dispatch({ type: "CLOSE_MODAL" });
            }}
            style={{
              color: "#000000",
              backgroundColor: "#CCf0f0",
              borderRadius: "8px",
              marginRight: "4px",
              cursor: "pointer",
            }}
          >
            ✔Okay, I will!
          </Button>
        </ModalActions>
      </Modal>

      {noThanks && <p style={{ color: "#5a555e" }}>No worries!</p>}

      {okay && <p style={{ color: "#5a555e" }}>Thank you!</p>}
    </div>
  );
}

export default ModalExampleDimmer;
