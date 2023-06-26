"use client";
import { Modal, Button, Text } from "@nextui-org/react";

import { FormData } from "@/utils/lib/zod";

import { Dispatch, SetStateAction, useEffect, useState } from "react";

import Icon from "./Icon";

import "./SubscriberSuccess.scss";

const SubscriberSuccess = ({
  setVisible,
  bindings,
  formData,
  setFormData,
}: {
  setVisible: Dispatch<SetStateAction<boolean>>;
  bindings: {
    open: boolean;
    onClose: () => void;
  };
  formData: FormData;
  setFormData: Dispatch<SetStateAction<FormData>>;
}) => {
  const { email } = formData;
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <Modal
        scroll
        fullScreen={windowWidth > 768 ? false : true}
        closeButton
        blur
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        className="modal-container"
        {...bindings}
      >
        <Modal.Header className="wrapper">
          <Icon />
          <Text id="modal-title" size={18}>
            Thanks for subscribing
          </Text>
        </Modal.Header>
        <Modal.Body className="wrapper">
          <Text id="modal-description">
            A confirmation email has been sent to <strong>{email}</strong>.
            Please open it and click the button inside to confirm your
            subscription
          </Text>
        </Modal.Body>
        <Modal.Footer className="wrapper">
          <Button
            onPress={() => {
              setFormData({
                email: "",
              });
              setVisible(false);
            }}
          >
            Dimiss message
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export { SubscriberSuccess };
