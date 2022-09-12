//imports
import React, { useState } from "react";
import { Tab, Nav, Button, Modal } from "react-bootstrap";
import Conversations from "./Conversations";
import Contacts from "./Contacts";
import ConversationModal from "./ConversationModal";
import ContactsModal from "./ContactsModal";
const conversationsKey = "conversations";
const contactsKey = "contacts";

export default function Sidebar({ id }) {
  const [activeKey, setActiveKey] = useState(conversationsKey);

  const [modalOpen, setModalOpen] = useState(false);

  const conversationIsOpen = activeKey === conversationsKey;

  function closeModal() {
    setModalOpen(false);
  }

  return (
    <div style={{ width: "250px" }} className="d-flex flex-column">
      <Tab.Container activeKey={activeKey} onSelect={setActiveKey}>
        <Nav variant="tabs" className="justify-content-center">
          <Nav.Item>
            <Nav.Link eventKey={conversationsKey}>Conversations</Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link eventKey={contactsKey}>Contacts</Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content id="tab" className="border-end">
          <Tab.Pane eventKey={conversationsKey}>
            <Conversations />
          </Tab.Pane>
          <Tab.Pane eventKey={contactsKey}>
            <Contacts />
          </Tab.Pane>
        </Tab.Content>
        <div className="p-2 border-top border-right small">
          Your Id:<span className="text-muted">{id}</span>
        </div>
        <Button onClick={() => setModalOpen(true)} className="0">
          New {conversationIsOpen ? "Conversation" : "Contact"}
        </Button>
      </Tab.Container>

      <Modal show={modalOpen} onHide={closeModal}>
        {conversationIsOpen ? (
          <ConversationModal closeModal={closeModal} />
        ) : (
          <ContactsModal closeModal={closeModal} />
        )}
      </Modal>
    </div>
  );
}
