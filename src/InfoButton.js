import './assets/css/InfoButton.css';
import { useState } from 'react';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { BsFillInfoCircleFill } from 'react-icons/bs';

function InfoButton() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
        <div id="info-btn-box">
            <div onClick={handleShow}>
                <BsFillInfoCircleFill
                    variant="primary"
                    className="text-primary info-button"
                />
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Having trouble finding a city?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p className="modal-text-one">Try adding state and country codes:</p>
                    <p className="modal-text-two"><b>E.g.</b> London, OH, US</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default InfoButton;